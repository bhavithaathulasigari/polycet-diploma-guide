import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, FileText, ClipboardCheck, Megaphone } from "lucide-react";

const datesData = [
  {
    icon: <FileText size={26} />,
    title: "Application Start Date",
    date: "March 2025 (Tentative)",
  },
  {
    icon: <ClipboardCheck size={26} />,
    title: "Last Date to Apply",
    date: "April 2025 (Tentative)",
  },
  {
    icon: <CalendarDays size={26} />,
    title: "POLYCET Exam Date",
    date: "May 2025 (Tentative)",
  },
  {
    icon: <Megaphone size={26} />,
    title: "Result Declaration",
    date: "May/June 2025 (Tentative)",
  },
];

const PolycetDates = () => {
  return (
    <section
      id="dates"
      className="py-20 bg-slate-50 text-slate-800"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          POLYCET Important Dates
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {datesData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <div className="flex justify-center text-slate-600 mb-4">
                {item.icon}
              </div>

              <h4 className="font-semibold text-lg mb-2">
                {item.title}
              </h4>

              <p className="text-slate-600">
                {item.date}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-10">
          * Dates are tentative and subject to change as per official notification.
        </p>

      </div>
    </section>
  );
};

export default PolycetDates;