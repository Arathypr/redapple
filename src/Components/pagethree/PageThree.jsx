import React from "react";
import curser from "../../assets/cursorPagethree.png";

const PageThree = () => {
  return (
    <div
      className="flex justify-center  w-[100%] h-screen sm:flex-row vvsm:flex-col
    "
    >
      {/* first part */}
      <div className=" flex justify-center items-center relative z-10  sm:w-[40%] sm:h-screen border-t-2 sm:border-r-2 sm:border-b-0 vsm:h-[300px] vvsm:h-[230px] vvsm:border-b-2 ">
        <img
          src={curser}
          alt=""
          className="absolute z-20 lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] vsm:w-[250px] vsm:h-[250px] vvsm:w-[190px] vvsm:h-[190px]"
        />

        <div className="absolute z-30 ">
          <div className="font-Forum font-[400] vsm:text-[38px] vvsm:text-[30px]">
            Find a Guide in the{" "}
          </div>
          <div className="font-Forum font-[400] vsm:text-[38px] vvsm:text-[30px]">
            World of Style &
          </div>
          <div className="font-Forum font-[400] vsm:text-[38px] vvsm:text-[30px]">
            Modern Trends
          </div>
        </div>
      </div>

      {/* second part */}
      <div className=" sm:w-[15%]  sm:h-screen flex flex-col justify-center items-center  sm:border-t-2 sm:border-r-2 vvsm:border-b-2 sm:border-b-0">
        <div
          className=" flex justify-center items-center sm:-rotate-90 font-Forum font-normal
                        md:w-[500px] md:h-[80px] md:text-[60px]  sm:w-[400px] sm:h-[60px] sm:text-[50px] vvsm:w-[250px] vvsm:h-[65px] vvsm:text-[26px]"
        >
          Services We Offer
        </div>
      </div>

      {/* third part */}
      <div className="  overflow-auto  sm:w-[45%] sm:h-screen     flex flex-col items-center justify-around sm:border-t-2 ">
        <div className=" sm:w-[60%] vvsm:w-[80%] flex flex-col  justify-center">
          <div
            className="font-normal font-Forum  sm:text-[23px] vvsm:text-[20px]
                   "
          >
            Classy & Comfy Inners
          </div>
          <div className="Add-font  sm:text-[15px]  vvsm:text-[13px] mt-[10px]">
            Your inner beauty reflects the way you are. Your inner health is as
            important as your outlook. Never Compromise on it.
          </div>
        </div>
        <div className=" sm:w-[60%] vvsm:w-[80%] flex flex-col  justify-center ssm:mt-0 vvsm:mt-[10px]">
          <div
            className="font-normal font-Forum  sm:text-[23px] vvsm:text-[20px]
                   "
          >
            Classy & Comfy Inners
          </div>
          <div className="Add-font  sm:text-[15px]  vvsm:text-[13px] mt-[10px]">
            Your inner beauty reflects the way you are. Your inner health is as
            important as your outlook. Never Compromise on it.
          </div>
        </div>
        <div className=" sm:w-[60%] vvsm:w-[80%] flex flex-col  justify-center ssm:block vvsm:hidden">
          <div
            className="font-normal font-Forum  sm:text-[23px] vvsm:text-[20px]
                   "
          >
            Classy & Comfy Inners
          </div>
          <div className="Add-font  sm:text-[15px]  vvsm:text-[15px] mt-[10px]">
            Your inner beauty reflects the way you are. Your inner health is as
            important as your outlook. Never Compromise on it.
          </div>
        </div>

        <div className=" sm:w-[60%] vvsm:w-[80%] flex flex-col  justify-center sm:block vvsm:hidden">
          <div
            className="font-normal font-Forum  sm:text-[23px] vvsm:text-[20px]
                   "
          >
            Classy & Comfy Inners
          </div>
          <div className="Add-font  sm:text-[15px]  vvsm:text-[15px] mt-[10px]">
            Your inner beauty reflects the way you are. Your inner health is as
            important as your outlook. Never Compromise on it.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageThree;
