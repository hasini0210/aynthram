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
import { User, Mail, Phone, Building, MessageSquare } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  organization: z.string().optional(),
  email: z.string().email("Invalid email address."),
  message: z.string().optional(),
});

// This is a subset of the main form schema for the action
const actionSchema = z.object({
  name: z.string(),
  organization: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  program: z.string(),
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
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // We add the missing fields for the server action
    const submissionData: z.infer<typeof actionSchema> = {
      ...values,
      phone: '', // Not in this form
      program: 'Other Inquiry', // Default value
    };

    const result = await submitContactForm(submissionData);
    if (result.success) {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out! We'll get back to you shortly.",
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
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground">Begin Your Leadership Transformation</h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
                Ready to craft your leadership legacy? Connect with us to explore how ancient wisdom can transform your modern leadership journey.
            </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
            <div className="lg:col-span-2 relative">
               <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-secondary/50"></div>
               <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-secondary/50"></div>
               <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-secondary/50"></div>
               <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-secondary/50"></div>
              <div className="p-8 rounded-lg shadow-lg bg-primary border border-border/10 h-full">
                <h3 className="font-headline text-2xl font-semibold mb-6 text-primary-foreground">Get In Touch</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField control={form.control} name="name" render={({ field }) => (<FormItem><FormLabel className="text-primary-foreground/80">Your Name</FormLabel><FormControl><Input placeholder="John Doe" {...field} className="bg-primary border-primary-foreground/30 focus:border-secondary focus:ring-secondary" /></FormControl><FormMessage /></FormItem>)} />
                        <FormField control={form.control} name="email" render={({ field }) => (<FormItem><FormLabel className="text-primary-foreground/80">Email Address</FormLabel><FormControl><Input placeholder="john.doe@company.com" {...field} className="bg-primary border-primary-foreground/30 focus:border-secondary focus:ring-secondary"/></FormControl><FormMessage /></FormItem>)} />
                        <FormField control={form.control} name="organization" render={({ field }) => (<FormItem><FormLabel className="text-primary-foreground/80">Organization</FormLabel><FormControl><Input placeholder="Your Company" {...field} className="bg-primary border-primary-foreground/30 focus:border-secondary focus:ring-secondary"/></FormControl><FormMessage /></FormItem>)} />
                        <FormField control={form.control} name="message" render={({ field }) => (<FormItem><FormLabel className="text-primary-foreground/80">Tell us about your leadership goals...</FormLabel><FormControl><Textarea placeholder="I'm interested in..." {...field} className="bg-primary border-primary-foreground/30 focus:border-secondary focus:ring-secondary"/></FormControl><FormMessage /></FormItem>)} />
                    <Button type="submit" variant="secondary" size="lg" className="w-full uppercase tracking-wider font-medium" disabled={form.formState.isSubmitting}>
                      {form.formState.isSubmitting ? 'Sending...' : 'Start the Conversation'}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-8">
                <div>
                    <h3 className="font-headline text-2xl font-semibold mb-4 text-primary-foreground">Connect with Our Founder</h3>
                    <div className="space-y-3">
                         <div className="flex items-center gap-3">
                            <User className="w-5 h-5 text-secondary"/>
                            <div>
                                <p className="font-semibold text-primary-foreground">Vasudev Vangara</p>
                                <p className="text-sm text-primary-foreground/70">Founder & CEO</p>
                            </div>
                        </div>
                        <a href="mailto:vasudev.aynthram@gmail.com" className="flex items-center gap-3 group">
                            <Mail className="w-5 h-5 text-secondary"/>
                            <span className="text-primary-foreground/70 group-hover:text-secondary transition-colors">vasudev.aynthram@gmail.com</span>
                        </a>
                        <a href="tel:+919703831819" className="flex items-center gap-3 group">
                            <Phone className="w-5 h-5 text-secondary"/>
                            <span className="text-primary-foreground/70 group-hover:text-secondary transition-colors">+91 9703831819</span>
                        </a>
                    </div>
                </div>

                <div className="p-6 rounded-lg bg-primary/80 border border-primary-foreground/10">
                     <h3 className="font-headline text-xl font-semibold text-primary-foreground">Transform Your Organization</h3>
                     <p className="mt-2 text-primary-foreground/70">From individual leadership growth to organization-wide cultural transformation, discover how Aynthram can help you build leaders who don’t just stay relevant but redefine the game.</p>
                     <Link href="/programs">
                        <Button variant="outline" className="mt-4 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">Learn More</Button>
                     </Link>
                </div>

                <div className="p-6 rounded-lg bg-primary border border-primary-foreground/10">
                     <h3 className="font-headline text-xl font-semibold text-primary-foreground">Market Impact</h3>
                     <ul className="mt-3 space-y-2 text-sm text-primary-foreground/70 list-disc list-inside">
                        <li>Corporate L&D market in India: ₹5,800 Cr (8% CAGR)</li>
                        <li>Experiential tourism projected: ₹15,000 Cr by 2027</li>
                        <li>Heritage preservation through innovation</li>
                     </ul>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}