import React from "react";
import msa from "../../assets/msa.svg";
import gelei from "../../assets/gelei.svg";
import iza from "../../assets/iza.svg";

import msaimg from "../../assets/msa.png";
import geleiimg from "../../assets/gelei.png";
import izaimg from "../../assets/iza.png";

const PageSix = () => {
  return (
    <>
      <div className="sm:block vvsm:hidden">
        <div className="flex  justify-evenly items-center w-[100%] sm:h-[130px]  bg-[#D9D9D9] ">
          <img src={msa} className="sm:h-[70px] sm:w-[120px] " />
          <img src={gelei} lassName="sm:h-[70px] sm:w-[120px] " />
          <img src={iza} lassName="sm:h-[70px] sm:w-[120px] " />
          <img src={msa} className="sm:h-[70px] sm:w-[120px] " />
          <img src={gelei} lassName="sm:h-[70px] sm:w-[120px] " />
        </div>
      </div>

      <div className="sm:hidden">
        <div className="flex  justify-evenly items-center w-[100%] vvsm:h-[100px]  bg-[#D9D9D9] ">
          <img src={izaimg} alt="" className="vvsm:w-[50px] vvsm:h-[50px]" />
          <img src={msaimg} alt="" className="vvsm:w-[70px] vvsm:h-[50px]" />
          <img src={geleiimg} alt="" className="vvsm:w-[70px] vvsm:h-[55px]" />
        </div>
      </div>
    </>
  );
};

export default PageSix;
