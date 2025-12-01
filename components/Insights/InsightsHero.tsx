"use client";
import React from "react";
import { motion } from "framer-motion";

const InsightsHero = () => {
  return (
    <section className="relative bg-cover bg-center min-h-[100vh] w-[100vw] bg-transparent md:h[-90vh] sm:h[-100vh]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="contactpage.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/95"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-gray-400">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-center">
          Qolani Homes Insights
        </motion.h2>
        <motion.p
          initial={{ opacity: 0.1, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeInOut", delay: 0.1 }}
          className="text-center text-lg max-w-3xl mx-auto  my-12">
          Stay informed with expert insights from Qolani Homes. We break down
          the trends, prices, and opportunities shaping the real estate
          landscape—helping you make confident decisions.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-black backdrop-blur-md p-6 rounded-xl border border-white/20">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl font-semibold mb-3">
              Market Trends
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm leading-relaxed">
              A deep dive into how neighborhoods are evolving—covering pricing
              shifts, growth hotspots, rental trends, and buyer behavior.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="bg-black backdrop-blur-md p-6 rounded-xl border border-white/20">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl font-semibold mb-3">
              Investment Insights
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm leading-relaxed">
              Guidance on the best places to invest, estimated ROI, flipping
              opportunities, rental yields, and long-term value projections.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.2 }}
            className="bg-black backdrop-blur-md p-6 rounded-xl border border-white/20">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl font-semibold mb-3">
              Property Spotlights
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.4 }}
              className="text-sm leading-relaxed">
              Featured properties with strong growth potential, unique features,
              and excellent location advantages for buyers and investors.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InsightsHero;
