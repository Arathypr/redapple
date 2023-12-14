// import React, { useRef, useEffect, useState } from "react";
// import HomepageImage from "../../assets/Homepageimage.png";

// const ZoomComponent = () => {
//   const zoomElementRef = useRef(null);
//   const [zoom, setZoom] = useState(0.2);
//   const ZOOM_SPEED = 0.01;

//   useEffect(() => {
//     const handleWheel = (e) => {
//       if (e.deltaY > 0 && zoom < 1) {
//         setZoom((prevZoom) => Math.min(prevZoom + ZOOM_SPEED, 1));
//       } else if (e.deltaY < 0) {
//         setZoom((prevZoom) => Math.max(prevZoom - ZOOM_SPEED, 0.2));
//       }
//     };

//     document.addEventListener("wheel", handleWheel);

//     return () => {
//       document.removeEventListener("wheel", handleWheel);
//     };
//   }, [zoom]);

//   const zoomStyle = {
//     transform: `scale(${zoom})`,
//   };

//   return (
//     <div
//       className="workspace h-[200vh]  "
//       ref={zoomElementRef}
//       style={zoomStyle}
//     >
//       <div>
//         <div className="fontForum font-normal lg:h-[110px] md:h-[90px] sm:h-[80px] lg:text-[75px] md:text-[70px] sm:text-[70px] ssm:text-[40px] vsm:text-[36px] vvsm:text-[30px]">
//           Your One-Stop Shop
//         </div>
//         <div className="fontForum font-normal lg:text-[75px] md:text-[70px] sm:text-[70px] ssm:text-[40px] vsm:text-[36px] vvsm:text-[30px]">
//           for Wholesale Fashion
//         </div>
//       </div>
//       <div>
//         <img src={HomepageImage} alt="" />
//       </div>
//     </div>
//   );
// };

// export default ZoomComponent;

// import React, { useRef, useEffect, useState } from "react";
// import HomepageImage from "../../assets/Homepageimage.png";

// const ZoomComponent = () => {
//   const zoomElementRef = useRef(null);
//   const [zoom, setZoom] = useState(0.2);
//   const [textPosition, setTextPosition] = useState(0);
//   const ZOOM_SPEED = 0.01;

//   useEffect(() => {
//     const handleWheel = (e) => {
//       if (e.deltaY > 0 && zoom < 1) {
//         setZoom((prevZoom) => Math.min(prevZoom + ZOOM_SPEED, 1));
//       } else if (e.deltaY < 0) {
//         setZoom((prevZoom) => Math.max(prevZoom - ZOOM_SPEED, 0.2));
//       }

//       // Update text position based on zoom and scroll
//       const updatedTextPosition = Math.min(0, textPosition + e.deltaY);
//       setTextPosition(updatedTextPosition);
//     };

//     document.addEventListener("wheel", handleWheel);

//     return () => {
//       document.removeEventListener("wheel", handleWheel);
//     };
//   }, [zoom, textPosition]);

//   const zoomStyle = {
//     transform: `scale(${zoom})`,
//   };

//   const textContainerStyle = {
//     position: "absolute",
//     top: `${textPosition}px`,
//     left: "50%", // Center horizontally
//     transform: "translateX(-50%)", // Center horizontally
//   };

//   return (
//     <div className="workspace h-[200vh] relative">
//       <div style={textContainerStyle}>
//         <div className="fontForum font-normal  lg:h-[110px] md:h-[90px] sm:h-[80px] lg:text-[75px] md:text-[70px] sm:text-[70px] ssm:text-[40px] vsm:text-[36px] vvsm:text-[30px]">
//           Your One-Stop Shop
//         </div>
//         <div className="fontForum font-normal  lg:text-[75px] md:text-[70px] sm:text-[70px] ssm:text-[40px] vsm:text-[36px] vvsm:text-[30px]">
//           for Wholesale Fashion
//         </div>
//       </div>
//       <div
//         ref={zoomElementRef}
//         style={{ ...zoomStyle, zIndex: 1 }}
//         className="h-[200vh]"
//       >
//         <img src={HomepageImage} alt="" />
//       </div>
//     </div>
//   );
// };

// export default ZoomComponent;

import React, { useRef, useEffect, useState } from "react";
import HomepageImage from "../../assets/Homepageimage.png";

const ZoomComponent = () => {
  const zoomElementRef = useRef(null);
  const textContainerRef = useRef(null);
  const [zoom, setZoom] = useState(0.2);
  const [textTop, setTextTop] = useState("50%");
  const ZOOM_SPEED = 0.01;

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 0 && zoom < 1) {
        setZoom((prevZoom) => Math.min(prevZoom + ZOOM_SPEED, 1));
      } else if (e.deltaY < 0) {
        setZoom((prevZoom) => Math.max(prevZoom - ZOOM_SPEED, 0.2));
      }
    };

    document.addEventListener("wheel", handleWheel);

    return () => {
      document.removeEventListener("wheel", handleWheel);                                   
    };                                                                
  }, [zoom]);

  const zoomStyle = {
    transform: `scale(${zoom})`,
  };

  return (
    <div className="workspace h-[200vh] relative">
      <div className="ml-[28%]">
        <div className="fontForum font-normal lg:h-[110px] md:h-[90px] sm:h-[80px] lg:text-[75px] md:text-[70px] sm:text-[70px] ssm:text-[40px] vsm:text-[36px] vvsm:text-[30px]">
          Your One-Stop Shop
        </div>
        <div className="fontForum font-normal lg:text-[75px] md:text-[70px] sm:text-[70px] ssm:text-[40px] vsm:text-[36px] vvsm:text-[30px]">
          for Wholesale Fashion
        </div>
      </div>                            


      <div
        ref={zoomElementRef}
        style={{ ...zoomStyle, zIndex: 1 }}
        className="h-[15z0vh]"
      >
        <img src={HomepageImage} alt="" />
      </div>
    </div>
  );
};

export default ZoomComponent;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      