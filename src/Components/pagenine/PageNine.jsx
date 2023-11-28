import React, { useState, useEffect } from "react";
import pagenine from "../../assets/PageNine.png";
import "./PageNine.css";

const PageNine = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const svgContainer = document.getElementById("svg-container");

    const updateBlobPosition = () => {
      const blob = document.getElementById("blob");
      const { x, y } = mousePosition;

      // Update the blob's position based on the mouse cursor
      blob.setAttribute("cx", x);
      blob.setAttribute("cy", y);
    };

    svgContainer.addEventListener("mousemove", handleMouseMove);

    // Initial update
    updateBlobPosition();

    return () => {
      svgContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePosition]);

  return (
    <body>
      <div className="svgblob" id="svg-container">
        <svg
          viewBox="0 0 500 500"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="blobgradient-1">
              <stop offset="0%" stopColor="#e8e8e8"></stop>
              <stop offset="100%" stopColor="#e8e8e8"></stop>
            </linearGradient>
          </defs>

          {/* Mask with the blob shape */}
          <mask id="blobmask-1">
            <rect width="100%" height="100%" fill="#fff"></rect>
            <circle id="blob" cx="0" cy="0" r="50" fill="#000"></circle>
          </mask>

          {/* Background rectangle */}
          <rect
            width="100%"
            height="100%"
            mask="url('#blobmask-1')"
            fill="url('#blobgradient-1')"
          ></rect>
        </svg>

        <img src={pagenine} alt="" />
      </div>
    </body>
  );
};

export default PageNine;
