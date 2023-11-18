// import React, { useEffect, useState } from "react";
// import Homepageimage from "../../assets/Homepageimage.png";
// import "./Homepage.css";

// const HomePage = () => {
//   const [transformedText, setTransformedText] = useState([]);
//   const [textColorClass, setTextColorClass] = useState(""); // To control text color

//   useEffect(() => {
//     const originalText = "SCROLL DOWN • SCROLL DOWN •";
//     const transformed = originalText.split("").map((char, i) => (
//       <span key={i} style={{ transform: `rotate(${i * 11}deg)` }}>
//         {char}
//       </span>
//     ));

//     setTransformedText(transformed);
//   }, []);

//   useEffect(() => {
//     return () => {
//       setTextColorClass("white");
//     };
//   }, []);

//   const backgroundImageStyle = {
//     backgroundImage: `url(${Homepageimage})`,
//     backgroundSize: "cover",
//   };

//   return (
//     <>
//       <div className="flex justify-center items-center w-[100%] h-screen ">
//         <div style={backgroundImageStyle} className="w-[100%] h-screen"></div>
//         <div className=" flex flex-col justify-center items-center absolute z-20 w-[100%] sm:h-[200px] vvsm:h-[150px]">
//           <div className="fontForum font-normal text-[#ffff] lg:h-[110px] md:h-[90px] sm:h-[80px] lg:text-[95px] md:text-[70px] sm:text-[70px] ssm:text-[40px] vsm:text-[36px] vvsm:text-[30px]">
//             Your One-Stop Shop
//           </div>
//           <div className="fontForum font-normal text-[#ffff] lg:text-[95px] md:text-[70px] sm:text-[70px] ssm:text-[40px] vsm:text-[36px] vvsm:text-[30px]">
//             for Wholesale Fashion
//           </div>
//         </div>

//         {/* Circular Text */}
//         <div
//           className={`circle flex justify-center items-center absolute -bottom-[70px]  z-30 w-[150px] h-[150px] ${textColorClass}`}
//         >
//           <div className="logo"></div>
//           <div className="text animate-spin-slow">
//             {transformedText.map((char, i) => (
//               <span key={i} style={{ transform: `rotate(${i * 2}deg)` }}>
//                 {char}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePage;
// import React, { useRef } from "react";
// import Landingpage from "../../assets/Homepageimage.png";
// import { useScroll, useTransform, motion } from "framer-motion";
// import "./HomePage.css";
// import YourSvgComponent from "./SvgFile"; // Adjust the path accordingly

// const App = () => {
//   const targetRef = useRef();
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ["start start", "end start"],
//   });

//   const scale1 = useTransform(scrollYProgress, [0, 0.3], [0, 3]);
//   const translateY = useTransform(scrollYProgress, [0, 0.3], [0, 600]);

//   return (
//     <div
//       className="w-full bg-black"
//       style={{ height: "200vh", position: "relative" }}
//     >
//       <div
//         className="w-full h-full flex items-end justify-center overflow-hidden"
//         ref={targetRef}
//         style={{ transform: `translateY(${translateY.get()}px)` }}
//       >
//         <motion.div
//           style={{ scale: scale1 }}
//           className="ablauf-bg-ball  sticky top-0"
//         >
//           <svg
//             width="300"
//             height="280"
//             preserveAspectRatio="xMidYMid meet"
//             x="0"
//             y="0"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <defs>
//               <mask id="shape">
//                 <path d="M0 0h2000v3500H0z" fill="#d8d8d8" />
//               </mask>
//             </defs>
//             <image
//               mask="url(#shape)"
//               preserveAspectRatio="xMidYMid meet"
//               x="0"
//               y="0"
//               href={Landingpage}
//             />
//           </svg>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { useRef } from "react";
// import "./HomePage.css";
// import Landingpage from "../../assets/Homepageimage.png";
// import rectangle from "../../assets/rectangle.svg"
// const HomePage = () => {
//   return (

//   );
// };
// export default HomePage;
// import React, { useRef, useEffect } from "react";
// import video from "../../assets/redapple.mp4";

// const HomePage = () => {
//   const videoRef = useRef(null);
//   const setHeightRef = useRef(null);
//   const timeRef = useRef(null);

//   useEffect(() => {
//     const setHeight = setHeightRef.current;
//     const video = videoRef.current;
//     const time = timeRef.current;

//     // Dynamically set the page height according to video length
//     if (video) {
//       setHeight.style.height = Math.floor(video.duration) * 500 + "px";
//     }

//     // Update the time element
//     const updateTime = () => {
//       if (video) {
//         time.textContent = `Current Time: ${video.currentTime.toFixed(2)}s`;
//       }
//     };

//     video.addEventListener("timeupdate", updateTime);

//     return () => {
//       video.removeEventListener("timeupdate", updateTime);
//     };
//   }, []);

//   return (
//     <div>
//       <div ref={setHeightRef} id="set-height"></div>
//       <p ref={timeRef} id="time"></p>
//       <video
//         id="v0"
//         tabIndex="0"
//         autoBuffer="autoBuffer"
//         preload="preload"
//         ref={videoRef}
//       >
//         <source type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' src={video} />
//       </video>
//     </div>
//   );
// };

// export default HomePage;
// import React, { useRef, useEffect } from "react";
// import video from "../../assets/redapple.mp4";

// const HomePage = () => {
//   const videoRef = useRef(null);
//   const setHeightRef = useRef(null);
//   const timeRef = useRef(null);

//   useEffect(() => {
//     const setHeight = setHeightRef.current;
//     const video = videoRef.current;
//     const time = timeRef.current;

//     // Dynamically set the page height according to video length
//     const setHeightFromVideo = () => {
//       if (video) {
//         setHeight.style.height = Math.floor(video.duration) * 500 + "px";
//       }
//     };

//     video.addEventListener("loadedmetadata", setHeightFromVideo);

//     // Use requestAnimationFrame for smooth playback
//     const scrollPlay = () => {
//       if (video) {
//         const frameNumber = window.pageYOffset / 500;
//         video.currentTime = frameNumber;
//         window.requestAnimationFrame(scrollPlay);
//       }
//     };

//     window.requestAnimationFrame(scrollPlay);

//     return () => {
//       video.removeEventListener("loadedmetadata", setHeightFromVideo);
//     };
//   }, []);

//   return (
//     <div>
//       <div ref={setHeightRef} id="set-height"></div>
//       <p ref={timeRef} id="time"></p>
//       <video
//         id="v0"
//         tabIndex="0"
//         autoBuffer="autoBuffer"
//         preload="preload"
//         ref={videoRef}
//       >
//         <source type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' src={video} />
//       </video>
//     </div>
//   );
// };

// export default HomePage;
// import React, { useState, useEffect } from "react";
// import redapple from "../../assets/redapple.mp4";
// import "./HomePage.css"; // Import your stylesheet if needed

// const Homepage = () => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//     const video = document.getElementById("video");

//     const handleScroll = () => {
//       const videoLength = video.duration;
//       const scrollPosition = window.scrollY;

//       if (isPlaying) {
//         video.currentTime =
//           (scrollPosition /
//             (document.documentElement.scrollHeight - window.innerHeight)) *
//           videoLength;
//       }
//     };

//     const handlePlay = () => {
//       setIsPlaying(true);
//       video.play();
//     };

//     const handlePause = () => {
//       setIsPlaying(false);
//       video.pause();
//     };

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("scroll", handlePlay);
//     window.addEventListener("scroll", handlePause);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("scroll", handlePlay);
//       window.removeEventListener("scroll", handlePause);
//     };
//   }, [isPlaying]);

//   return (
//     <div className="videocontainer h-[150vh] w-[100%]  ">
//       <video id="video" src={redapple} autoPlay loop muted></video>
//     </div>
//   );
// };

// export default Homepage;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import redapple from "../../assets/redapple.mp4";
import "./HomePage.css"; // Import your stylesheet if needed

const Homepage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of history
  const [transformedText, setTransformedText] = useState([]);
  const [textColorClass, setTextColorClass] = useState(""); // To control text color

  useEffect(() => {
    const originalText = "SCROLL DOWN • SCROLL DOWN •";
    const transformed = originalText.split("").map((char, i) => (
      <span key={i} style={{ transform: `rotate(${i * 11}deg)` }}>
        {char}
      </span>
    ));

    setTransformedText(transformed);
  }, []);

  useEffect(() => {
    return () => {
      setTextColorClass("white");
    };
  }, []);

  useEffect(() => {
    const video = document.getElementById("video");

    const handleScroll = () => {
      const videoLength = video.duration;
      const scrollPosition = window.scrollY;

      if (isPlaying) {
        video.currentTime =
          (scrollPosition /
            (document.documentElement.scrollHeight - window.innerHeight)) *
          videoLength;

        // Check if the user has scrolled past a certain point
        if (scrollPosition > window.innerHeight) {
          setIsPlaying(false);
          video.pause();

          // Navigate to the next page
          navigate("/next-page"); // Use navigate instead of history.push
        }
      }
    };

    const handlePlay = () => {
      setIsPlaying(true);
      video.play();
    };

    const handlePause = () => {
      setIsPlaying(false);
      video.pause();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handlePlay);
    window.addEventListener("scroll", handlePause);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handlePlay);
      window.removeEventListener("scroll", handlePause);
    };
  }, [isPlaying, navigate]);

  return (
    <>
      <div className="overflow-hidden">
        <div className="videocontainer h-[150vh] w-[101%] ml-0  ">
          <video id="video" src={redapple} autoPlay loop muted></video>
        </div>
      </div>
      <div
        className={`circle flex justify-center items-center absolute -bottom-[50%] left-[46%] z-30 w-[150px] h-[150px] ${textColorClass}`}
      >
        <div className="logo"></div>
        <div className="text animate-spin-slow">
          {transformedText.map((char, i) => (
            <span key={i} style={{ transform: `rotate(${i * 2}deg)` }}>
              {char}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
