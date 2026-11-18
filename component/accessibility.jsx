import react from "react";
import { useState, useEffect } from "react";
import "../styles/accessibility.css";
import {
  HeadsetIcon,
  JoystickIcon,
  CircleIcon,
  NavigationIcon,
} from "../component/icons";

function Accessibility() {
  //   const [data, setData] = useState([]);
  //   //   const [count, setCount] = useState(0);

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/posts",
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         },
  //       );
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();
  //       console.log(data);
  //       setData(data);
  //     } catch (error) {
  //       console.error("There was a problem with the fetch operation:", error);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  return (
    <div className="accessibility">
      <h1 id="accessibility-heading">
        Accessibility That <br />
        Works for You
      </h1>
      <div className="accessibility-content">
        <div className="accessibility-text1">
          <div className="accessibility-icon">
            <CircleIcon />
          </div>
          <h1>High Contrast & Scalable Text</h1>
          <p>
            See clearly, read easily - high contrast visuals and scalable text
            for stress-free viewing.
          </p>
        </div>
        <div className="accessibility-text2">
          <div className="accessibility-icon">
            <JoystickIcon />
          </div>
          <h1>Screen Reader Friendly</h1>
          <p>
            Learn at your pace, your way accessible, visual, and supportive.
          </p>
        </div>

        <div className="accessibility-text1">
          <div className="accessibility-icon">
            <HeadsetIcon />
          </div>
          <h1>Captions & Sign Language Support</h1>
          <p>
            Every word matters - now with captions & sign language support for
            inclusive learning.
          </p>
        </div>
        <div className="accessibility-text2">
          <div className="accessibility-icon">
            <NavigationIcon />
          </div>
          <h1>Voice Navigation</h1>
          <p>
            Navigate with ease - voice commands for a hands-free learning
            experience.
          </p>
        </div>
      </div>

      {/* {data.length > 0 && (
        <div className="data-container">
          <h2>Fetched Data:</h2>
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
}

export default Accessibility;
