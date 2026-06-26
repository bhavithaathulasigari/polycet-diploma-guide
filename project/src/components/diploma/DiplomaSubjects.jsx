import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/utils/animations";
import { diplomaBranches } from "@/data/diplomaData";

const DiplomaSubjects = () => {

  // Collect all subjects from all branches & years
  const allSubjects = diplomaBranches.flatMap(branch =>
    Object.values(branch.years).flatMap(year =>
      year.subjects.map(subject => subject.name)
    )
  );

  // Remove duplicates
  const uniqueSubjects = [...new Set(allSubjects)];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8"
        >
          All Diploma Subjects
        </motion.h2>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-4"
        >
          {uniqueSubjects.map((subject, index) => (
            <motion.li
              key={index}
              variants={fadeUp}
              className="p-4 bg-gray-100 rounded-lg"
            >
              {subject}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default DiplomaSubjects;