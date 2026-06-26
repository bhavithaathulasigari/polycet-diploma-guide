import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { CgProfile } from "react-icons/cg";
import { FiMenu, FiX } from "react-icons/fi";
import React, { useState } from "react";
import { isAuthenticated, getUser } from "../utils/auth";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const authenticated = isAuthenticated();
  const user = getUser();

  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition-all duration-300 ${
      isActive
        ? "bg-slate-800 text-white font-semibold"
        : "hover:bg-slate-600"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-slate-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-3 group">
          <img src={Logo} alt="Logo" className="h-14 w-auto" />
          <h1 className="text-2xl font-bold tracking-wide group-hover:text-slate-300 transition">
            POLYCET & Diploma Guide
          </h1>
        </Link>

        <div className="hidden md:flex items-center gap-3 font-medium">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/polycet" className={navLinkClass}>POLYCET</NavLink>
          <NavLink to="/diploma" className={navLinkClass}>Diploma</NavLink>
          <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
          <NavLink to="/faq" className={navLinkClass}>FAQ</NavLink>
        </div>

        <div className="hidden md:flex items-center gap-3">
          {authenticated ? (
            <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg font-medium shadow">
              <CgProfile size={20} />
              {user?.email}
            </div>
          ) : (
            <Link
              to="/signin"
              className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg font-semibold shadow"
            >
              <CgProfile size={20} />
              Sign In
            </Link>
          )}
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ${
          menuOpen
            ? "max-h-screen opacity-100 py-4"
            : "max-h-0 overflow-hidden opacity-0"
        } bg-slate-100`}
      >
        <div className="flex flex-col px-6 gap-3 font-medium">
          <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/polycet" className={navLinkClass} onClick={() => setMenuOpen(false)}>Polycet</NavLink>
          <NavLink to="/diploma" className={navLinkClass} onClick={() => setMenuOpen(false)}>Diploma</NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/faq" className={navLinkClass} onClick={() => setMenuOpen(false)}>FAQ</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;