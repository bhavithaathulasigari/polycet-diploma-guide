import React from "react";
import { Routes, Route } from "react-router-dom";

import ScrollManager from "./components/ScrollManager";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Main Pages
import Home from "./pages/Home";
import Polycet from "./pages/Polycet";
import Diploma from "./pages/Diploma";
import FAQ from "./pages/FAQ";
import Syllabus from "./pages/Syllabus";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import AboutUs from "./components/AboutUs";
import Contact from "./pages/Contact";




// Dynamic Pages
import BranchDetails from "./pages/BranchDetails";

// AP Colleges Pages
import Districts from "./pages/Districts";
import DistrictColleges from "./pages/DistrictColleges";
import CollegeDetails from "./pages/CollegeDetails";

// POLYCET Subject Pages
import MathsSyllabus from "./pages/MathsSyllabus";
import PhysicsSyllabus from "./pages/PhysicsSyllabus";
import ChemistrySyllabus from "./pages/ChemistrySyllabus";

// 404 Page
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">

      <ScrollManager />

      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/polycet" element={<Polycet />} />
          <Route path="/diploma" element={<Diploma />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/polycet/math" element={<MathsSyllabus />} />
          <Route path="/polycet/physics" element={<PhysicsSyllabus />} />
          <Route path="/polycet/chemistry" element={<ChemistrySyllabus />} />

          <Route path="/diploma/:slug" element={<BranchDetails />} />

          <Route path="/colleges" element={<Districts />} />
          <Route path="/colleges/:districtSlug" element={<DistrictColleges />} />
          <Route path="/college/:collegeSlug" element={<CollegeDetails />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;