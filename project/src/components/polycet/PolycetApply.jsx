import { motion } from "framer-motion";
import { polycetApplySteps } from "@/data/polycetData";

const PolycetApply = () => {
  return (
    <section
      id="apply"
      className="py-20 bg-slate-50 text-slate-800"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          How to Apply for POLYCET
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {polycetApplySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start gap-4">

                <div className="w-10 h-10 flex items-center justify-center bg-slate-700 text-white font-bold rounded-full">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 whitespace-pre-line leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PolycetApply;