import React from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "@/utils/auth";

const papers = [
  { year: "POLYCET 2025", file: "/pdfs/papers/2025-polycet.pdf" },
  { year: "POLYCET 2024 (EM/TM)", file: "/pdfs/papers/2024-polycet.pdf" },
  { year: "POLYCET 2024 Set B (EM/TM)", file: "/pdfs/papers/2024-polycet-set B.pdf" },
  { year: "POLYCET 2024 Set C (EM/TM)", file: "/pdfs/papers/2024-polycet-set C.pdf" },
  { year: "POLYCET 2023 Set A (EM/TM)", file: "/pdfs/papers/2023-polycet-set A.pdf" },
  { year: "POLYCET 2023 Set B (EM/TM)", file: "/pdfs/papers/2023-polycet-set B.pdf" },
];

const PolycetPapers = () => {
  const navigate = useNavigate();

  const handleDownload = (file) => {
    if (!isAuthenticated()) {
      // Redirect to sign-in and remember which file they wanted
      navigate("/signin", { state: { redirectTo: file } });
      return;
    }

    // Open PDF in a new tab if authenticated
    window.open(file, "_blank");
  };

  return (
    <section id="papers" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Previous Question Papers
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {papers.map((paper, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow flex justify-between items-center"
            >
              <span className="font-medium">{paper.year}</span>

              <button
                onClick={() => handleDownload(paper.file)}
                className="bg-slate-700 text-white px-5 py-2 rounded-lg hover:bg-slate-800 transition"
              >
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolycetPapers;
