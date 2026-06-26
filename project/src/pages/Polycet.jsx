import PolycetHero from "../components/polycet/PolycetHero";
import PolycetOverview from "../components/polycet/PolycetOverview";
import PolycetOfficialWebsite from "../components/polycet/PolycetOfficialWebsite";
import PolycetPattern from "../components/polycet/PolycetPattern";
import PolycetQualifyingMarks from "../components/polycet/PolycetQualifyingMarks";
import PolycetSyllabus from "../components/polycet/PolycetSyllabus";
import PolycetImportantDates from "../components/polycet/PolycetImportantDates";
import PolycetHallTicket from "../components/polycet/PolycetHallTicket";
import PolycetWhoShould from "../components/polycet/PolycetWhoShould";
import PolycetBenefits from "../components/polycet/PolycetBenefits";
import PolycetLateralEntry from "../components/polycet/PolycetLateralEntry";
import PolycetApply from "../components/polycet/PolycetApply";
import PolycetFeeStructure from "../components/polycet/PolycetFeeStructure";
import PolycetReservation from "../components/polycet/PolycetReservation";
import PolycetPapers from "../components/polycet/PolycetPapers";
import PolycetCutoff from "../components/polycet/PolycetCutoff";
import PolycetColleges from "../components/polycet/PolycetColleges";
import PolycetCounselling from "../components/polycet/PolycetCounselling";
import PolycetEligibility from "@/components/polycet/PolycetEligibility";
import PolycetDetails from "@/components/polycet/PolycetDetails";
import PolycetMistakes from "@/components/polycet/PolycetMistakes";
const Polycet = () => {
  return (
    <>
      <PolycetHero />
      <PolycetOverview />
      {/* <PolycetEligibility/>
      <PolycetOfficialWebsite /> */}
      <PolycetDetails />
      {/* Exam Details */}

      <PolycetQualifyingMarks />
      <PolycetSyllabus />

      {/* Important Info */}
      <PolycetHallTicket />
      <PolycetImportantDates />
      
      <PolycetWhoShould />
      <PolycetBenefits />
      <PolycetLateralEntry />

      {/* Application */}
      <PolycetApply />

      {/* Financial & Policy */}
      <PolycetFeeStructure />
      <PolycetReservation />

      {/* Preparation */}
      <PolycetPapers />
      <PolycetCutoff />

      {/* Admission */}
      <PolycetColleges />
      <PolycetCounselling />
      <PolycetMistakes/>
    </>
  );
};

export default Polycet;