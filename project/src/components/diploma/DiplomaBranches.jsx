

// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { diplomaBranches } from "@/data/diplomaData";

// const DiplomaBranches = () => {
//   return (
//     <section className="pt-20 pb-32 bg-slate-100">
//       <div className="max-w-6xl mx-auto px-6">
        
//         {/* Heading */}
//         <h1 className="text-4xl font-bold text-center mb-14 text-gray-800">
//           Diploma Branches
//         </h1>

//         {/* Branch Cards */}
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {diplomaBranches.map((branch) => (
//             <motion.div
//               key={branch.slug}
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col justify-between"
//             >
//               <div>
//                 <h2 className="text-xl font-semibold mb-3 text-slate-800">
//                   {branch.title}
//                 </h2>

//                 <p className="text-gray-500 text-sm mb-6">
//                   Click below to explore subjects and career opportunities.
//                 </p>
//               </div>

//               <Link
//                 to={`/diploma/${branch.slug}`}
//                 className="mt-auto inline-block text-slate-600 font-medium hover:underline"
//               >
//                 View Details →
//               </Link>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default DiplomaBranches;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { diplomaBranches } from "@/data/diplomaData";

const DiplomaBranches = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10 text-center">
          Diploma Branches
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {diplomaBranches.map((branch) => (
            <motion.div
              key={branch.slug}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                {branch.title}
              </h3>

              <Link
                to={`/diploma/${branch.slug}`}
                className="text-slate-600 font-medium hover:underline"
              >
                View Subjects, Labs & Career Opportunities →
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DiplomaBranches;