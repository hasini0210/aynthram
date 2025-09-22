"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { submitContactForm } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  organization: z.string().optional(),
  email: z.string().email("Invalid email address."),
  phone: z.string().optional(),
  program: z.string({ required_error: "Please select a program." }),
  message: z.string().optional(),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      organization: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await submitContactForm(values);
    if (result.success) {
      toast({
        title: "Message Sent!",
        description: "Thanks — our program manager will contact you within 48 hours.",
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Something went wrong.",
        description: result.error || "Please try again later.",
      });
    }
  }

  return (
    <section id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="space-y-6">
                <h2 className="font-headline text-3xl md:text-4xl font-bold">Begin Your Transformation</h2>
                <p className="text-lg text-primary-foreground/80">
                    Reach out to book a program, request a brochure, or discuss a custom engagement for your team.
                </p>
                <div className="space-y-4 pt-4">
                    <a href="mailto:vasudev.aynthram@gmail.com" className="flex items-center gap-4 group">
                        <Mail className="w-6 h-6 text-secondary"/>
                        <span className="text-lg group-hover:text-secondary transition-colors">vasudev.aynthram@gmail.com</span>
                    </a>
                    <a href="tel:+919703831819" className="flex items-center gap-4 group">
                        <Phone className="w-6 h-6 text-secondary"/>
                        <span className="text-lg group-hover:text-secondary transition-colors">+91 9703831819</span>
                    </a>
                </div>
            </div>
            <div className="p-8 rounded-lg border border-primary-foreground/20 bg-primary/50">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField control={form.control} name="name" render={({ field }) => (<FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="John Doe" {...field} className="bg-primary text-primary-foreground" /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="email" render={({ field }) => (<FormItem><FormLabel>Email</FormLabel><FormControl><Input placeholder="john.doe@company.com" {...field} className="bg-primary text-primary-foreground"/></FormControl><FormMessage /></FormItem>)} />
                </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField control={form.control} name="phone" render={({ field }) => (<FormItem><FormLabel>Phone (Optional)</FormLabel><FormControl><Input placeholder="+91 12345 67890" {...field} className="bg-primary text-primary-foreground"/></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="organization" render={({ field }) => (<FormItem><FormLabel>Organization (Optional)</FormLabel><FormControl><Input placeholder="Your Company" {...field} className="bg-primary text-primary-foreground"/></FormControl><FormMessage /></FormItem>)} />
                </div>
                <FormField control={form.control} name="program" render={({ field }) => (<FormItem><FormLabel>Program of Interest</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger className="bg-primary text-primary-foreground"><SelectValue placeholder="Select a program" /></SelectTrigger></FormControl><SelectContent><SelectItem value="Leadership Academy">Leadership Academy</SelectItem><SelectItem value="Founders' Escape">Founders’ Escape</SelectItem><SelectItem value="Corporate & Experiential Tourism">Corporate & Experiential Tourism</SelectItem><SelectItem value="Other">Other Inquiry</SelectItem></SelectContent></Select><FormMessage /></FormItem>)} />
                <FormField control={form.control} name="message" render={({ field }) => (<FormItem><FormLabel>Message (Optional)</FormLabel><FormControl><Textarea placeholder="Tell us about your needs..." {...field} className="bg-primary text-primary-foreground"/></FormControl><FormMessage /></FormItem>)} />
                <Button type="submit" variant="secondary" size="lg" className="w-full uppercase tracking-wider font-medium" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? 'Sending...' : 'Enquire Now'}
                </Button>
              </form>
            </Form>
            </div>
        </div>
      </div>
    </section>
  );
}
