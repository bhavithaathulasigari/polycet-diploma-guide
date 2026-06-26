import React from "react";
import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/animations";

const mistakes = [
  "Entering incorrect mobile number during registration",
  "Uploading unclear or incorrect documents",
  "Not locking options during web option entry",
  "Missing reporting deadline after seat allotment",
];

const PolycetMistakes = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-10"
        >
          Common Mistakes to Avoid
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow p-8"
        >
          <ul className="space-y-5">
            {mistakes.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-4"
              >
                <AlertTriangle className="text-slate-600 mt-1" size={20} />
                <span className="text-slate-700 font-medium">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default PolycetMistakes;