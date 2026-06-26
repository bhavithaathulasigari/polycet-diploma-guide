import { motion } from "framer-motion";

const SectionWrapper = ({ id, title, bg = "bg-white", children }) => {
  return (
    <section id={id} className={`py-20 ${bg}`}>
      <div className="max-w-6xl mx-auto px-6">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-10 text-slate-800"
          >
            {title}
          </motion.h2>
        )}

        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
