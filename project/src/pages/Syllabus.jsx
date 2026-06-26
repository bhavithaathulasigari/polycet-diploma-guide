import { useState } from "react";
import SearchBar from "../components/SearchBar";
import syllabusData from "../data/syllabusData";

function Syllabus() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = syllabusData.filter(subject =>
    subject.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-slate-600 mb-6">
        POLYCET Syllabus
      </h2>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="flex flex-wrap gap-6 mt-6">
        {filteredData.map((subject, index) => (
          <div
            key={index}
            className="w-52 bg-white p-5 rounded-xl shadow-md text-center"
          >
            <h3 className="font-semibold mb-4">
              {subject.name}
            </h3>

            <a
              href={subject.file}
              download
              className="
                inline-block
                px-4 py-2
                bg-slate-600
                text-white
                rounded-md
                text-sm
                hover:bg-slate-700
                transition
              "
            >
              Download
            </a>
          </div>
        ))}

        {filteredData.length === 0 && (
          <p className="text-gray-500">
            No syllabus found.
          </p>
        )}
      </div>
    </div>
  );
}

export default Syllabus;
