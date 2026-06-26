import React from "react";
import { useState } from "react";
import faqData from "../data/faqData";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-slate-600 mb-6">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            className="
              bg-white
              p-5
              rounded-lg
              shadow-md
              cursor-pointer
              transition
              duration-300
              hover:shadow-lg
            "
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-slate-700">
                {faq.question}
              </h3>
              <span className="text-xl font-bold text-slate-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <p className="mt-3 text-gray-600 text-sm">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );

}

export default FAQ;
