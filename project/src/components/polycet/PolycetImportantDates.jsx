import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/animations";
import { CalendarDays } from "lucide-react";

const dates = [
  { label: "Notification", value: "March" },
  { label: "Application Start", value: "March" },
  { label: "Last Date to Apply", value: "April" },
  { label: "Exam Date", value: "April / May" },
  { label: "Results", value: "May" },
  { label: "Counselling", value: "May/June" },
];

const PolycetImportantDates = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-3 text-slate-800">
            Important Dates (Tentative)
          </h2>
          <p className="text-slate-600">
            Check the expected POLYCET timeline to plan your preparation.
          </p>
        </motion.div>

        {/* Dates Table */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="min-w-full bg-white rounded-xl shadow overflow-hidden">
            <thead className="bg-slate-700 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Event</th>
                <th className="py-3 px-6 text-right">Expected Timeline</th>
              </tr>
            </thead>

            <tbody>
              {dates.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="py-4 px-6 flex items-center gap-2 text-slate-700">
                    <CalendarDays size={18} className="text-slate-600" />
                    {item.label}
                  </td>
                  <td className="py-4 px-6 text-right font-medium text-slate-700">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

      </div>
    </section>
  );
};

export default PolycetImportantDates;