import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/utils/animations";
import { Link } from "react-router-dom";

const subjects = [
  { name: "Mathematics", route: "/polycet/math" },
  { name: "Physics", route: "/polycet/physics" },
  { name: "Chemistry", route: "/polycet/chemistry" },
];

const examPattern = [
  { section: "A", subject: "Mathematics", questions: 60, marks: 60 },
  { section: "B", subject: "Physics", questions: 30, marks: 30 },
  { section: "C", subject: "Chemistry", questions: 30, marks: 30 },
];

const PolycetSyllabus = () => {
  const totalQuestions = examPattern.reduce((acc, item) => acc + item.questions, 0);
  const totalMarks = examPattern.reduce((acc, item) => acc + item.marks, 0);

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
          POLYCET Syllabus
        </motion.h2>

        {/* Exam Pattern Table */}
        <div className="overflow-x-auto mb-12">
          <table className="min-w-full bg-white rounded-xl shadow overflow-hidden">
            <thead className="bg-slate-700 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Section</th>
                <th className="py-3 px-6 text-left">Subject</th>
                <th className="py-3 px-6 text-center">Number of Questions</th>
                <th className="py-3 px-6 text-center">Marks</th>
              </tr>
            </thead>
            <tbody>
              {examPattern.map((item, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="py-3 px-6">{item.section}</td>
                  <td className="py-3 px-6">{item.subject}</td>
                  <td className="py-3 px-6 text-center">{item.questions}</td>
                  <td className="py-3 px-6 text-center">{item.marks}</td>
                </tr>
              ))}
              <tr className="font-bold bg-gray-100">
                <td className="py-3 px-6" colSpan={2}>Total</td>
                <td className="py-3 px-6 text-center">{totalQuestions}</td>
                <td className="py-3 px-6 text-center">{totalMarks}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Animated Subject Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 "
        >
          {subjects.map((sub, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="p-6 bg-slate-700 border border-slate-900 rounded-xl shadow text-center text-white font-semibold text-lg hover:scale-105 transition cursor-pointer "
            >
              <Link to={sub.route}>{sub.name}</Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PolycetSyllabus;
