import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/animations";

const PolycetWhoShould = () => {
  const points = [
    "Students interested in technical education after 10th education",
    "Students who prefer teaching learing (practical oriented)",
    "Students who prefer early job after diploma",
    "Students planning B.Tech through lateral entry",
    "Students from rural areas who wants pursue technical education",
  ];

  return (
    <section className="bg-slate-100 text-slate-800 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Who Should Choose POLYCET?
        </motion.h2>

        <div className="space-y-6">
          {points.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.1 }}
              className="bg-slate-200 border border-slate-400 p-6 rounded-2xl hover:bg-slate-100 transition-all duration-300"
            >
              <p className="text-slate-700 font-medium">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolycetWhoShould;