import react from "react";
import frameimage from "../src/assets/frame.png";
import "../styles/Hero.css";
import Navbar from "./navbar";

function Hero() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="hero-content">
          <h1>
            Learn Skills Your Way<br/>
            <span>Accessible, Inclusive, and Engaging</span>
          </h1>
          <p>
            Join a platform where learning adopts to you personalized courses,
            accessible tools, and peer powered growth.
          </p>

          <button className="hero-button">Start learning</button>
          <button className="hero-button">Explore Courses</button>
        </div>

        <div className="hero-image">
          <img src={frameimage} className="frame-image" />
        </div>
      </div>
    </>
  );
}

export default Hero;
