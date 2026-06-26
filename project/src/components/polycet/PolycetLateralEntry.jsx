import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/animations";
import { ArrowUpCircle } from "lucide-react";

const PolycetLateralEntry = () => {
  return (
    <section className="bg-slate-800 py-20 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          POLYCET to B.Tech Path
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white text-slate-800 border border-slate-200 p-8 rounded-2xl shadow-lg"
        >
          <div className="flex justify-center mb-6">
            <ArrowUpCircle size={32} />
          </div>

          <p className="mb-6 text-lg">
            After completing a <strong>3-year diploma</strong>:
          </p>

          <ul className="space-y-4 text-lg">
            <li>• Appear for ECET (Engineering Common Entrance Test)</li>
            <li>• Direct admission into B.Tech 2nd year</li>
            <li>• Saves one academic year</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default PolycetLateralEntry;