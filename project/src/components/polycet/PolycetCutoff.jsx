import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/utils/animations";
import { TrendingUp } from "lucide-react";

const cutoffData = [
  { branch: "CSE", rank: "3000 – 6000" },
  { branch: "ECE", rank: "5000 – 9000" },
  { branch: "Mechanical", rank: "8000 – 15000" },
  { branch: "Civil", rank: "10000 – 20000" },
];

const PolycetCutoff = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10"
        >
          Expected Cutoff & Rank (Top Government Colleges)
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {cutoffData.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <TrendingUp className="mx-auto mb-4 text-slate-600" size={28} />
              
              <h3 className="font-semibold text-lg mb-2">
                {item.branch}
              </h3>

              <p className="text-2xl font-bold text-slate-700">
                Rank {item.rank}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-xs text-gray-400 mt-8">
          *Cutoff ranks are approximate and may vary every year based on
          competition, category, and seat availability.
        </p>

      </div>
    </section>
  );
};

export default PolycetCutoff;