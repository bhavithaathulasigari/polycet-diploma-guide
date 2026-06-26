import React from 'react';
import { FaGraduationCap, FaBookOpen, FaSmile } from "react-icons/fa";

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose POLYCET & Diploma Guide?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          <div className="p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition">
            <FaGraduationCap className="text-4xl text-slate-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
            <p className="text-gray-600">
              Clear information for Polyect and Diploma students.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition">
            <FaBookOpen className="text-4xl text-slate-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Updated Syllabus</h3>
            <p className="text-gray-600">
              Latest syllabus explained branch-wise and year-wise.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition">
            <FaSmile className="text-4xl text-slate-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Student Friendly</h3>
            <p className="text-gray-600">
              Simple language, clean UI, zero confusion.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
