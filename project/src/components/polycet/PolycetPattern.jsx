import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/animations";

const PolycetPattern = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6"
        >
          Exam Pattern
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gray-100 p-6 rounded-xl"
        >
          <p>Total Questions: 120</p>
          <p>Duration: 2 Hours</p>
          <p>Type: Multiple Choice Questions</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PolycetPattern;
