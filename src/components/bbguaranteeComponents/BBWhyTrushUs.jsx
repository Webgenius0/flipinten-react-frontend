import React from "react";
import { Shield, FileText, ArrowRight, Play } from "lucide-react";
import Container from "../common/Container";

export default function BBWhyTrushUs() {
  return (
    <div className="bg-gray-50 py-[120px] px-4 sm:px-6 lg:px-8">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - Success Stories */}
          <div className="order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-pink-100 via-purple-50 to-green-100 rounded-3xl p-8 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-20"></div>
              <div className="absolute bottom-8 left-6 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30"></div>

              {/* Laptop Mockup */}
              <div className="relative bg-gray-800 rounded-xl p-2 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="bg-black rounded-lg overflow-hidden">
                  {/* Screen Content */}
                  <div className="aspect-video bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 relative">
                    <img
                      src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Video content creator"
                      className="w-full h-full object-cover opacity-90"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white bg-opacity-90 rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-200 cursor-pointer">
                        <Play
                          className="w-8 h-8 text-red-600 ml-1"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Laptop Base */}
                <div className="h-2 bg-gray-700 rounded-b-xl"></div>
              </div>
            </div>

            {/* Success Story Content */}
            <div className="mt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Authentic Success Stories
              </h2>

              <blockquote className="relative">
                <div className="text-lg text-gray-600 italic leading-relaxed">
                  "They bought back my channel when life got busy - no hassle!"
                </div>
                <footer className="mt-4">
                  <div className="text-gray-500 font-medium">— Jamie R.</div>
                </footer>

                {/* Quote Decoration */}
                <div className="absolute -top-2 -left-2 text-4xl text-red-200 font-serif">
                  "
                </div>
              </blockquote>
            </div>
          </div>

          {/* Right Section - Why Trust Us */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
              Why Trust Us?
            </h2>

            <div className="space-y-10">
              {/* Contract-Backed Guarantee */}
              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors duration-200">
                      <Shield className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      100% Contract-Backed Guarantee
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our commitment is legally binding. We stand behind our
                      promise to buy back your channel if it doesn't meet the
                      agreed metrics.
                    </p>
                  </div>
                </div>
              </div>

              {/* Legal Transparency */}
              <div className="group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors duration-200">
                      <FileText className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Legal Transparency
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      All terms clearly defined and explained. No hidden
                      conditions or fine print. View our complete terms.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-12">
              <button className="group bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                <span>Start Your Risk-Free Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
