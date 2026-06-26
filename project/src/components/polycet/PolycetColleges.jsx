import React from "react";
import { useNavigate } from "react-router-dom";

const PolycetColleges = () => {
  const navigate = useNavigate();

  return (
    <section id="colleges" className="py-16 bg-white text-slate-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Top Polytechnic Colleges
        </h2>

        <p className="text-slate-600 mb-8">
          Explore government polytechnic colleges accepting Polycet scores.
        </p>

        <button
          onClick={() => navigate("/colleges")}
          className="bg-slate-900 text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition"
        >
          View Colleges
        </button>
      </div>
    </section>
  );
};

export default PolycetColleges;