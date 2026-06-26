import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/animations";
import { FileText } from "lucide-react";

const PolycetHallTicket = () => {
  return (
    <section className="bg-slate-800 py-20 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-10">
            POLYCET Hall Ticket
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
            <FileText size={32} />
          </div>

          <div className="space-y-4 text-lg">
            <p>• Available 7–10 days before the examination.</p>
            <p>• Download only from the official POLYCET website.</p>
            <p>• Carry hall ticket along with a valid photo ID proof to the exam center.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PolycetHallTicket;