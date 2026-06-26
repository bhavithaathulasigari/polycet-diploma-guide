import React from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, Target, Globe } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const PolycetDetails = () => {
  return (
    <section className="py-20 bg-slate-200 text-slate-800">
      <div className="max-w-6xl mx-auto px-6 space-y-24">

        {/* ================= Official Website ================= */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-8"
          >
            Official Website
          </motion.h2>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-700 border border-slate-900 p-8 rounded-2xl"
          >
            <div className="flex justify-center mb-4 text-slate-200">
              <Globe size={30} />
            </div>

            <p className="text-slate-200 mb-6">
              For official notifications and latest updates visit:
            </p>

            <div className="space-y-3">
              <a
                href="https://www.sbtet.telangana.gov.in/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-300 hover:text-white transition"
              >
                Telangana – tap here
              </a>

              <a
                href="https://sbtet.ap.gov.in/APSBTET/Welcome.do"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-300 hover:text-white transition"
              >
                Andhra Pradesh –  tap here
              </a>
            </div>
          </motion.div>
        </div>

        {/* ================= Eligibility ================= */}
        <div>
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-8"
          >
            Eligibility Criteria
          </motion.h3>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-700 border border-slate-900 rounded-2xl p-8 flex items-start gap-4"
          >
            <ClipboardCheck className="text-slate-200 mt-1" size={28} />

            <ul className="space-y-2 text-slate-200">
              <li>• Must have passed 10th (SSC) or equivalent examination.</li>
              <li>• Minimum 35% marks in Mathematics.</li>
              <li>• No age limit (as per state rules).</li>
              <li>• Must satisfy local/non-local eligibility conditions.</li>
            </ul>
          </motion.div>
        </div>

        {/* ================= What After POLYCET ================= */}
        <div>
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-8"
          >
            What After POLYCET?
          </motion.h3>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-700 border border-slate-900 rounded-2xl p-8 flex items-start gap-4"
          >
            <Target className="text-slate-100 mt-1" size={28} />

            <div>
              <p className="text-slate-200 leading-relaxed">
                After qualifying POLYCET, students can join diploma branches
                like Computer Science, Civil, Mechanical, Electrical, and
                Electronics Engineering.
              </p>

              <ul className="mt-4 space-y-2 text-slate-100">
                <li>• Start working as Technician or Junior Engineer</li>
                <li>• Apply for Government technical jobs</li>
                <li>• Pursue B.Tech through lateral entry (direct 2nd year)</li>
              </ul>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default PolycetDetails;