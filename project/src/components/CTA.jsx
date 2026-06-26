import React from 'react';
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-12 md:py-16 bg-slate-900 text-white text-center px-6">
      <h2 className="text-3xl font-bold mb-4">
        Start Your Academic Journey Today
      </h2>
      <p className="mb-6 max-w-xl mx-auto">
        Clear guidance, right decisions, better future.
      </p>
      <Link
        to="/signin"
        className="block sm:inline-block w-full sm:w-auto bg-white text-black px-8 py-4 rounded-lg font-semibold"
      >
        Get Started
      </Link>
    </section>
  );
};

export default CTA;
