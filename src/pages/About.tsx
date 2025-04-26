
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-wasalety-light-purple">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Wasalety
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Empowering freelancers to succeed with intelligent tools designed specifically for the Egyptian market.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Mission
            </h2>
            
            <div className="text-lg text-gray-700 space-y-6">
              <p>
                At Wasalety, we believe that freelancers deserve powerful tools that understand their specific needs and challenges. Our mission is to empower freelancers in Egypt with intelligent assistance that helps them price their services competitively, find relevant opportunities, manage their deadlines, and improve their client communication.
              </p>
              <p>
                We've built Wasalety to be more than just a set of tools – it's a smart assistant that learns from your profile, understands the local market, and provides personalized recommendations to help you grow your freelance business.
              </p>
              <p>
                By focusing specifically on the Egyptian market, we provide insights and recommendations that are truly relevant to your local context, helping you navigate the unique challenges and opportunities of freelancing in Egypt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Wasalety Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Wasalety?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-wasalety-purple mb-4">
                Personal Assistant Experience
              </h3>
              <p className="text-gray-700">
                Unlike generic tools, Wasalety acts as your personal assistant, learning from your profile, work history, and preferences to provide truly personalized recommendations and assistance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-wasalety-purple mb-4">
                Localized Insights
              </h3>
              <p className="text-gray-700">
                We understand the Egyptian freelance market, including its rates, opportunities, challenges, and cultural context. Our recommendations are tailored specifically to help you succeed locally.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-wasalety-purple mb-4">
                Multilingual Support
              </h3>
              <p className="text-gray-700">
                Wasalety offers full support for both Egyptian Arabic and Modern Standard Arabic, allowing you to work in the language you're most comfortable with.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-wasalety-purple mb-4">
                Unique Focus on Freelancers' Real Needs
              </h3>
              <p className="text-gray-700">
                We've built Wasalety based on extensive research with real freelancers, focusing on the practical tools and features that actually help you earn more, work more efficiently, and grow your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Optional) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Our Team
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Wasalety was created by a team of passionate developers, designers, and freelancers who understand the challenges of the freelance market in Egypt.
          </p>
          
          {/* Placeholder for team photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-4">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Team Member</h3>
              <p className="text-gray-600">Co-Founder & CEO</p>
            </div>
            <div className="p-4">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Team Member</h3>
              <p className="text-gray-600">Co-Founder & CTO</p>
            </div>
            <div className="p-4">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Team Member</h3>
              <p className="text-gray-600">Head of Product</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-wasalety-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Wasalety Community
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of a growing community of freelancers who are leveling up their businesses with smart tools.
          </p>
          <Button className="bg-white text-wasalety-purple hover:bg-gray-100 px-8 py-6 text-lg">
            Get Started Now
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;
