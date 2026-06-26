
import { Link } from "react-router-dom";
import { FaSchool, FaUniversity } from "react-icons/fa";

const Programs = () => {
  return (
    <section className="py-16 bg-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore Our Programs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-6 md:p-8 rounded-xl shadow hover:shadow-2xl transition">
            <FaSchool className="text-4xl text-slate-600 mb-4" />
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              POLYCET
            </h3>
            <p className="text-gray-600 mb-6">
              Exam pattern, syllabus, preparation tips and counselling info.
            </p>
            <Link
              to="/polycet"
              className="block sm:inline-block text-center bg-black text-white px-6 py-3 rounded-lg"
            >
              Explore POLYCET
            </Link>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-xl shadow hover:shadow-2xl transition">
            <FaUniversity className="text-4xl text-slate-600 mb-4" />
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Diploma Courses
            </h3>
            <p className="text-gray-600 mb-6">
              Branch-wise syllabus, subjects and career paths.
            </p>
            <Link
              to="/diploma"
              className="block sm:inline-block text-center border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition"
            >
              View Diploma
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Programs;
