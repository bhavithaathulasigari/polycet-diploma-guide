import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/utils/animations";
import { branchCareers } from "@/data/branchCareers";

const DiplomaCareers = ({ branchSlug }) => {
  const careers = branchCareers[branchSlug] || ["No career data available for this branch."];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8"
        >
          Career Opportunities
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {careers.map((career, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="p-6 bg-white rounded-xl shadow"
            >
              {career}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DiplomaCareers;