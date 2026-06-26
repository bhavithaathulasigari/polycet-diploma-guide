import React from "react";
import { ClipboardCheck, Target } from "lucide-react";

const PolycetEligibility = () => {
  return (
    <section id="eligibility" className="py-12 bg-slate-200 text-slate-800">
      <div className="max-w-6xl mx-auto px-6">

        {/* Eligibility */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Eligibility Criteria
          </h3>

          <div className="bg-slate-700 border border-slate-900 rounded-2xl p-8 flex items-start gap-4">
            <ClipboardCheck className="text-slate-200 mt-1" size={28} />
            <ul className="space-y-2 text-slate-200">
              <li>• Must have passed 10th (SSC) or equivalent examination.</li>
              <li>• Minimum 35% marks in Mathematics.</li>
              <li>• No age limit (as per state rules).</li>
              <li>• Must satisfy local/non-local eligibility conditions.</li>
            </ul>
          </div>
        </div>

        {/* What After POLYCET */}
        <div className="mt-24">
          <h3 className="text-2xl font-semibold mb-6">
            What After POLYCET?
          </h3>

          <div className="bg-slate-700 border border-slate-900 rounded-2xl p-8 flex items-start gap-4">
            <Target className="text-slate-100 mt-1" size={28} />
            <div>
              <p className="text-slate-200 leading-relaxed">
                After qualifying POLYCET, students can join diploma branches
                like Computer Science, Civil, Mechanical, Electrical, and
                Electronics Engineering.
              </p>

              <ul className="mt-4 space-y-2 text-slate-100">
                <li>• Start working as Technician or Junior Engineer</li>
                <li>• Apply for Government technical jobs</li>
                <li>• Pursue B.Tech through lateral entry (direct 2nd year)</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PolycetEligibility;