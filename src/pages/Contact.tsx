import { useState } from "react";
import { useSEO } from "@/hooks/use-seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  useSEO({ title: "Contact Us | ImageToText.fun", description: "Get in touch with the ImageToText.fun team." });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight mb-6">Get in Touch</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Have a question about our OCR technology, found a bug, or want to suggest a new feature? We'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email us directly</p>
                    <p>hello@imagetotext.fun</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-2xl p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6">Thanks for reaching out. We'll get back to you shortly.</p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>Send another message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required placeholder="John Doe" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required placeholder="john@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" required placeholder="How can we help?" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" required placeholder="Your message here..." className="min-h-[150px] resize-none" />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Processing in browser..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
