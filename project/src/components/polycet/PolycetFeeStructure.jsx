import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/animations";

const feeData = [
  { type: "Government Polytechnic", fee: "₹4700 / year" },
  { type: "Private Polytechnic", fee: "₹25000 / year" },
  { type: "Application Fee (OC / BC)", fee: "₹400" },
  { type: "Application Fee (SC / ST)", fee: "₹100" },
  { type: "Counselling Fee (OC / BC)", fee: "₹600" },
  { type: "Counselling Fee (SC / ST)", fee: "₹250" },
];

const PolycetFeeStructure = () => {
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
          Diploma  Fee Structure
        </motion.h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow overflow-hidden">
            <thead className="bg-slate-700 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Category</th>
                <th className="py-3 px-6 text-center">Fee Details</th>
              </tr>
            </thead>
            <tbody>
              {feeData.map((item, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="py-3 px-6">{item.type}</td>
                  <td className="py-3 px-6 text-center font-semibold">
                    {item.fee}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-400 mt-4 text-center">
          *Fees may vary slightly each year as per official notification.
        </p>

      </div>
    </section>
  );
};

export default PolycetFeeStructure;