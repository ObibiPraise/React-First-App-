import react from "react";
import "../styles/previews.css";
import {
  RightIcon,
  LeftIcon,
  CheckcircleIcon,
  StarsIcon,
} from "../component/icons";
import feedbackimage1 from "../src/assets/feedback-image1.png";
import feedbackimage2 from "../src/assets/feedback-image2.png";
import feedbackimage3 from "../src/assets/feedback-image3.png";

function Preview() {
  return (
    <div className="preview">
      <h1 id="preview-title">
        Learn Together Through
        <br /> Peer Reviews
      </h1>
      <p>
        Submit assignments, review peers, and recieve constructive feedback in
        an accessible way.
      </p>
      <div className="preview-content">
        <div className="preview-left">
          <LeftIcon />
        </div>
        <div className="preview-feedbacks1">
          <p>
            I finally found a course that fits my pace and supports my visual
            needs. Thank you!
          </p>
          <div className="feedback-user">
            <img src={feedbackimage1} className="feedback-image" />
            <div className="feedback-info1">
              <h3>Bukunmi John</h3>
              <p>Founder and CEO | Shefdev</p>
              <p>
                <StarsIcon />
              </p>
            </div>
          </div>
        </div>
        <div className="preview-feedbacks">
          <p>
            I've finally discovered a course thats matches my learning pace and
            caters to my visual style. Greateful!
          </p>
          <div className="feedback-user">
            <img src={feedbackimage2} className="feedback-image" />
            <div className="feedback-info">
              <h3>Ayomide Lawrence</h3>
              <p>Founder and CEO | Webrand</p>
              <p>
                <StarsIcon />
              </p>
            </div>
          </div>
        </div>
        <div className="preview-feedbacks1">
          <p>
            A course that truely fits how i learn - at my own speed and visually
            supportive . I'm so glad i found it!
          </p>
          <div className="feedback-user">
            <img src={feedbackimage3} className="feedback-image" />
            <div className="feedback-info">
              <h3>Kashi Obioma</h3>
              <p>Founder and CEO | Kashdev</p>
              <p>
                <StarsIcon />
              </p>
            </div>
          </div>
        </div>
        <div className="preview-right">
          <RightIcon />
        </div>
      </div>

      <div className="preview-tabs">
        <div className="tabs">
          <a href="">
            <CheckcircleIcon />
            Submit
          </a>
        </div>
        <div className="tabs">
          <a href="">
            <CheckcircleIcon />
            Review Others
          </a>
        </div>
        <div className="tabs">
          <a href="">
            <CheckcircleIcon />
            Recieve Feedback
          </a>
        </div>
        <div className="tabs">
          <a href="">
            <CheckcircleIcon />
            Improve
          </a>
        </div>
      </div>
    </div>
  );
}

export default Preview;
