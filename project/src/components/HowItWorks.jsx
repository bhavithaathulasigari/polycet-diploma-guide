import React from 'react';
// const HowItWorks = () => {
//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-6xl mx-auto px-6 text-center">

//         <h2 className="text-3xl font-bold mb-12">How It Works</h2>

//         <div className="grid md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-xl font-semibold mb-2">1. Choose Path</h3>
//             <p className="text-gray-600">
//               Select POLYCET or Diploma based on your goal.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-2">2. Learn Clearly</h3>
//             <p className="text-gray-600">
//               Understand syllabus and subjects step-by-step.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-2">3. Build Career</h3>
//             <p className="text-gray-600">
//               Explore opportunities after diploma.
//             </p>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HowItWorks;
const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Choose Path</h3>
            <p className="text-gray-600 max-w-sm mx-auto">
              Select Polycet or Diploma based on your goal.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">2. Learn Clearly</h3>
            <p className="text-gray-600 max-w-sm mx-auto">
              Understand syllabus step-by-step.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">3. Build Career</h3>
            <p className="text-gray-600 max-w-sm mx-auto">
              Choose the right career path confidently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
