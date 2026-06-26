// import { useState } from "react";
// import diplomaData from "../data/diplomaData";
// import SearchBar from "../components/SearchBar";
// import React from "react";

// function Diploma() {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredData = diplomaData.filter(course =>
//     course.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="p-8">
//       <h2 className="text-2xl font-bold text-slate-500 mb-4">
//         Diploma Courses
//       </h2>

//       <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

//       <div className="flex flex-wrap gap-6">
//         {filteredData.map((course, index) => (
//           <div
//             key={index}
//             className="w-64 bg-white p-5 rounded-lg shadow-md"
//           >
//             <h3 className="font-semibold text-slate-500 mb-3">
//               {course.name}
//             </h3>

//             <a
//               href={course.file}
//               download
//               className="inline-block px-4 py-2 bg-slate-600
//                          text-white rounded-md text-sm hover:bg-slate-700"
//             >
//               Download
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Diploma;


// import DiplomaHero from "../components/diploma/DiplomaHero";
// import DiplomaOverview from "../components/diploma/DiplomaOverview";
// import DiplomaBranches from "../components/diploma/DiplomaBranches";
// import DiplomaSubjects from "../components/diploma/DiplomaSubjects";
// import DiplomaCareers from "../components/diploma/DiplomaCareers";


// const Diploma = () => {
//   return (
//     <>
//       <DiplomaHero />
//       <DiplomaOverview />
      {/* <DiplomaBranches />
      <DiplomaSubjects />
      <DiplomaCareers /> */}
//     </>
//   );
// };

// export default Diploma;

import DiplomaHero from "../components/diploma/DiplomaHero";
import DiplomaOverview from "../components/diploma/DiplomaOverview";
import DiplomaBranches from "../components/diploma/DiplomaBranches";
import InterVsDiploma from "../components/diploma/InterVsDiploma";

const Diploma = () => {
  return (
    <>
      <DiplomaHero />
      <DiplomaOverview />
      <InterVsDiploma/>
      <DiplomaBranches />
    </>
  );
};

export default Diploma;
