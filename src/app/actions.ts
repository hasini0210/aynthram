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

    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true };
  } catch (error) {
    console.error("Form submission error:", error);
    if (error instanceof z.ZodError) {
      return { success: false, error: "Validation failed. Please check your input." };
    }
    return { success: false, error: "An unexpected error occurred." };
  }
}
