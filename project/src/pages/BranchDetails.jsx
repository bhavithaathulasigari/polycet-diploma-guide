import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Download, ChevronDown, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { diplomaBranches } from "@/data/diplomaData";

const BranchDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const branch = diplomaBranches.find(
    (item) => item.slug === slug
  );

  const semesterData =
    branch?.semesters || branch?.years || null;

  if (!branch || !semesterData) {
    return (
      <div className="p-10 text-xl text-red-500">
        Branch Data Not Available
      </div>
    );
  }

  const semesterTitles = {
    firstYear: "1st Year",
    secondYear: "2nd Year",
    thirdYear: "3rd Year",
    sem3: "3rd Semester",
    sem4: "4th Semester",
    sem5: "5th Semester",
    sem6: "6th Semester",
  };

  const semesterKeys = Object.keys(semesterData);

  const [activeSemester, setActiveSemester] = useState(
    semesterKeys[0]
  );
  const [openSubject, setOpenSubject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // 🔥 Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const semester = semesterData[activeSemester];

  const filteredSubjects = semester.subjects?.filter((subject) =>
    subject.name
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase())
  );

  const highlightText = (text) => {
    if (!debouncedSearch) return text;

    const regex = new RegExp(`(${debouncedSearch})`, "gi");

    return text.split(regex).map((part, i) =>
      part.toLowerCase() === debouncedSearch.toLowerCase() ? (
        <span
          key={i}
          className="bg-slate-300 px-1 rounded"
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const handleDownload = (paper) => {
    const link = document.createElement("a");
    link.href = paper.file;
    link.download = paper.title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-16 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-8 text-gray-700 hover:text-black transition"
        >
          <ArrowLeft size={20} /> Back
        </button>

        {/* Branch Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-gray-800"
        >
          {branch.title}
        </motion.h1>

        {/* 🔥 Semester Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {semesterKeys.map((key) => (
            <button
              key={key}
              onClick={() => {
                setActiveSemester(key);
                setOpenSubject(null);
                setSearchTerm("");
              }}
              className={`px-5 py-2 rounded-lg font-medium transition ${activeSemester === key
                  ? "bg-slate-700 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
                }`}
            >
              {semesterTitles[key] || key}
            </button>
          ))}
        </div>

        {/* Semester Content */}
        <motion.div
          key={activeSemester}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow p-8"
        >

          {/* Subjects Heading */}
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Subjects
          </h3>

          {/* 🔍 Search Input */}
          <div className="relative mb-3">
            <Search
              size={18}
              className="absolute left-3 top-3.5 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search subject..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
            />
          </div>

          {/* Subject Count */}
          <p className="text-sm text-gray-500 mb-6">
            {filteredSubjects?.length || 0} Subjects Found
          </p>

          {/* Subject List */}
          {filteredSubjects?.length === 0 ? (
            <p className="text-gray-500 mb-6">
              No subjects found.
            </p>
          ) : (
            filteredSubjects.map((subject, index) => (
              <div
                key={index}
                className="mb-4 border rounded-xl overflow-hidden"
              >
                {/* If subject has papers */}
                {subject.papers && subject.papers.length > 0 ? (
                  <>
                    <div
                      onClick={() =>
                        setOpenSubject(
                          openSubject === index ? null : index
                        )
                      }
                      className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
                    >
                      <span className="font-medium">
                        {highlightText(subject.name)}
                      </span>
                      <ChevronDown size={18} />
                    </div>

                    {openSubject === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6"
                      >
                        <p className="mb-3 text-gray-600">
                          Previous Question Papers
                        </p>

                        <ul className="space-y-2">
                          {subject.papers.map((paper, i) => (
                            <li key={i}>
                              <button
                                onClick={() =>
                                  handleDownload(paper)
                                }
                                className="flex items-center justify-between w-full p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                              >
                                {paper.title}
                                <Download size={18} />
                              </button>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </>
                ) : (
                  /* If NO papers (like Industrial Training) */
                  <div className="p-4 bg-gray-50">
                    <span className="font-medium text-lg">
                      {highlightText(subject.name)}
                    </span>
                  </div>
                )}
              </div>
            ))
          )}

          {/* Labs */}
          <h3 className="text-xl font-semibold mt-10 mb-4 text-gray-800">
            Labs
          </h3>

          {semester.labs?.length === 0 ? (
            <p className="text-gray-500">
              Labs will be updated soon.
            </p>
          ) : (
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {semester.labs?.map((lab, i) => (
                <li key={i}>{lab}</li>
              ))}
            </ul>
          )}
          {/* Career Opportunities */}
<h3 className="text-xl font-semibold mt-10 mb-4 text-gray-800">
  Career Opportunities
</h3>

{branch.careers?.length === 0 ? (
  <p className="text-gray-500">
    Career information will be updated soon.
  </p>
) : (
  <ul className="list-disc pl-6 space-y-2 text-gray-700">
    {branch.careers.map((career, i) => (
      <li key={i}>{career}</li>
    ))}
  </ul>
)}
        </motion.div>

      </div>
    </section>
  );
};

export default BranchDetails;