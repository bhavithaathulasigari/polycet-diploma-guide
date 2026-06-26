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
import { fadeUp, staggerContainer } from "@/utils/animations";

// ================= Known about DIPLOMA =================
const usePoints = [
  {
    icon: <GraduationCap size={28} />,
    text: "A diploma is a practical, skill-based technical course after 10th or 12th",
  },
  {
    icon: <BookOpen size={28} />,
    text: "Duration is typically 3 years after 10th.",
  },
  {
    icon: <Briefcase size={28} />,
    text: "Fields include Engineering, IT, Pharmacy, Mechanical, Civil, and more.",
  },
  {
    icon: <ArrowUpCircle size={28} />,
    text: "It prepares students for employment or higher studies like B.Tech/BE lateral entry.",
  },
];

// ================= WHY DIPLOMA =================
const whyPoints = [
  {
    icon: <Lightbulb size={30} />,
    title: "No Intermediate Needed",
    desc: "Direct entry into diploma courses after 10th, skipping intermediate studies.",
  },
  {
    icon: <Rocket size={30} />,
    title: "Skill-Based Learning",
    desc: "Hands-on, practical training that prepares you for real-world jobs.",
  },
  {
    icon: <Award size={30} />,
    title: "Job Opportunities",
    desc: "Early career start with practical skills in demand across industries.",
  },
  {
    icon: <TrendingUp size={30} />,
    title: "Path to Higher Studies",
    desc: "Option to continue into B.Tech/BE or other advanced programs later.",
  },
];

const DiplomaOverview = () => {
  return (
    <section id="overview" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          What is Diploma
        </motion.h2>

        <p className="text-gray-600 text-lg leading-relaxed text-center">
          Diploma courses provide hands-on technical knowledge in engineering, technology, and vocational fields. They prepare students for careers in industries or further studies.
          /
          A diploma is a 3-year practical course after 10th, focusing on hands-on skills in fields like engineering and IT. It prepares students for jobs or B.Tech lateral entry.
        </p>

        {/* ================= Know About DIPLOMA ================= */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8">Know About Diploma</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {usePoints.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-slate-600">{item.icon}</div>
                <p className="text-gray-700 font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= WHY DIPLOMA ================= */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-10">Why Choose Diploma?</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyPoints.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-6 bg-white border rounded-2xl shadow hover:shadow-xl hover:border-slate-400 transition-all duration-300 text-center"
              >
                <div className="flex justify-center text-slate-500 mb-4">
                  {item.icon}
                </div>

                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DiplomaOverview;