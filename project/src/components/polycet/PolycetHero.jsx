import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/animations";
import { Download, ArrowRight } from "lucide-react";

const PolycetHero = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 to-slate-900  text-slate-800 py-28 overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-white">
            Complete POLYCET Guide
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-slate-400 max-w-3xl mx-auto mb-10 text-lg"
        >
          Everything you need to know about POLYCET — eligibility,
          exam pattern, application process and counselling.
        </motion.p>

        <div className="flex justify-center gap-5 flex-wrap">

          <a
            href="#apply"
            className="flex items-center gap-2 bg-slate-700 text-white px-7 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all"
          >
            Apply Now
            <ArrowRight size={18} />
          </a>

          <a
            href="/pdfs/syllabus.pdf"
            download
            className="flex items-center gap-2 bg-slate-100 border border-slate-300 text-slate-800 px-7 py-3 rounded-xl font-semibold hover:bg-slate-200 transition-all"
          >
            <Download size={18} />
            Download Syllabus
          </a>
        </div>
      </div>
    </section>
  );
};

export default PolycetHero;