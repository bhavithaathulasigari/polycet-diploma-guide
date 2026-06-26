
// import React from "react";
// import { Link } from "react-router-dom";
// import { apData } from "../data/apData";
// import { slugify } from "../utils/slugify";

// const Districts = () => {
//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-6">
//         AP Government Polytechnic Districts
//       </h1>

//       <div className="grid md:grid-cols-3 gap-6 bg-gray-100 bg-opacity-50 ">
//         {apData.map((district) => (
//           <Link
//             key={district.district}
//             to={`/colleges/${slugify(district.district)}`}
//             className=" p-6 rounded-xl shadow bg-slate-200 hover:bg-slate-300 transition"
//           >
//             <h2 className="text-xl font-semibold">
//               {district.district}
//             </h2>
//             <p className="mt-2">
//               {district.colleges.length} Colleges
//             </p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Districts;




// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { apData } from "../data/apData";
// import { slugify } from "../utils/slugify";

// const Districts = () => {
//   const [search, setSearch] = useState("");

//   const filteredDistricts = apData.filter((district) =>
//     district.district.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-6">
//         AP Government Polytechnic Districts
//       </h1>

//       {/* 🔎 Search Bar */}
//       <input
//         type="text"
//         placeholder="Search District..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="w-full md:w-1/2 p-3 mb-6 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//       />

//       <div className="grid md:grid-cols-3 gap-6">
//         {filteredDistricts.length > 0 ? (
//           filteredDistricts.map((district) => (
//             <Link
//               key={district.district}
//               to={`/colleges/${slugify(district.district)}`}
//               className="p-6 rounded-xl shadow bg-slate-200 hover:bg-slate-300 transition"
//             >
//               <h2 className="text-xl font-semibold">
//                 {district.district}
//               </h2>
//               <p className="mt-2">
//                 {district.colleges.length} Colleges
//               </p>
//             </Link>
//           ))
//         ) : (
//           <p className="text-red-500">No districts found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Districts;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { apData } from "../data/apData";
import { slugify } from "../utils/slugify";
import { motion } from "framer-motion";

const Districts = () => {
  const [search, setSearch] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const filteredDistricts = apData.filter((district) => {
    const matchesSearch = district.district
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesDropdown =
      selectedDistrict === "" ||
      district.district === selectedDistrict;

    return matchesSearch && matchesDropdown;
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        AP Government Polytechnic Districts
      </h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search District..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-1/3 p-3 mb-4 border rounded-lg"
      />

      {/* Dropdown */}
      <select
        value={selectedDistrict}
        onChange={(e) => setSelectedDistrict(e.target.value)}
        className="w-full md:w-1/3 p-3 mb-6 border rounded-lg"
      >
        <option value="">All Districts</option>
        {apData.map((d) => (
          <option key={d.district} value={d.district}>
            {d.district}
          </option>
        ))}
      </select>

      <div className="grid md:grid-cols-3 gap-6">
        {filteredDistricts.map((district) => (
          <motion.div
            key={district.district}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to={`/colleges/${slugify(district.district)}`}
              className="block p-6 rounded-xl shadow bg-slate-200 hover:bg-slate-300"
            >
              <h2 className="text-xl font-semibold">
                {district.district}
              </h2>
              <p className="mt-2">
                {district.colleges.length} Colleges
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Districts;
