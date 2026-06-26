import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/animations";

const PolycetBenefits = () => {
  const benefits = [
    "3-year technical diploma after 10th",
    "Eligible for B.Tech 2nd year (Lateral Entry)",
    "Lower education cost compared to Intermediate",
    "Early skill development",
    "Government job opportunities after diploma",
    "Campus placements in many polytechnic colleges",
  ];

  return (
    <section className="py-24 bg-slate-100 text-slate-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-3xl md:text-4xl font-bold mb-14"
        >
          Advantages of Diploma Through POLYCET
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.1 }}
              className="bg-slate-200 border border-slate-400 p-6 rounded-2xl 
                         hover:bg-slate-100 transition-all duration-300 
                         text-slate-700 font-medium"
            >
              {item}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PolycetBenefits;