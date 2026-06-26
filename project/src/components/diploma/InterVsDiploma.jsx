import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/utils/animations";
import { BookOpen, Settings, Clock, Briefcase, GraduationCap, Lightbulb } from "lucide-react";

const differencePoints = [
  {
    icon: <BookOpen size={28} />,
    title: "Focus",
    desc: "Intermediate is academic/theory-oriented, while Diploma is practical and skill-based in engineering and technology.",
  },
  {
    icon: <Clock size={28} />,
    title: "Duration",
    desc: "Intermediate is 2 years; Diploma is 3 years.",
  },
  {
    icon: <Briefcase size={28} />,
    title: "Career Opportunities",
    desc: "Intermediate mainly prepares for higher studies; Diploma allows early jobs like technician, junior engineer, or supervisor and also prepares for higher studies .",
  },
  {
    icon: <GraduationCap size={28} />,
    title: "Higher Education",
    desc: "Intermediate → B.Sc, B.Tech, MBBS, etc.; Diploma → Lateral entry to 2nd year B.Tech or other professional courses.",
  },
  {
    icon: <Settings size={28} />,
    title: "Practical Exposure",
    desc: "Intermediate has minimal practical exposure; Diploma has extensive hands-on labs, workshops, and projects.",
  },
  {
    icon: <Lightbulb size={28} />,
    title: "Pathway",
    desc: "Intermediate → Academic route; Diploma → Technical route with early career and skill development.",
  },
];

const InterVsDiploma = () => {
  return (
    <section className="py-20 bg-gray-75">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
        >
          Difference Between Intermediate & Diploma
        </motion.h2>

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {differencePoints.map((point, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="flex flex-col items-start gap-4 p-6 bg-white border rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-slate-600">{point.icon}</div>
              <h4 className="font-semibold text-lg">{point.title}</h4>
              <p className="text-gray-700 text-sm">{point.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InterVsDiploma;