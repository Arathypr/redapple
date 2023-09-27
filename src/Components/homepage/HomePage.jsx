// import React, { useEffect, useState } from "react";
// import Homepageimage from "../../assets/Homepageimage.png";
// import greenround from "../../assets/greenround.png";
// import rotateimg from "../../assets/rotateimg.png";
// import arrow1 from "../../assets/arrow1.png";
// import "./Homepage.css";
// const HomePage = () => {
//   const [transformedText, setTransformedText] = useState([]);

//   useEffect(() => {
//     const originalText = "SCROLL DOWN SCROLL DOWN";
//     const transformed = originalText.split("").map((char, i) => (
//       <span key={i} style={{ transform: `rotate(${i * 13}deg)` }}>
//         {char}
//       </span>
//     ));

//     setTransformedText(transformed);
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
//         <div className="circle flex justify-center items-center absolute -bottom-[70px]  z-30 w-[150px] h-[150px]">
//           <div className="logo"></div>
//           <div className="text animate-spin-slow ">
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
import React, { useEffect, useState } from "react";
import Homepageimage from "../../assets/Homepageimage.png";
import "./Homepage.css"; // Import your CSS file

const HomePage = () => {
  const [transformedText, setTransformedText] = useState([]);
  const [textColorClass, setTextColorClass] = useState(""); // To control text color

  useEffect(() => {
    const originalText = "SCROLL DOWN SCROLL DOWN";
    const transformed = originalText.split("").map((char, i) => (
      <span key={i} style={{ transform: `rotate(${i * 13}deg)` }}>
        {char}
      </span>
    ));

    setTransformedText(transformed);
  }, []);

  useEffect(() => {
    // Add the "white" class when unmounting (going to the white background Page Two)
    return () => {
      setTextColorClass("white");
    };
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${Homepageimage})`,
    backgroundSize: "cover",
  };

  return (
    <>
      <div className="flex justify-center items-center w-[100%] h-screen ">
        <div style={backgroundImageStyle} className="w-[100%] h-screen"></div>
        <div className=" flex flex-col justify-center items-center absolute z-20 w-[100%] sm:h-[200px] vvsm:h-[150px]">
          <div className="fontForum font-normal text-[#ffff] lg:h-[110px] md:h-[90px] sm:h-[80px] lg:text-[95px] md:text-[70px] sm:text-[70px] ssm:text-[40px] vsm:text-[36px] vvsm:text-[30px]">
            Your One-Stop Shop
          </div>
          <div className="fontForum font-normal text-[#ffff] lg:text-[95px] md:text-[70px] sm:text-[70px] ssm:text-[40px] vsm:text-[36px] vvsm:text-[30px]">
            for Wholesale Fashion
          </div>
        </div>

        {/* Circular Text */}
        <div
          className={`circle flex justify-center items-center absolute -bottom-[70px]  z-30 w-[150px] h-[150px] ${textColorClass}`}
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
      </div>
    </>
  );
};

export default HomePage;
