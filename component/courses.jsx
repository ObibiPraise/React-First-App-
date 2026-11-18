import react from "react";
import "../styles/courses.css";
import contentimage1 from "../src/assets/content-frame1.png";
import contentimage2 from "../src/assets/content-frame2.png";
import contentimage3 from "../src/assets/content-frame3.png";

function Courses() {
  return (
    <div className="courses">
      <h1 id="courses-heading">Learn from a Wide Range of<br/>Skill-Based Courses</h1>
      <p id="courses-heading2">Join a platform where learning adopts to you. Personalized courses,<br/>accessible tools, and peer-powered growth</p>
      <div className="courses-content">
        <div className="courses-text">
            <img src={contentimage1} className="content-image" />
          <h1 id="courses-title">Intro to Graphic Design</h1>
          <p>Kickstart your journey with intro to Graphic Design!</p>
        </div>
        <div className="courses-text2">
            <img src={contentimage2} className="content-image" />
          <h1 id="courses-title">Learn Data Analyst</h1>
          <p>Learn insights, trends & decision-making skills that drives success.</p>
        </div>
        <div className="courses-text">
            <img src={contentimage3} className="content-image" />
          <h1 id="courses-title">Intro to Web Developer</h1>
          <p>Learn to build websites that are fast, functional, and user-friendly!</p>
        </div>
      </div>
      <button className="courses-button">View all Courses</button>
    </div>
  );
}

export default Courses;