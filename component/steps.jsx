import react from "react";
import "../styles/steps.css";
import { ShieldIcon, EducationIcon, AwardIcon } from "../component/icons";

function Steps() {
  return (
    <div className="steps">
      <h1 id="steps-heading">How it Works</h1>
      <p>Learn in 3 simple steps</p>
      <div className="steps-step">
        <div className="steps1">
          <div className="steps-icon">
            <ShieldIcon />
          </div>
          <h1 id="steps-title">
            <b>Step 1</b>: Sign Up & Personalize Accessibility
          </h1>
          <p>
            Create your account and set preference like captions, text size,
            voice, etc.
          </p>
        </div>
        <div className="steps2">
          <div className="steps-icon">
            <EducationIcon />
          </div>
          <h1 id="steps-title">
            <b>Step 2</b>: Learn with Inclusive Tools{" "}
          </h1>
          <p>
            Access courses with captions, audio mode, and connect with peers.
          </p>
        </div>
        <div className="steps1">
          <div className="steps-icon">
            <AwardIcon />
          </div>
          <h1 id="steps-title">
            <b>Step 3</b>: Get Feedback & Earn Certifications
          </h1>
          <p>Track your growth, get feedback, and download certificates.</p>
        </div>
      </div>
      <button className="steps-button">Get started now</button>
    </div>
  );
}

export default Steps;
