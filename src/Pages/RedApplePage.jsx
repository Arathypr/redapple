import React from "react";
import HomePage from "../Components/homepage/HomePage";
import PageTwo from "../Components/pagetwo/PageTwo";
import PageThree from "../Components/pagethree/PageThree";
import PageFour from "../Components/pagefour/PageFour";
import PageFive from "../Components/pagefive/PageFive";
import PageSix from "../Components/pagesix/PageSix";
import PageSeven from "../Components/pageseven/PageSeven";
import PageEight from "../Components/pageeight/PageEight";
import PageNine from "../Components/pagenine/PageNine";
import PageTen from "../Components/pageten/PageTen";
import PageEleven from "../Components/pageevelen/PageEleven";

import OrientationMessage from "../Components/OrientateionMessage/OrientationMessage";

const RedApplePage = () => {
  return (
    <>
      <OrientationMessage />

      <HomePage />

      <div className="-mt-72">
        {" "}
        <PageTwo />
      </div>

      <PageThree />
      <PageFour />
      <PageFive />
      <PageSix />
      <PageSeven />
      <PageEight />
      <PageNine />
      <PageEleven />
      <PageTen />
    </>
  );
};

export default RedApplePage;
