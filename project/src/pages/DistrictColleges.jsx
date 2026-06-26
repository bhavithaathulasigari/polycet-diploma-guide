// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { apData } from "../data/apData";
// import { slugify } from "../utils/slugify";

// const DistrictColleges = () => {
//   const { districtSlug } = useParams();

//   const district = apData.find(
//     (d) => slugify(d.district) === districtSlug
//   );

//   if (!district) {
//     return (
//       <div className="p-8 text-red-500">
//         District Not Found
//       </div>
//     );
//   }

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-6">
//         {district.district} Colleges
//       </h1>

//       <div className="grid md:grid-cols-2 gap-6">
//         {district.colleges.map((college) => (
//           <Link
//             key={college.slug}
//             to={`/college/${college.slug}`}
//             className="bg-slate-200 p-6 rounded-xl shadow hover:bg-slate-300 transition"
//           >
//             <h2 className="text-xl font-semibold">
//               {college.name}
//             </h2>
//             {college.established && (
//               <p>Established: {college.established}</p>
//             )}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DistrictColleges;





import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { apData } from "../data/apData";
import { slugify } from "../utils/slugify";

const DistrictColleges = () => {
  const { districtSlug } = useParams();
  const [search, setSearch] = useState("");

  const district = apData.find(
    (d) => slugify(d.district) === districtSlug
  );

  if (!district) {
    return (
      <div className="p-8 text-red-500">
        District Not Found
      </div>
    );
  }

  const filteredColleges = district.colleges.filter((college) =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        {district.district} Colleges
      </h1>

      {/* 🔎 Search Bar */}
      <input
        type="text"
        placeholder="Search College..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-1/2 p-3 mb-6 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {filteredColleges.length > 0 ? (
          filteredColleges.map((college) => (
            <Link
              key={college.slug}
              to={`/college/${college.slug}`}
              className="bg-slate-200 p-6 rounded-xl shadow hover:bg-slate-300 transition"
            >
              <h2 className="text-xl font-semibold">
                {college.name}
              </h2>
              {college.established && (
                <p>Established: {college.established}</p>
              )}
            </Link>
          ))
        ) : (
          <p className="text-red-500">No colleges found</p>
        )}
      </div>
    </div>
  );
};

export default DistrictColleges;

