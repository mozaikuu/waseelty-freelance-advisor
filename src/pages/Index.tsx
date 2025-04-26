
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";
import FeatureCard from "@/components/FeatureCard";
import { TrendingUp, Briefcase, Clock, MessageCircle } from "lucide-react";

const HomePage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Wasalety – Your Smart Freelance Assistant
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Price your services, find the best opportunities, and meet deadlines – all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-wasalety-purple hover:bg-wasalety-dark-purple text-white px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-wasalety-purple text-wasalety-purple hover:bg-wasalety-light-purple px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Wasalety offers smart tools designed specifically for freelancers in the Egyptian market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Smart Pricing"
              description="Get competitive pricing recommendations based on real-time market analysis."
              icon={TrendingUp}
            />
            <FeatureCard
              title="Job Matching"
              description="Receive tailored job suggestions that match your skills and expertise."
              icon={Briefcase}
              iconBgColor="bg-blue-100"
            />
            <FeatureCard
              title="Deadline Tracking"
              description="Never miss a project deadline with our smart reminder system."
              icon={Clock}
              iconBgColor="bg-yellow-100"
            />
            <FeatureCard
              title="Communication Tips"
              description="Enhance your client communication skills with AI-driven suggestions."
              icon={MessageCircle}
              iconBgColor="bg-green-100"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Wasalety Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Wasalety?
            </h2>
            <p className="text-lg text-gray-600">
              We understand the unique challenges freelancers face in the Egyptian market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-wasalety-light-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-wasalety-purple">🇪🇬</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Localized Insights</h3>
              <p className="text-gray-600">
                Market analytics and recommendations specific to the Egyptian freelance market.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-wasalety-light-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-wasalety-purple">🌐</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Multilingual Support</h3>
              <p className="text-gray-600">
                Full support for Egyptian Arabic and Modern Standard Arabic.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-wasalety-light-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-wasalety-purple">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Personal Assistant</h3>
              <p className="text-gray-600">
                An AI assistant that understands your profile and helps you grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-wasalety-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Boost Your Freelance Career?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Wasalety today and take your freelance business to the next level.
          </p>
          <Button className="bg-white text-wasalety-purple hover:bg-gray-100 px-8 py-6 text-lg">
            Get Started Now
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
