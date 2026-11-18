import react from "react";
import "../styles/learner.css";
import frame1 from "../src/assets/frame1.png";
import frame2 from "../src/assets/frame2.png";
import frame3 from "../src/assets/frame3.png";
import frame4 from "../src/assets/frame4.png";
import frame5 from "../src/assets/frame5.png";
import frame6 from "../src/assets/frame6.png";
import frame7 from "../src/assets/frame7.png";
import frame8 from "../src/assets/frame8.png";
import frame9 from "../src/assets/frame9.png";
import frame10 from "../src/assets/frame10.png";
import frame11 from "../src/assets/frame11.png";


function Learner() {
  return (
    <div className="learners">
      <div className="learners-join">
        <h1>Ready to Start Learning Inclusively?</h1>
        <p>
          Join thousands of learners enjoying accessible, personalized education
        </p>
        <button className="learners-button">Join now</button>
      </div>
      <div className="learners-picture">
        <img src={frame1} className="frame-image"/>
        <img src={frame11} className="frame-image"/>
        <img src={frame3} className="frame-image"/>
        <img src={frame4} className="frame-image"/>
        <img src={frame9} className="frame-image"/>
        <img src={frame10} className="frame-image"/>
        <img src={frame7} className="frame-image"/>
        <img src={frame6} className="frame-image"/>
        <img src={frame8} className="frame-image"/>
        <img src={frame2} className="frame-image"/>
        <img src={frame5} className="frame-image"/>
      </div>
    </div>
  );
}

export default Learner;
