import React from "react";
import "./PageNine.css";
import pagenine from "../../assets/PageNine.png";
import shape from "../../assets/shape.png";
import launchingsoon from "../../assets/launchingsoon.png";

const PageNine = () => {
  return (
    <div className="h-screen  ">
      <img src={pagenine} className="h-screen  w-screen " alt="" />
      <img src={launchingsoon} className="h-screen  w-screen  " alt="" />
    </div>
  );
};

export default PageNine;
