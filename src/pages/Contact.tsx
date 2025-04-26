
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-wasalety-light-purple">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                We're here to help and answer any question you might have. We look forward to hearing from you.
              </p>

              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-wasalety-purple mr-3 text-lg">✉️</span>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">info@wasalety.com</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wasalety-purple mr-3 text-lg">📱</span>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">+20 123 456 7890</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wasalety-purple mr-3 text-lg">📍</span>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-600">Cairo, Egypt</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-wasalety-light-purple flex items-center justify-center text-wasalety-purple hover:bg-wasalety-purple hover:text-white transition-colors">
                    <span>FB</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-wasalety-light-purple flex items-center justify-center text-wasalety-purple hover:bg-wasalety-purple hover:text-white transition-colors">
                    <span>TW</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-wasalety-light-purple flex items-center justify-center text-wasalety-purple hover:bg-wasalety-purple hover:text-white transition-colors">
                    <span>IG</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-wasalety-light-purple flex items-center justify-center text-wasalety-purple hover:bg-wasalety-purple hover:text-white transition-colors">
                    <span>LI</span>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Send Us a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        required 
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        required 
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <Input 
                        id="subject" 
                        placeholder="How can we help?" 
                        required 
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Your message..." 
                        rows={5} 
                        required 
                        className="w-full"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-wasalety-purple hover:bg-wasalety-dark-purple"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Visit Us
          </h2>
          
          {/* Placeholder for map */}
          <div className="max-w-5xl mx-auto h-96 bg-gray-300 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Map placeholder</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Common Questions
          </h2>
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">
                What is the response time?
              </h3>
              <p className="text-gray-700">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">
                Do you offer technical support?
              </h3>
              <p className="text-gray-700">
                Yes, our team is available to help with any technical issues you might encounter.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">
                Can I request a demo?
              </h3>
              <p className="text-gray-700">
                Yes! Contact us to schedule a personalized demo of Wasalety's features.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">
                Do you have a physical office?
              </h3>
              <p className="text-gray-700">
                Yes, our main office is located in Cairo. Feel free to visit us!
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactPage;
