import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/animations";

const reservations = [
  { category: "SC", percent: "15%" },
  { category: "ST", percent: "6%" },
  { category: "BC", percent: "29%" },
  { category: "PH", percent: "3%" },
  { category: "NCC / Sports / CAP", percent: "As per rules" },
];

const PolycetReservation = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Reservation Policy
        </motion.h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow overflow-hidden">
            <thead className="bg-slate-700 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Category</th>
                <th className="py-3 px-6 text-center">Reservation</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((item, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="py-3 px-6">{item.category}</td>
                  <td className="py-3 px-6 text-center font-semibold">
                    {item.percent}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default PolycetReservation;