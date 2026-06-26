import React from "react";
import { isAuthenticated } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const PhysicsSyllabus = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    if (!isAuthenticated()) {
      navigate("/signin"); // redirect if not logged in
    } else {
      const link = document.createElement("a");
      link.href = "/public/pdfs/Physics.pdf"; // replace with actual PDF
      link.download = "Physics_Syllabus.pdf";
      link.click();
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-center">Physics Syllabus</h2>
      <ul className="list-disc list-inside max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
        <li>Mechanics</li>
        <li>Thermodynamics</li>
        <li>Waves & Oscillations</li>
        <li>Electromagnetism</li>
        <li>Optics</li>
        <li>Modern Physics</li>
      </ul>

      <div className="text-center mt-6">
        <button
          onClick={handleDownload}
          className="bg-slate-700 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default PhysicsSyllabus;
