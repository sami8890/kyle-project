"use client";

import { useEffect, useState } from "react";
import { Calendar, Check } from "lucide-react";

const CTASection: React.FC = () => {
  // State to track if the Cal widget is loaded
  const [, setCalLoaded] = useState(false);

  // Dynamically load Cal.com script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cal.com/widget.js"; // Cal.com widget script URL
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      console.log("Cal widget script loaded!");
      setCalLoaded(true); // Mark that Cal is loaded
    };

    // Cleanup script if necessary
    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleCalendarOpen = () => {
    // Redirect to the link directly
    window.location.href = "https://cal.com/contntr/call";
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#080808] to-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#111] to-[#0c0c0c] rounded-xl overflow-hidden border border-gray-800 shadow-xl">
          <div className="p-6 sm:p-8 md:p-12">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-[#00B9D6]/10 text-[#00B9D6] text-xs sm:text-sm font-medium mb-4">
                Free Growth Blueprint
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to Attract{" "}
                <span className="text-[#00B9D6] relative">
                  Premium Clients
                  <svg
                    className="absolute -bottom-1 sm:-bottom-2 left-0 w-full"
                    viewBox="0 0 300 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5.5C32.3333 2.16667 143.4 -1.3 299 9.5"
                      stroke="#00B9D6"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                ?
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                Book a free Growth Blueprint Session to discover how our
                specialized SEO strategy can help your software development
                agency scale predictably.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <div className="bg-black/50 p-4 sm:p-6 rounded-lg border border-gray-800 mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                    What You&apos;ll Get:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Custom growth strategy tailored to your agency",
                      "Competitor analysis and opportunity assessment",
                      "Technical SEO audit of your current website",
                      "Content gap analysis and keyword recommendations",
                      "Clear roadmap for implementation",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#00B9D6]/15 flex items-center justify-center mr-3">
                          <Check className="text-[#00B9D6] w-3 h-3" />
                        </div>
                        <span className="text-sm sm:text-base text-gray-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:hidden bg-black/30 p-4 rounded-lg border border-gray-800 mb-6">
                  <button
                    onClick={handleCalendarOpen}
                    className="w-full bg-gradient-to-r from-[#00B9D6] to-[#00D6C3] text-black px-4 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-[#00B9D6]/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Schedule Your Free Call</span>
                  </button>
                </div>
              </div>

              <div className="hidden md:block bg-black/30 p-6 rounded-lg border border-gray-800">
                <div className="space-y-6">
                  <div className="bg-black/20 p-6 rounded-lg border border-gray-800">
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Ready to grow your business?
                    </h4>
                    <p className="text-gray-300 mb-4">
                      Click the button below to schedule a call with our team
                      and discover how we can help you attract premium clients.
                    </p>
                    <button
                      onClick={handleCalendarOpen}
                      className="w-full bg-gradient-to-r from-[#00B9D6] to-[#00D6C3] text-black px-4 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-[#00B9D6]/20 transition-all flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>Schedule Your Free Call</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
