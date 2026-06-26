// import React from "react";
// import { useParams } from "react-router-dom";
// import { apColleges } from "../data/apCollegesData";

// const CollegeDetails = () => {
//   const { collegeSlug } = useParams();

//   let collegeData = null;

//   apColleges.forEach((district) => {
//     district.colleges.forEach((college) => {
//       if (college.slug === collegeSlug) {
//         collegeData = college;
//       }
//     });
//   });

//   if (!collegeData) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <h2 className="text-2xl font-bold">College Not Found</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen p-8 bg-slate-100">
//       <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
//         <h1 className="text-3xl font-bold text-blue-700">
//           {collegeData.name}
//         </h1>

//         <p className="mt-2 text-gray-600">
//           📍 Location: {collegeData.location}
//         </p>
//         <p className="text-gray-600">
//           🏫 Established: {collegeData.established}
//         </p>
//         <p className="text-gray-600">
//           🏛 Type: {collegeData.type}
//         </p>

//         <h2 className="text-xl font-semibold mt-6 mb-3 text-green-600">
//           Branches & Seats
//         </h2>

//         <ul className="space-y-3">
//           {collegeData.branches.map((branch, index) => (
//             <li
//               key={index}
//               className="flex justify-between bg-gray-100 p-3 rounded-lg"
//             >
//               <span>{branch.name}</span>
//               <span>{branch.seats} Seats</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default CollegeDetails;


// import React from "react";
// import { useParams } from "react-router-dom";
// import { apData } from "../data/apData";

// const CollegeDetails = () => {
//   const { collegeSlug } = useParams();

//   const allColleges = apData.flatMap((d) => d.colleges);

//   const college = allColleges.find(
//     (c) => c.slug === collegeSlug
//   );

//   if (!college) {
//     return (
//       <div className="p-8 text-red-500">
//         College Not Found
//       </div>
//     );
//   }

//   const totalSeats = college.branches
//     ? college.branches.reduce(
//         (sum, branch) => sum + branch.seats,
//         0
//       )
//     : 0;

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-4">
//         {college.name}
//       </h1>

//       <p><strong>Location:</strong> {college.location}</p>
//       <p><strong>Established:</strong> {college.established}</p>
//       <p><strong>Type:</strong> {college.type}</p>

//       {college.branches && (
//         <>
//           <p className="mt-3 font-semibold">
//             Total Seats: {totalSeats}
//           </p>

//           <h2 className="text-2xl font-bold mt-6 mb-4">
//             Branches
//           </h2>

//           <ul className="space-y-2">
//             {college.branches.map((branch, index) => (
//               <li
//                 key={index}
//                 className="bg-gray-200 p-3 rounded"
//               >
//                 {branch.name} — {branch.seats} seats
//               </li>
//             ))}
//           </ul>
//         </>
//       )}
//     </div>
//   );
// };

// export default CollegeDetails;


import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { apData } from "../data/apData";

const CollegeDetails = () => {
  const { collegeSlug } = useParams();

  // Flatten all colleges (memoized for performance)
  const allColleges = useMemo(() => {
    return apData.flatMap((districtObj) =>
      districtObj.colleges.map((college) => ({
        ...college,
        zone: districtObj.zone,
        district: districtObj.district
      }))
    );
  }, []);

  // 🔥 TEMPORARY DUPLICATE CHECK (Remove after debugging)
  const slugCounts = {};
  const instituteCodeCounts = {};

  allColleges.forEach((college) => {
    slugCounts[college.slug] =
      (slugCounts[college.slug] || 0) + 1;

    instituteCodeCounts[college.instituteCode] =
      (instituteCodeCounts[college.instituteCode] || 0) + 1;
  });

  const duplicateSlugs = Object.entries(slugCounts)
    .filter(([_, count]) => count > 1);

  const duplicateInstituteCodes = Object.entries(instituteCodeCounts)
    .filter(([_, count]) => count > 1);

  console.log("Duplicate Slugs:", duplicateSlugs);
  console.log("Duplicate Institute Codes:", duplicateInstituteCodes);
  // 🔥 END DEBUG BLOCK

  const college = allColleges.find(
    (c) => c.slug === collegeSlug
  );

  if (!college) {
    return (
      <div className="p-8 text-red-500 text-xl">
        College Not Found
      </div>
    );
  }

  // Safe website formatting
  const websiteUrl =
    college.website &&
    (college.website.startsWith("http")
      ? college.website
      : `https://${college.website}`);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        {college.name}
      </h1>

      <div className="space-y-2 text-lg">

        <p>
          <strong>District:</strong> {college.district}
        </p>

        <p>
          <strong>Type:</strong> {college.type}
        </p>

        <p>
          <strong>SBTET Code:</strong> {college.sbtetCode}
        </p>

        <p>
          <strong>Institute Code:</strong> {college.instituteCode}
        </p>

        <p>
          <strong>Address:</strong> {college.address}
        </p>

        <p>
          <strong>Contact:</strong>{" "}
          {college.contact || "Not Available"}
        </p>

        <p>
          <strong>Email:</strong>{" "}
          {college.email || "Not Available"}
        </p>

        {college.website && (
          <p>
            <strong>Website:</strong>{" "}
            <a
              href={websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              {college.website}
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default CollegeDetails;
