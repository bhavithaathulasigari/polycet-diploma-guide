import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/animations";
import { Award } from "lucide-react";

const PolycetQualifyingMarks = () => {
  return (
    <section className="bg-slate-800 py-20 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Section Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-10">
            Minimum Qualifying Marks
          </h2>
        </motion.div>

        {/* Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white text-slate-800 border border-slate-200 rounded-2xl p-8 shadow-lg"
        >
          <div className="flex justify-center mb-6 text-slate-800">
            <Award size={32} />
          </div>

          <div className="space-y-4 text-lg">
            <p>
              <span className="font-semibold">General Category:</span>{" "}
              30% (36 marks out of 120)
            </p>

            <p>
              <span className="font-semibold">SC / ST:</span>{" "}
              No minimum qualifying marks
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PolycetQualifyingMarks;