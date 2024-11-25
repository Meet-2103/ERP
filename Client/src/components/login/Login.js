

import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="h-screen w-screen backdrop-blur-md flex justify-center items-center"
      style={{
        backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/004/997/164/non_2x/intricate-frame-rose-and-vine-with-leaves-plant-vector.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        // backgroundColor: 'grey',
      }}
    >
      <div className="flex flex-col items-center space-y-12">
        <h1 className="text-3xl font-semibold bg-black text-white w-full text-center  py-4 bg-opacity-90 rounded-2xl">
          MIT Art, Design, and Technology University
        </h1>
        <div className="flex space-x-12">
          {/* Admin Card */}
          <div className="h-96 w-80 shadow-2xl flex flex-col justify-center items-center  bg-[#51d6be] bg-opacity rounded-xl space-y-6">
            <h1 className="text-4xl font-extrabold">Admin</h1>
            <Link
              to="/login/adminlogin"
              className="flex items-center justify-center bg-black h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200"
            >
              Login
            </Link>
          </div>

          {/* Faculty Card */}
          <div className="h-96 w-80 shadow-2xl flex flex-col justify-center items-center  bg-[#3522a3] bg-opacity-60 rounded-xl space-y-6">
            <h1 className="text-4xl font-extrabold">Faculty</h1>
            <Link
              to="/login/facultylogin"
              className="flex items-center justify-center bg-black h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200"
            >
              Login
            </Link>
          </div>

          {/* Student Card */}
          <div className="h-96 w-80 shadow-2xl flex flex-col justify-center items-center  bg-[#e15dd3] bg-opacity-60 rounded-xl space-y-6">
            <h1 className="text-4xl font-extrabold">Student</h1>
            <Link
              to="/login/studentlogin"
              className="flex items-center justify-center bg-black h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
