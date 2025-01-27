"use client";
import React from "react";
import { Send, CheckCircle } from "lucide-react";
import { TypingText } from "@/components/ui/typing-text";

const ContactForm = () => {
  const [] = React.useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const [submitted, setSubmitted] = React.useState(false);


  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setSubmitted(true);
    // Add your form submission logic here
  };

  if (submitted) {
    return (
      <div className="w-full h-96 flex items-center justify-center">
        <div className="text-center space-y-4">
          <CheckCircle className="w-16 h-16 text-cyan-500 mx-auto" />
          <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
          <p className="text-gray-400">
            We&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-black">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/10 via-black to-black" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 py-24 ">
        {/* Status pill */}
        <div
          className="inline-flex items-center rounded-full px-3 py-1 text-sm 
                    text-cyan-300 bg-cyan-950 border border-cyan-800/50 mb-8"
        >
          <span className="w-1 h-1 rounded-full bg-cyan-400 mr-2" />
          Let&apos;s Connect
        </div>

        <h2 className="text-4xl font-bold text-white mb-2">
          Start Your Journey With Us
        </h2>
        <p className="text-gray-400 mb-12">
          <TypingText text=" Share your goals and we&apos;ll help you achieve them with our proven  strategies. Let&apos;s get started! "></TypingText>
       
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                id="name"
                placeholder=" "
                className="peer w-full px-4 py-3 bg-gray-900/50 border border-gray-800 
                          rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent
                          text-white placeholder-transparent transition-all duration-200"
                required
              />
              <label
                htmlFor="name"
                className="absolute left-4 -top-6 text-sm text-gray-400
                          peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
                          peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm 
                          peer-focus:text-cyan-500 transition-all duration-200"
              >
                Your Name
              </label>
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder=" "
                className="peer w-full px-4 py-3 bg-gray-900/50 border border-gray-800 
                          rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent
                          text-white placeholder-transparent transition-all duration-200"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-4 -top-6 text-sm text-gray-400
                          peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
                          peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm 
                          peer-focus:text-cyan-500 transition-all duration-200"
              >
                Email Address
              </label>
            </div>

            {/* Website Input */}
            <div className="relative md:col-span-2">
              <input
                type="url"
                id="website"
                placeholder=" "
                className="peer w-full px-4 py-3 bg-gray-900/50 border border-gray-800 
                          rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent
                          text-white placeholder-transparent transition-all duration-200"
              />
              <label
                htmlFor="website"
                className="absolute left-4 -top-6 text-sm text-gray-400
                          peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
                          peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm 
                          peer-focus:text-cyan-500 transition-all duration-200"
              >
                Website URL (optional)
              </label>
            </div>

            {/* Message Input */}
            <div className="relative md:col-span-2">
              <textarea
                id="message"
                rows={4}
                placeholder=" "
                className="peer w-full px-4 py-3 bg-gray-900/50 border border-gray-800 
                          rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent
                          text-white placeholder-transparent transition-all duration-200 resize-none"
                required
              />
              <label
                htmlFor="message"
                className="absolute left-4 -top-6 text-sm text-gray-400
                          peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
                          peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm 
                          peer-focus:text-cyan-500 transition-all duration-200"
              >
                Tell us about your project
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 
                      text-black font-medium rounded-lg transition-colors duration-200
                      flex items-center justify-center gap-2 group"
          >
            Send Message
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
