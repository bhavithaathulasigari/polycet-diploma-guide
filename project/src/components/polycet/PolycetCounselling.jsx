import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";
import {
  polycetCounsellingSteps,
  polycetSpecialNotes
} from "@/data/polycetData";

const PolycetCounselling = () => {

  const [selectedDoc, setSelectedDoc] = useState(null);

  return (
    <SectionWrapper title="POLYCET Counselling Process" bg="bg-gray-50">

      <div className="relative border-l-4 border-slate-700 ml-4">

        {polycetCounsellingSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-14 ml-6"
          >

            {/* Timeline Dot */}
            <div className="absolute w-5 h-5 bg-slate-700 rounded-full -left-[10px] mt-2"></div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">

              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Step {index + 1}: {step.title}
              </h3>

              {/* Document List */}
              {step.documents ? (
                <div className="space-y-4">

                  {step.documents.map((doc, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center bg-gray-50 p-4 rounded-lg"
                    >

                      <p className="text-gray-700 font-medium">
                        {doc.name}
                      </p>

                      <button
                        onClick={() => setSelectedDoc(doc.image)}
                        className="bg-slate-700 text-white px-4 py-1 rounded-lg hover:bg-slate-800"
                      >
                        View
                      </button>

                    </div>
                  ))}

                  {step.note && (
                    <p className="text-gray-600 mt-6 whitespace-pre-line">
                      {step.note}
                    </p>
                  )}

                </div>
              ) : (
                <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                  {step.description}
                </p>
              )}

            </div>
          </motion.div>
        ))}

      </div>

      {/* Full Screen Document Modal */}

      {selectedDoc && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">

          <div className="relative max-w-4xl w-full p-4">

            <button
              onClick={() => setSelectedDoc(null)}
              className="absolute top-2 right-2 bg-white px-3 py-1 rounded shadow"
            >
              Close
            </button>

            <img
              src={selectedDoc}
              alt="Document Preview"
              className="w-full max-h-[90vh] object-contain rounded-lg"
            />

          </div>

        </div>
      )}

      {/* Special Notes */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 bg-slate-700 border-l-4 border-slate-900 p-6 rounded-xl"
      >

        <h3 className="text-xl font-semibold text-white mb-4">
          Special Notes
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-200">
          {polycetSpecialNotes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>

      </motion.div>

    </SectionWrapper>
  );
};

export default PolycetCounselling;