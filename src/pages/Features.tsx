
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { TrendingUp, Briefcase, Clock, MessageCircle } from "lucide-react";

const FeaturesPage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-wasalety-light-purple">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Features
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Discover the powerful tools that make Wasalety the ultimate assistant for freelancers in Egypt.
          </p>
        </div>
      </section>

      {/* Smart Pricing Feature */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center mb-4">
                <div className="bg-wasalety-light-purple w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp className="text-wasalety-purple" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Smart Pricing</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Get competitive pricing advice based on live market analysis. Wasalety analyzes current rates for your skills and experience level in the Egyptian market to help you price your services optimally.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-wasalety-purple mr-2">✓</span>
                  <span className="text-gray-700">Market-based pricing recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wasalety-purple mr-2">✓</span>
                  <span className="text-gray-700">Skill and experience-level adjustments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wasalety-purple mr-2">✓</span>
                  <span className="text-gray-700">Egyptian market specifics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wasalety-purple mr-2">✓</span>
                  <span className="text-gray-700">Dynamic adjustment recommendations</span>
                </li>
              </ul>
              <Button className="bg-wasalety-purple hover:bg-wasalety-dark-purple">
                Learn More
              </Button>
            </div>
            <div className="order-1 md:order-2 bg-gray-100 rounded-lg h-80 flex items-center justify-center">
              <div className="text-6xl">📈</div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Opportunities Feature */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
              <div className="text-6xl">🎯</div>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Briefcase className="text-wasalety-purple" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Job Opportunities</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Receive customized freelance gigs that match your skills. Our smart algorithm looks at your profile, skills, and past work to find opportunities that are truly relevant to you.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-wasalety-purple mr-2">✓</span>
                  <span className="text-gray-700">Personalized job matching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wasalety-purple mr-2">✓</span>
                  <span className="text-gray-700">Skill and interest-based filtering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wasalety-purple mr-2">✓</span>
                  <span className="text-gray-700">Egyptian market focus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wasalety-purple mr-2">✓</span>
                  <span className="text-gray-700">Profile-enhancing suggestions</span>
                </li>
              </ul>
              <Button className="bg-wasalety-purple hover:bg-wasalety-dark-purple">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Deadline Manager Feature */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Clock className="text-wasalety-purple" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Deadline Manager</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Never miss a project deadline again with proactive reminders. Our intelligent reminder system helps you stay on track with all your projects and deadlines.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-wasalety-purple mr-2">✓</span>
                  <span className="text-gray-700">Smart deadline tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wasalety-purple mr-2">✓</span>
                  <span className="text-gray-700">Customizable reminders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wasalety-purple mr-2">✓</span>
                  <span className="text-gray-700">Project milestone management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wasalety-purple mr-2">✓</span>
                  <span className="text-gray-700">Time management suggestions</span>
                </li>
              </ul>
              <Button className="bg-wasalety-purple hover:bg-wasalety-dark-purple">
                Learn More
              </Button>
            </div>
            <div className="order-1 md:order-2 bg-gray-100 rounded-lg h-80 flex items-center justify-center">
              <div className="text-6xl">⏰</div>
            </div>
          </div>
        </div>
      </section>

      {/* Communication Feature */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
              <div className="text-6xl">💬</div>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <MessageCircle className="text-wasalety-purple" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Communication Boost</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Enhance your negotiation and client communication skills with AI-driven tips. Learn how to communicate more effectively with clients to improve satisfaction and secure better rates.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-wasalety-purple mr-2">✓</span>
                  <span className="text-gray-700">Communication templates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wasalety-purple mr-2">✓</span>
                  <span className="text-gray-700">Negotiation coaching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wasalety-purple mr-2">✓</span>
                  <span className="text-gray-700">Multilingual support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wasalety-purple mr-2">✓</span>
                  <span className="text-gray-700">Client relationship management</span>
                </li>
              </ul>
              <Button className="bg-wasalety-purple hover:bg-wasalety-dark-purple">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-wasalety-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Freelance Career?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start using Wasalety today and experience the difference our smart features can make.
          </p>
          <Button className="bg-white text-wasalety-purple hover:bg-gray-100 px-8 py-6 text-lg">
            Get Started Now
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default FeaturesPage;
