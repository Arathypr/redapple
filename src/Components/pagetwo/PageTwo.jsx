import React from "react";
import "./PageTwo.css";
import redapplepagetwo from "../../assets/SecondPageRedapple.png";
import secondPageButton from "../../assets/SecondPageButton.png";

const PageTwo = () => {
  return (
    <div className=" landscape flex flex-col justify-center items-center  h-[100vh] gap-[10px] ">
      {/* upper division */}
      <div className=" flex flex-col justify-center items-center  sm:w-[100%] vvsm:w-[90%]  vvsm:mt-[40px]     ">
        <p className="  font-Forum font-normal  lg:text-[50px] md:text-[45px]  ssm:text-[35px] vsm:text-[30px]  ">
          We are here for you
        </p>

        {/* paragraph */}

        <div className=" flex flex-col justify-center items-center  w-[100%] sm:h-[120px] sm:mt-0   ">
          <div className="fontAdd      lg:text-[16px] md:text-[15px] sm:text-[13px]  ssm:text-[13px] vsm:text-[13px] vvsm:text-[11px] ">
            We are one of the unique apparel industries in India where trend is
            handy to all. Explore our daily arrivals{" "}
          </div>
          <div className="fontAdd      lg:text-[16px] md:text-[15px] sm:text-[13px]  ssm:text-[13px] vsm:text-[13px] vvsm:text-[11px] ">
            to view the modish designer clothing, footwear and accessories in
            the market. Red Apple Apparels
          </div>
          <div className="fontAdd      lg:text-[16px] md:text-[15px] sm:text-[13px]  ssm:text-[13px] vsm:text-[13px] vvsm:text-[11px] ">
            essentially targeted at the domestic and international brands, we
            are primarily manufacturers of all
          </div>
          <div className="fontAdd      lg:text-[16px] md:text-[15px] sm:text-[13px]  ssm:text-[13px] vsm:text-[13px] vvsm:text-[11px] ">
            categories of casual and formal apparels.
          </div>
        </div>
      </div>

      {/* Lowerdivision */}

      <div className=" flex  sm:flex-row justify-center items-center vvsm:flex-col  sm:gap-[10%] w-[100%]  vsm:gap-[10px]  ">
        <img
          src={redapplepagetwo}
          alt=""
          className=" md:w-[300px] md:h-[350px] ssm:w-[200px] ssm:h-[240px] vsm:w-[200px] vsm:h-[220px] vvsm:w-[150px] vvsm:h-[170px]"
        />

        <div className="    flex flex-col justify-center items-start sm:w-[40%]  vvsm:w-[90%]">
          <div className="   font-Forum font-normal lg:text-[80px] md:text-[70px]  ssm:text-[45px] vsm:text-[35px] vvsm:text-[25px]">
            About Us
          </div>
          <p className=" fontAdd font-400 md:text-[16px] vsm:text-[13px] vvsm:text-[11px] ">
            Our products come with the highest quality standards, which is the
            most important aspects all our customer expect from us. Our creative
            designs and to multinational conglomerates. We have creativity and
            technology that will help you attain your desired results.
          </p>

          <div>
            <img
              src={secondPageButton}
              alt=""
              className="sm:w-[60%]  sm:mt-[20px] hidden sm:block "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
