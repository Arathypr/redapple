import React from "react";
import Landingpage from "../../assets/Homepageimage.png";

const YourSvgComponent = () => {
  return (
    <div>
      <svg
        width="300"
        height="280"
        preserveAspectRatio="xMidYMid meet"
        x="0"
        y="0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id="shape">
            <path d="M0 0h2000v3500H0z" fill="#d8d8d8" />
          </mask>
        </defs>
        <image
          mask="url(#shape)"
          preserveAspectRatio="xMidYMid meet"
          x="0"
          y="0"
          href={Landingpage}
        />
      </svg>
    </div>
  );
};

export default YourSvgComponent;
// import React from "react";
// import "./Homepage.css";
// import Landingpage from "../../assets/Homepageimage.png";

// const YourSvgComponent = () => {
//   return (
//     <div className="svg-container">
//       <img src={Landingpage} alt="Background" className="background-image" />
//       <svg
//         width="100%"
//         height="100%"
//         preserveAspectRatio="xMidYMid meet"
//         xmlns="http://www.w3.org/2000/svg"
//         className="svg-mask"
//       >
//         <defs>
//           <mask id="shape">
//             <path d="M0 0h2000v3500H0z" fill="#d8d8d8" />
//           </mask>
//         </defs>
//         <image
//           mask="url(#shape)"
//           preserveAspectRatio="xMidYMid meet"
//           x="0"
//           y="0"
//           href={Landingpage}
//           width="100%"
//           height="100%"
//         />
//       </svg>
//     </div>
//   );
// };

// export default YourSvgComponent;
