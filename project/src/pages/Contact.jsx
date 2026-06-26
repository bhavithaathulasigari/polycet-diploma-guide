import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
          Contact Us
        </h2>

        <p className="text-gray-600 mb-14 text-lg max-w-2xl mx-auto">
          Have questions regarding Polycet or Diploma guidance?  
          Our team is here to assist you with accurate and structured support.
        </p>

        {/* Contact Card */}
        <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-200">

          <div className="space-y-8 text-left">

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-slate-100 p-3 rounded-xl">
                <Mail className="text-slate-700" size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Email Address</h4>
                <p className="text-gray-600">
                  polycetdiplomaguide@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-slate-100 p-3 rounded-xl">
                <Phone className="text-slate-700" size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Phone Number</h4>
                <p className="text-gray-600">
                  +91 8125329312
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="bg-slate-100 p-3 rounded-xl">
                <MapPin className="text-slate-700" size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Location</h4>
                <p className="text-gray-600">
                  Government Polytechnic, Obulavaripalli  
                  <br />
                  Tirupati District, Andhra Pradesh, India – 516108
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;