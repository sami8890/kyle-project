"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart, Users, TrendingUp, ArrowRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const results = [
  {
    icon: BarChart,
    title: "Organic Traffic Increase",
    value: "250%",
    description: "Average increase in organic traffic",
    details:
      "Our clients see a significant boost in their website visitors, with many experiencing a 250% or higher increase in organic traffic within the first 6 months of our SEO strategy implementation.",
  },
  {
    icon: Users,
    title: "First Page Rankings",
    value: "80%",
    description: "of our clients rank on the first page for target keywords",
    details:
      "Through our comprehensive keyword research and on-page optimization techniques, we've helped 80% of our clients achieve first-page rankings for their most important target keywords.",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation Growth",
    value: "3x",
    description: "Increase in lead generation from organic search",
    details:
      "By focusing on high-intent keywords and optimizing conversion paths, our clients typically see a 3x increase in leads generated from organic search traffic.",
  },
];

export default function ResultsSection() {
  const [activeResult, setActiveResult] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Proven SEO Results
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 text-center relative overflow-hidden cursor-pointer"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onClick={() =>
                setActiveResult(activeResult === index ? null : index)
              }
            >
              <result.icon className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {result.title}
              </h3>
              <p className="text-4xl font-bold text-cyan-600 mb-2">
                {result.value}
              </p>
              <p className="text-gray-600">{result.description}</p>
              <AnimatePresence>
                {activeResult === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-left"
                  >
                    <p className="text-gray-700">{result.details}</p>
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div
                className="absolute bottom-4 right-4"
                animate={{ rotate: activeResult === index ? 180 : 0 }}
              >
                <ArrowRight className="w-6 h-6 text-cyan-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
