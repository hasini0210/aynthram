"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string(),
  organization: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  program: z.string(),
  message: z.string().optional(),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  try {
    const validatedData = formSchema.parse(values);
    
    console.log("Form submission received:", validatedData);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // In a real application, you would integrate with an email service or CRM here.
    // For example:
    // await sendEmail({
    //   to: 'vasudev.aynthram@gmail.com',
    //   subject: `New Inquiry from ${validatedData.name}`,
    //   html: `<p>Name: ${validatedData.name}</p>...`
    // });

    return { success: true };
  } catch (error) {
    console.error("Form submission error:", error);
    if (error instanceof z.ZodError) {
      // Create a more detailed error message from Zod errors
      const errorMessages = error.errors.map(e => `${e.path.join('.')} - ${e.message}`).join(', ');
      return { success: false, error: `Validation failed: ${errorMessages}` };
    }
    return { success: false, error: "An unexpected error occurred. Please try again later." };
  }
}