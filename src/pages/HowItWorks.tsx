
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const HowItWorksPage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-wasalety-light-purple">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Wasalety Works
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            A simple 3-step process to transform your freelance career with intelligent assistance.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-12 mb-20 items-center">
              <div className="w-full md:w-1/3">
                <div className="bg-wasalety-light-purple w-24 h-24 rounded-full flex items-center justify-center mx-auto md:mx-0">
                  <span className="text-wasalety-purple text-4xl font-bold">1</span>
                </div>
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Create Your Profile</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Sign up and complete your Wasalety profile with your skills, experience, portfolio, and preferences. The more information you provide, the better we can tailor our recommendations to your needs.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="text-wasalety-purple mr-2" size={20} />
                    <span className="text-gray-700">Add your professional skills</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-wasalety-purple mr-2" size={20} />
                    <span className="text-gray-700">Upload your portfolio</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-wasalety-purple mr-2" size={20} />
                    <span className="text-gray-700">Set your preferences</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Connector */}
            <div className="hidden md:block w-1 h-16 bg-gray-200 mx-auto mb-4"></div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-12 mb-20 items-center">
              <div className="w-full md:w-1/3 order-1 md:order-1">
                <div className="bg-wasalety-light-purple w-24 h-24 rounded-full flex items-center justify-center mx-auto md:mx-0">
                  <span className="text-wasalety-purple text-4xl font-bold">2</span>
                </div>
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left order-2 md:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Personalized Recommendations</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our AI analyzes your profile and the Egyptian market to provide personalized recommendations for pricing, job opportunities, and communication improvements.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="text-wasalety-purple mr-2" size={20} />
                    <span className="text-gray-700">Receive pricing suggestions</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-wasalety-purple mr-2" size={20} />
                    <span className="text-gray-700">View matched job opportunities</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-wasalety-purple mr-2" size={20} />
                    <span className="text-gray-700">Get communication tips</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Connector */}
            <div className="hidden md:block w-1 h-16 bg-gray-200 mx-auto mb-4"></div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/3">
                <div className="bg-wasalety-light-purple w-24 h-24 rounded-full flex items-center justify-center mx-auto md:mx-0">
                  <span className="text-wasalety-purple text-4xl font-bold">3</span>
                </div>
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Track Your Progress and Grow</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Monitor your deadlines, review your performance, and continuously improve with data-driven insights and suggestions from Wasalety.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="text-wasalety-purple mr-2" size={20} />
                    <span className="text-gray-700">Manage project deadlines</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-wasalety-purple mr-2" size={20} />
                    <span className="text-gray-700">Track performance metrics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-wasalety-purple mr-2" size={20} />
                    <span className="text-gray-700">Receive improvement suggestions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Journey Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            The Wasalety Experience
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-20 h-20 bg-wasalety-light-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Analyze</h3>
              <p className="text-gray-700">
                Our AI analyzes your profile and the local market to understand your unique position and opportunities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-20 h-20 bg-wasalety-light-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Recommend</h3>
              <p className="text-gray-700">
                You receive personalized recommendations for pricing, jobs, and communication improvements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-20 h-20 bg-wasalety-light-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Improve</h3>
              <p className="text-gray-700">
                With continuous feedback and assistance, you improve your skills, rates, and client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-3">How accurate are the pricing recommendations?</h3>
              <p className="text-gray-700">
                Our pricing recommendations are based on real market data from the Egyptian freelance market, adjusted for your skill level and experience. We continuously update our data to ensure accuracy.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-3">Do I need to create an account to use Wasalety?</h3>
              <p className="text-gray-700">
                Yes, you need to create a profile to receive personalized recommendations and track your progress. The process is quick and helps us provide tailored assistance.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-3">How does the job matching work?</h3>
              <p className="text-gray-700">
                We analyze your skills, experience, and preferences and match them with available opportunities in our database. The more complete your profile, the better matches we can provide.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-3">Is Wasalety available in Arabic?</h3>
              <p className="text-gray-700">
                Yes, Wasalety fully supports both Egyptian Arabic and Modern Standard Arabic. You can use the platform in your preferred language.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-wasalety-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Journey with Wasalety Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of freelancers who are growing their careers with intelligent assistance.
          </p>
          <Button className="bg-white text-wasalety-purple hover:bg-gray-100 px-8 py-6 text-lg">
            Create Your Profile
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default HowItWorksPage;
