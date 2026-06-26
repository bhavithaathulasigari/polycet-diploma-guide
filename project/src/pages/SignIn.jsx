// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { login } from "../utils/auth";

// const SignIn = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const redirectFile = location.state?.redirectTo;

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const email = e.target.email.value;
//     login(email);

//     if (redirectFile) {
//       window.open(redirectFile, "_blank");
//       navigate("/");
//     } else {
//       navigate("/");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={handleLogin}
//         className="bg-white p-8 rounded-xl shadow w-96"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">
//           Sign In to Download
//         </h2>

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           required
//           className="w-full mb-4 p-3 border rounded-lg"
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           required
//           className="w-full mb-6 p-3 border rounded-lg"
//         />

//         <button
//           type="submit"
//           className="w-full bg-slate-700 text-white py-3 rounded-lg hover:bg-slate-800 transition"
//         >
//           Sign In
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignIn;
import React, { useState } from "react";
import { login } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) return alert("Enter email");
    login(email);
    navigate("/polycet"); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow w-80"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-slate-700 text-white py-2 rounded hover:bg-slate-800 transition"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
