import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-800 text-gray-300 ">
    

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Left */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2">
            POLYCET & Diploma Guide
          </h2>
          <p className="text-sm">
            One trusted place for POLYCET preparation, diploma syllabus,
            and career guidance for students.
          </p>
        </div>

        {/* Middle */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/polycet" className="hover:underline">POLYCET</Link></li>
            <li><Link to="/diploma" className="hover:underline">Diploma</Link></li>
            <li><Link to="/syllabus" className="hover:underline">Syllabus</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Contact
          </h3>
          <p className="text-sm">Email: polycetdiplomaguide@gmail.com</p>
          <p className="text-sm">Made for students ❤️</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-slate-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} POLYCET & Diploma Guide. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
