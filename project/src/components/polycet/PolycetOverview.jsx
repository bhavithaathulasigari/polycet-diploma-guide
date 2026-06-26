import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  ArrowUpCircle,
  Lightbulb,
  Rocket,
  Award,
  TrendingUp,

} from "lucide-react";

const highlights = [
  { title: "Mode", value: "Offline (OMR Based)" },
  { title: "Duration", value: "2 Hours" },
  { title: "Total Questions", value: "120 Multiple choice questions" },
  { title: "Negative Marks", value: "No Negative Marks" },
];

const usePoints = [
  {
    icon: <GraduationCap size={28} />,
    text: "POLYCET is a state-level entrance exam for admission into diploma (polytechnic) courses after 10th class.",
  },
  {
    icon: <BookOpen size={28} />,
    text: "The exam tests students in Mathematics, Physics, and Chemistry based on the 10th syllabus.",
  },
  {
    icon: <Briefcase size={28} />,
    text: "Admissions are offered in government and private polytechnic colleges based on their rank.",
  },
  {
    icon: <ArrowUpCircle size={28} />,
    text: "It helps students start a technical career early or pursue B.Tech through lateral entry(directly into BTECH 2nd year).",
  },
];

const whyPoints = [
  {
    icon: <Lightbulb size={30} />,
    title: "Direct Entry After 10th",
    desc: "Join diploma courses without going through intermediate studies.",
  },
  {
    icon: <Rocket size={30} />,
    title: "Practical Skill Development",
    desc: "Gain hands-on technical knowledge with lab-based learning.",
  },
  {
    icon: <Award size={30} />,
    title: "Better College Opportunities",
    desc: "Secure admission into top government polytechnic colleges.",
  },
  {
    icon: <TrendingUp size={30} />,
    title: "Path to Higher Education",
    desc: "Continue B.Tech through lateral entry and save one academic year.",
  },
];

const PolycetOverview = () => {
  return (
    <section
      id="overview"
      className="py-24 bg-slate-100 text-slate-800"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          What is POLYCET?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-black text-lg leading-relaxed max-w-4xl"
        >
          POLYCET (Polytechnic Common Entrance Test) is a state-level entrance
          examination conducted by the State Board of Technical Education and
          Training (SBTET) for admission into diploma courses after 10th class.
          It evaluates students in Mathematics, Physics, and Chemistry and
          helps them begin a technical career at an early stage.
        </motion.p>

        {/* Highlights */}
        <div className="mt-14 grid md:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-slate-200 border border-slate-700 rounded-2xl text-center hover:bg-slate-100 transition"
            >
              <h4 className="font-semibold text-slate-800">{item.title}</h4>
              <p className="text-slate-600 mt-2 text-sm">{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Know About POLYCET */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8">
            Know About POLYCET
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {usePoints.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 bg-slate-200 border border-slate-400 rounded-2xl hover:bg-slate-100 transition-all duration-300"
              >
                <div className="text-slate-600">{item.icon}</div>
                <p className="text-slate-700 font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why POLYCET */}
        <div className="mt-24">
          <h3 className="text-2xl font-semibold mb-10">
            Why Choose POLYCET?
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyPoints.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-200 border border-slate-400 rounded-2xl hover:bg-slate-100 transition-all duration-300 text-center"
              >
                <div className="flex justify-center text-slate-700 mb-4">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-lg mb-2 text-slate-700">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        </div>
    </section>
  );
};

export default PolycetOverview;