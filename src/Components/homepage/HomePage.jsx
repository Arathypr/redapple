import React from "react";
import Homepageimage from "../../assets/Homepageimage.png";
import greenround from "../../assets/greenround.png";
import rotateimg from "../../assets/rotateimg.png";
import arrow1 from "../../assets/arrow1.png";

const HomePage = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${Homepageimage})`,
    backgroundSize: "cover",
  };
  return (
    <>
      <div className="flex  justify-center items-center w-[100%] h-screen ">
        <div style={backgroundImageStyle} className="w-[100%] h-screen"></div>
        <div className=" flex flex-col justify-center items-center  absolute z-20   w-[100%] sm:h-[200px] vvsm:h-[150px]">
          <div className=" fontForum font-normal text-[#ffff] lg:h-[110px] md:h-[90px] sm:h-[80px]  lg:text-[95px] md:text-[70px] sm:text-[70px] ssm:text-[40px] vsm:text-[36px] vvsm:text-[30px]">
            Your One-Stop Shop
          </div>
          <div className="fontForum font-normal text-[#ffff]   lg:text-[95px] md:text-[70px] sm:text-[70px] ssm:text-[40px] vsm:text-[36px] vvsm:text-[30px]">
            for Wholesale Fashion
          </div>
        </div>

        {/* Logo */}
        <div className=" flex justify-center items-center absolute -bottom-[75px]  z-30 w-[150px] h-[150px]">
          <img src={greenround} alt="" className="w-[100px] h-[100px]" />
          <img src={arrow1} alt="" className="absolute w-[40px] h-[40px]" />
          <img
            src={rotateimg}
            alt=""
            className="animate-spin-slow absolute w-[125px] h-[130px]"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
