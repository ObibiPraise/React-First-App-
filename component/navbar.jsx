import React from "react";
// import "./firstapp.css";

function Navbar() {
  return (
    <nav className="flex W-full bg-indigo-50">
      <div className="text-blue-500 text-sm font-bold -m-10 p-10">
        <h1>ADPLearn</h1>
      </div>
      <div className="text-black p-10 text-3xl flex gap-4">
        <h2>About</h2>
        <h2>Courses</h2>
        <h2>Features</h2>
        <h2>How It Works</h2>
      </div>
      <div className="p-10 flex gap-4">
        <button className="bg-blue-500 text-white p-2 rounded">Login</button>
        <button className="bg-green-500 text-white p-2 rounded">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
