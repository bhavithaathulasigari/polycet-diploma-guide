import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/animations";
import { Globe } from "lucide-react";

const PolycetOfficialWebsite = () => {
  return (
    <section className="bg-slate-200 text-slate-800 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-2xl md:text-3xl font-bold mb-6"
        >
          Official Website
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2 }}
          className="bg-slate-700 border border-slate-900 p-6 rounded-xl space-y-4"
        >
          <p className="text-slate-200">
            For official notifications and updates visit:
          </p>

          <div className="space-y-3">
            <a
              href="https://polycetts.nic.in"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-slate-300 hover:text-white transition"
            >
              Telangana – https://polycetts.nic.in
            </a>

            <a
              href="https://polycetap.nic.in"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-slate-300 hover:text-white transition"
            >
              Andhra Pradesh – https://polycetap.nic.in
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PolycetOfficialWebsite;