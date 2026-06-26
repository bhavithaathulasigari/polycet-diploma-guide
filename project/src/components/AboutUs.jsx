// src/components/AboutUs.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Briefcase, Mail, Award, Quote } from "lucide-react";
import { Link } from "react-router-dom";

// College Images
import college1 from "../assets/college/college1.png";
import college2 from "../assets/college/college2.png";
import college3 from "../assets/college/college3.png";
import college4 from "../assets/college/college4.png";
import college5 from "../assets/college/college5.png";
import college6 from "../assets/college/college6.png";

// Team Members
import member1 from "../assets/team/member1.png";
import member2 from "../assets/team/member2.jpeg";
import member3 from "../assets/team/member3.jpg";
import member4 from "../assets/team/member4.jpeg";
import member5 from "../assets/team/member5.jpeg";

// Mentor Photo
import sirPhoto from "../assets/mentor/sir.png";
import mentor from "../assets/mentor/mentor.png";
// College Details
const collegeDetails = {
  name: "Government Polytechnic, Obulavaripalli",
  address:
    "Government Polytechnic, Obulavaripalli, Tirupati District, Andhra Pradesh, India – 516108",
  description:
    "Government Polytechnic, Obulavaripalli is a prestigious institution established in 1980, offering diploma courses in Computer Science, Electronics & Communication, and General Diploma. With a strong focus on practical learning and industry-relevant curriculum, it has been nurturing skilled professionals for over four decades.",
  established: 2008,
  location: "Obulavaripalli Mandal, 2 Kms from Obulavaripalli Junction",
  campusArea: "4.76 Acres",
  courses: [
    "Diploma in Computer Science & Engineering",
    "Diploma in Electronics & Communication Engineering",
  ],
  website: "https://govtpolyobulavaripalli.ac.in/",
  goals:
    "We provide quality education to rural students, develop job-ready skills, and foster innovation through startups and industry interactions. Our focus is on creating a clean, green campus, equipping modern labs, enhancing communication and leadership skills, and preparing students for responsible professional careers.",
};

const collegeImages = [college1, college2, college3,college4,college5,college6];

// Stats
const stats = [
  { number: "100+", label: "Students Guided" },
  { number: "5+", label: "Diploma Branches Covered" },
  { number: "100+", label: "Colleges Listed" },
  { number: "100%", label: "Career Focused Content" },
];

// Team Members
const teamMembers = [
  {
    name: "Bhavitha",
    role: "Team Leader, Frontend Developer & UI Designer",
    lifeQuote: "I turn ideas into reality with determination and design.",
    image: member1,
  },
  {
    name: "Deepa",
    role: "Creative Designer & UI Strategist",
    lifeQuote: "Creativity is my strength, and innovation is my signature.",
    image: member2,
  },
  {
    name: "Mallika",
    role: "Research & Data Analyst",
    lifeQuote: "Strong foundations create unshakable success.",
    image: member3,
  },
  {
    name: "Maneesha",
    role: "Data Coordinator",
    lifeQuote: "Discipline and consistency turn effort into achievement.",
    image: member4,
  },
  {
    name: "Sailaja",
    role: "Visual Designer & Color Strategist",
    lifeQuote:
      "I don’t just choose colors — I create emotions.",
    image: member5,
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 400 : -400,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -400 : 400,
    opacity: 0,
    scale: 0.95,
  }),
};

const AboutUs = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [direction, setDirection] = useState(0);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const prevImage = (e) => {
    e.stopPropagation();
    setDirection(-1);
    setSelectedIndex((prev) => (prev === 0 ? collegeImages.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setDirection(1);
    setSelectedIndex((prev) => (prev === collegeImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex !== null) {
        if (e.key === "ArrowLeft") prevImage(e);
        if (e.key === "ArrowRight") nextImage(e);
        if (e.key === "Escape") closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100 py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6 py-5">
            About Polycet & Diploma Guide
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            A premium guidance platform built by Diploma final year students to help 10th class students choose the right Polytechnic and Diploma career path.
          </p>
        </motion.div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-10 mb-28">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/60 backdrop-blur-xl border border-slate-200 p-10 rounded-3xl shadow-lg text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-4xl font-bold text-slate-800 mb-2">{stat.number}</h3>
              <p className="text-gray-600 tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* SERVICES */}
        <div className="grid md:grid-cols-2 gap-12 mb-28">
          <div className="bg-white p-12 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300">
            <BookOpen className="text-slate-700 mb-6" size={36} />
            <h3 className="text-2xl font-bold mb-6">POLYCET Guidance</h3>
            <ul className="text-gray-600 space-y-3 text-lg">
              <li>✔ Eligibility & Exam Pattern</li>
              <li>✔ Syllabus & Previous Papers</li>
              <li>✔ Top Colleges & Counselling</li>
              <li>✔ Admission Step-by-Step Guide</li>
            </ul>
          </div>
          <div className="bg-white p-12 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300">
            <Briefcase className="text-slate-700 mb-6" size={36} />
            <h3 className="text-2xl font-bold mb-6">Diploma Career Guidance</h3>
            <ul className="text-gray-600 space-y-3 text-lg">
              <li>✔ Branches & Subjects Overview</li>
              <li>✔ Lab & Practical Insights</li>
              <li>✔ Diploma vs Intermediate</li>
              <li>✔ Career & Higher Study Options</li>
            </ul>
          </div>
        </div>

        {/* Principal */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-28"
        >
          <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 text-white p-14 rounded-3xl shadow-2xl relative overflow-hidden border border-white/30">
            <div className="absolute top-6 right-6 bg-white text-slate-900 px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
              <Award size={18} /> Under the Esteemed Guidance of
            </div>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex gap-1"></div>
              <div className="relative">
                <img
                  src={sirPhoto}
                  alt="Principal"
                  className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-2xl"
                />
              </div>
              <div className="max-w-2xl relative text-center md:text-left">
                <Quote className="absolute -top-8 -left-8 text-white opacity-20" size={80} />
                <h4 className="text-3xl font-bold mb-2">Sri. C.DevaRaj</h4>
                <p className="text-white font-semibold text-lg">Principal</p>
                <p className="text-gray-300 mb-6">Government Polytechnic, Obulavaripalli</p>
                <span className="inline-block mb-6 bg-white/10 px-5 py-1 rounded-full text-sm">30+ Years of Academic & Administrative Experience</span>
                <p className="text-lg leading-relaxed italic text-gray-100">
                  "Education is the foundation of a successful career. This project is a commendable effort by the students to provide structured guidance for POLYCET and Diploma aspirants."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        {/* ===== Project Mentor Section (Hierarchical Styled) ===== */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mt-20"
>
  <div className="bg-white border border-slate-200 p-12 rounded-3xl shadow-xl relative">

    {/* Small Badge */}
    <div className="absolute top-6 right-6 bg-slate-800 text-white px-5 py-1 rounded-full text-xs font-semibold shadow-md">
      Project Mentor
    </div>

    <div className="flex flex-col md:flex-row items-center gap-10">

      {/* Smaller Image */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-slate-300 blur-2xl opacity-20"></div>
        <img
          src={mentor}
          alt="Project Mentor"
          className="relative w-36 h-36 rounded-full object-cover border-4 border-slate-300 shadow-lg"
        />
      </div>

      {/* Mentor Info */}
      <div className="text-center md:text-left max-w-2xl">

        <h4 className="text-2xl font-bold text-slate-800 mb-1">
          Sri. Harika
        </h4>

        <p className="text-slate-600 font-semibold">
          Lecturer – Iformation Technology
        </p>

        <p className="text-slate-500 text-sm mb-3">
          12+ Years of Teaching Experience
        </p>

        <p className="text-gray-600 leading-relaxed italic text-base">
          "With dedication and discipline, students can transform knowledge
          into innovation. This project reflects teamwork, commitment,
          and technical excellence."
        </p>

      </div>
    </div>
  </div>
</motion.div>
        {/* TEAM */}
<div className="mt-40 px-4 md:px-16">
  <div className="text-center mb-20">
    <h3 className="text-5xl font-bold text-slate-900">Meet Our Team</h3>
    <p className="text-gray-500 mt-4 text-lg">
      Diploma Final Year – Computer Science & Engineering
    </p>
  </div>

  {teamMembers.map((member, idx) => (
    <motion.div
      key={idx}
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group flex flex-col md:flex-row items-center gap-12 mb-28 transition-all duration-500 ${
        idx % 2 !== 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* IMAGE */}
      <div className="w-72 h-72 relative rounded-[40px] overflow-hidden shadow-lg transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:shadow-2xl">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover rounded-[40px] transition-all duration-700 ease-in-out"
        />
      </div>

      {/* TEXT */}
      <div className="max-w-xl text-center md:text-left transition-transform duration-700 ease-in-out group-hover:translate-y-[-2px]">
        {/* Name */}
        <h4 className="text-4xl font-bold text-slate-900 mb-4">{member.name}</h4>

        {/* Divider */}
        <div className="w-16 h-[3px] bg-slate-800 mb-6 mx-auto md:mx-0 transition-all duration-700 ease-in-out group-hover:w-24"></div>

        {/* Role */}
        <p className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-4">
          {member.role}
        </p>

        {/* Divider */}
        <div className="w-16 h-[3px] bg-slate-800 mb-6 mx-auto md:mx-0 transition-all duration-700 ease-in-out group-hover:w-24"></div>

        {/* Quote */}
        <p className="text-lg text-gray-600 leading-relaxed italic">
          “{member.lifeQuote}”
        </p>
      </div>
    </motion.div>
  ))}
</div>
        {/* COLLEGE INFO & GALLERY */}
        <div className="max-w-6xl mx-auto mb-32 space-y-10">
          {/* College Info */}
          <div className="bg-white shadow-xl rounded-3xl border border-gray-200 p-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 text-center">{collegeDetails.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <span className="text-sm uppercase tracking-wider text-gray-500 mb-1 block">Address</span>
                <p className="text-lg font-medium">{collegeDetails.address}</p>
              </div>
              <div>
                <span className="text-sm uppercase tracking-wider text-gray-500 mb-1 block">Website</span>
                <a href={collegeDetails.website} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-slate-500 hover:underline">
                  {collegeDetails.website}
                </a>
              </div>
              <div>
                <span className="text-sm uppercase tracking-wider text-gray-500 mb-1 block">Started In</span>
                <p className="text-lg font-medium">{collegeDetails.established}</p>
              </div>
              <div>
                <span className="text-sm uppercase tracking-wider text-gray-500 mb-1 block">Location</span>
                <p className="text-lg font-medium">{collegeDetails.location}</p>
              </div>
              <div>
                <span className="text-sm uppercase tracking-wider text-gray-500 mb-1 block">Campus Area</span>
                <p className="text-lg font-medium">{collegeDetails.campusArea}</p>
              </div>
              <div className="md:col-span-2">
                <span className="text-sm uppercase tracking-wider text-gray-500 mb-1 block">Courses Offered</span>
                <ul className="list-disc list-inside text-lg font-medium space-y-1">
                  {collegeDetails.courses.map((course, idx) => (
                    <li key={idx}>{course}</li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-2">
                <span className="text-sm uppercase tracking-wider text-gray-500 mb-1 block">Goals & Objectives</span>
                <p className="text-lg font-medium text-gray-700 leading-relaxed">{collegeDetails.goals}</p>
              </div>
            </div>
          </div>
{/* Gallery */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {collegeImages.map((img, idx) => (
    <div
      key={idx}
      className="group overflow-hidden rounded-2xl shadow-md cursor-pointer"
      onClick={() => openLightbox(idx)}
    >
      <img
        src={img}
        alt={`College view ${idx + 1}`}
        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>
  ))}
</div>

{/* Premium Fullscreen Lightbox */}
<AnimatePresence custom={direction}>
  {selectedIndex !== null && (
    <motion.div
      className="fixed inset-0 z-50 
                 bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-3xl shadow-2xl
                 backdrop-blur-2xl 
                 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={closeLightbox}
    >
      <motion.img
        key={selectedIndex}
        src={collegeImages[selectedIndex]}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 25,
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, info) => {
          if (info.offset.x > 120) prevImage();
          if (info.offset.x < -120) nextImage();
        }}
        onClick={(e) => e.stopPropagation()}
        className="w-screen h-screen object-contain"
      />

      {/* Close */}
      <button
        onClick={closeLightbox}
        className="absolute top-6 right-8 text-white text-3xl"
      >
        ✕
      </button>

      {/* Prev */}
      <button
        onClick={prevImage}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-5xl"
      >
        ❮
      </button>

      {/* Next */}
      <button
        onClick={nextImage}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-5xl"
      >
        ❯
      </button>
    </motion.div>
  )}
</AnimatePresence>
        </div>

        {/* CONTACT CTA */}
        <div className="bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-[40px] p-20 text-center shadow-2xl mt-32">
          <Mail size={44} className="mx-auto mb-6 text-white" />
          <h3 className="text-4xl font-bold mb-6">Need Career Guidance?</h3>
          <p className="mb-10 text-gray-300 text-lg max-w-2xl mx-auto">
            Have questions about POLYCET or Diploma branches? We are here to guide you step-by-step.
          </p>
          <Link
            to="/contact"
            className="bg-white text-slate-900 px-10 py-4 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;