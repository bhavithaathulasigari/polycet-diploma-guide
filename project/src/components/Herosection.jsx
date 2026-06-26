import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/animations";
import Ui from "@/assets/Ui.png";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[90vh] bg-cover bg-top"
      style={{ backgroundImage: `url(${Ui})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />

      <div className="relative h-full flex items-end pb-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl px-6 text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            POLYCET & Diploma Guide
          </h1>
          <p className="text-lg md:text-xl">
            Syllabus • Colleges • Admissions • Careers
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
