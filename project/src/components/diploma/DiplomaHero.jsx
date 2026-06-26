import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/animations";

const DiplomaHero = () => {
  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Diploma Courses After 10th
        </motion.h1>

        <p className="text-gray-300">
          Branches • Subjects • Career Opportunities
        </p>
      </div>
    </section>
  );
};

export default DiplomaHero;
