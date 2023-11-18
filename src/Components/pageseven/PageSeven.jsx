import React from "react";
import star from "../../assets/../assets/star.svg";
import backgroundImage from "../../assets/PageSevenbgimg2.png";
import gif1 from "../../assets/gif1.png";
import glassgif1 from "../../assets/glassgif1.png";
import gif2 from "../../assets/gif2.png";
import glassgif2 from "../../assets/glassgif2.png";
import gif3 from "../../assets/gif3.png";
import glassgif3 from "../../assets/glassgif3.png";
import gif4 from "../../assets/gif4.png";
import glassgif4 from "../../assets/glassgif4.png";
import PageSevenButton from "../../assets/PageSevenButton.png";
import "./PageSeven.css";

const PageSeven = () => {
  return (
    <div
      className=" bg-cover w-[100%] h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className=" flex flex-col justify-center items-center w-[100%] h-screen ">
        <div className="font-Lora font- text-[#ffff] md:text-[40px] sm:text-[35px]  vsm:text-[30px] vvsm:text-[25px] ">
          What our Client Says
        </div>
        <div className="fontAdd text-[#ffff] lg:text-[16px] md:text-[15px] sm:text-[13px]  sm:block vvsm:hidden">
          This is the right place if you are in search for the best women
          outfits. Let’s redefine your styling system with
        </div>
        <div className="fontAdd text-[#ffff] lg:text-[16px] md:text-[15px] sm:text-[13px] sm:block vvsm:hidden">
          our huge store of trendy particulars. You can take online at us from
          the comfort of your home and get your
        </div>
        <div className="fontAdd text-[#ffff] lg:text-[16px] md:text-[15px] sm:text-[13px] sm:block vvsm:hidden">
          your favourites delivered right to your doorstep
        </div>

        {/* sm Paragraph */}

        <div className="fontAdd text-[#ffff] vsm:text-[15px] vvsm:text-[13px] sm:hidden">
          This is the right place if you are in search for the
        </div>
        <div className="fontAdd text-[#ffff] vsm:text-[15px] vvsm:text-[13px] sm:hidden">
          best women outfits. Let’s redefine your styling
        </div>
        <div className="fontAdd text-[#ffff] vsm:text-[15px] vvsm:text-[13px] sm:hidden">
          system with our huge store of trendy particulars.
        </div>

        {/* Secondpart */}

        <div className=" element-with-scroll   flex justify-evenly items-center  w-[90%] vsm:mt-[40px] vvsm:mt-[20px] scrollbar">
          <div className=" flex flex-col justify-center px-4 ml-96 lg:h-[360px]  md:h-[300px] sm:h-[300px]">
            <div className="relative   lg:w-[250px] lg:h-[310px] md:w-[230px]   sm:w-[200px] sm:h-[250px] vvsm:w-[260px] vvsm:h-[300px]">
              <img
                src={gif1}
                alt=""
                className="absolute z-10  lg:w-[280px] lg:h-[310px] md:w-[250px]  sm:w-[200px] sm:h-[260px] vvsm:w-[260px] vvsm:h-[300px] "
              />
              <img
                src={glassgif1}
                alt=""
                className="absolute z-20 -bottom-[10px] lg:w-[280px] lg:h-[125px] md:w-[230px] md:h-[115px] sm:w-[220px] sm:h-[110px] vsm:w-[260px] vsm:h-[110px] vvsm:h-[140px]"
              />
              <p className=" absolute z-30  fontAdd lg:text-[12px]  md:text-[11px] sm:text-[10px]  vsm:text-[12px] vvsm:text-[13px] bottom-0 px-[3px]">
                “I wanted a unique and personalized gift for my friend's
                wedding, and a custom-made tie seemed like the perfect idea. The
                tie turned out even better than I imagined, with beautiful
                craftsmanship and attention to detail.”
              </p>
            </div>
            <div className="flex justify-start items-center gap-2 text-[#ffff] fontAdd lg:text-[15px]  md:text-[14px]  sm:text-[13px] vvsm:text-[15px] mt-4">
              Neenu Maria
              <img
                src={star}
                alt=""
                className="md:w-[80px] md:h-[20px] sm:w-[70px] "
              />
            </div>
          </div>

          <div className=" flex flex-col justify-center px-4  lg:h-[360px]  md:h-[300px] sm:h-[300px] sm:block vvsm:hidden mt-3">
            <div className="relative   lg:w-[250px] lg:h-[310px] md:w-[230px]   sm:w-[200px] sm:h-[250px] vvsm:w-[260px] vvsm:h-[300px]">
              <img
                src={gif2}
                alt=""
                className="absolute z-10  lg:w-[280px] lg:h-[310px] md:w-[250px]  sm:w-[200px] sm:h-[260px] vvsm:w-[260px] vvsm:h-[300px] "
              />
              <img
                src={glassgif2}
                alt=""
                className="absolute z-20 -bottom-[10px] lg:w-[280px] lg:h-[125px] md:w-[230px] md:h-[115px] sm:w-[220px] sm:h-[110px] vsm:w-[260px] vsm:h-[110px]"
              />
              <p className=" absolute z-30  fontAdd lg:text-[12px]  md:text-[11px] sm:text-[10px]  vsm:text-[12px] bottom-0 px-[3px]">
                “I wanted a unique and personalized gift for my friend's
                wedding, and a custom-made tie seemed like the perfect idea. The
                tie turned out even better than I imagined, with beautiful
                craftsmanship and attention to detail.”
              </p>
            </div>
            <div className="flex justify-start items-center gap-2 text-[#ffff] fontAdd lg:text-[15px]  md:text-[14px]  sm:text-[13px] vvsm:text-[15px] mt-4">
              Neenu Maria
              <img
                src={star}
                alt=""
                className="md:w-[80px] md:h-[20px] sm:w-[70px] "
              />
            </div>
          </div>

          <div className=" flex flex-col justify-center px-4  lg:h-[360px]  md:h-[300px] sm:h-[300px] sm:block vvsm:hidden mt-3">
            <div className="relative   lg:w-[250px] lg:h-[310px] md:w-[230px]   sm:w-[200px] sm:h-[250px] vvsm:w-[260px] vvsm:h-[300px]">
              <img
                src={gif3}
                alt=""
                className="absolute z-10  lg:w-[280px] lg:h-[310px] md:w-[250px]  sm:w-[200px] sm:h-[260px] vvsm:w-[260px] vvsm:h-[300px] "
              />
              <img
                src={glassgif3}
                alt=""
                className="absolute z-20 -bottom-[10px] lg:w-[280px] lg:h-[125px] md:w-[230px] md:h-[115px] sm:w-[220px] sm:h-[110px] vsm:w-[260px] vsm:h-[110px]"
              />
              <p className=" absolute z-30  fontAdd lg:text-[12px]  md:text-[11px] sm:text-[10px]  vsm:text-[12px] bottom-0 px-[3px]">
                “I wanted a unique and personalized gift for my friend's
                wedding, and a custom-made tie seemed like the perfect idea. The
                tie turned out even better than I imagined, with beautiful
                craftsmanship and attention to detail.”
              </p>
            </div>
            <div className="flex justify-start items-center gap-2 text-[#ffff] fontAdd lg:text-[15px]  md:text-[14px]  sm:text-[13px] vvsm:text-[15px] mt-4">
              Neenu Maria
              <img
                src={star}
                alt=""
                className="md:w-[80px] md:h-[20px] sm:w-[70px] "
              />
            </div>
          </div>

          <div className=" flex flex-col justify-center px-4  lg:h-[360px]  md:h-[300px] sm:h-[300px] lg:block vvsm:hidden">
            <div className="relative   lg:w-[250px] lg:h-[310px] md:w-[230px]   sm:w-[200px] sm:h-[250px] vvsm:w-[260px] vvsm:h-[300px] mt-[5px]">
              <img
                src={gif4}
                alt=""
                className="absolute z-10  lg:w-[280px] lg:h-[310px] md:w-[250px]  sm:w-[200px] sm:h-[260px] vvsm:w-[260px] vvsm:h-[300px] "
              />
              <img
                src={glassgif4}
                alt=""
                className="absolute z-20 -bottom-[10px] lg:w-[280px] lg:h-[125px] md:w-[230px] md:h-[115px] sm:w-[220px] sm:h-[110px] vsm:w-[260px] vsm:h-[110px]"
              />
              <p className=" absolute z-30  fontAdd lg:text-[12px]  md:text-[11px] sm:text-[10px]  vsm:text-[12px] bottom-0 px-[3px]">
                “I wanted a unique and personalized gift for my friend's
                wedding, and a custom-made tie seemed like the perfect idea. The
                tie turned out even better than I imagined, with beautiful
                craftsmanship and attention to detail.”
              </p>
            </div>
            <div className="flex justify-start items-center gap-2 text-[#ffff] fontAdd lg:text-[15px]  md:text-[14px]  sm:text-[13px] vvsm:text-[15px] mt-4">
              Neenu Maria
              <img
                src={star}
                alt=""
                className="md:w-[80px] md:h-[20px] sm:w-[70px] "
              />
            </div>
          </div>
          <div className=" flex flex-col justify-center px-4  lg:h-[360px]  md:h-[300px] sm:h-[300px]">
            <div className="relative   lg:w-[250px] lg:h-[310px] md:w-[230px]   sm:w-[200px] sm:h-[250px] vvsm:w-[260px] vvsm:h-[300px]">
              <img 
                src={gif1}
                alt=""
                className="absolute z-10  lg:w-[280px] lg:h-[310px] md:w-[250px]  sm:w-[200px] sm:h-[260px] vvsm:w-[260px] vvsm:h-[300px] "
              />
              <img
                src={glassgif1}
                alt=""
                className="absolute z-20 -bottom-[10px] lg:w-[280px] lg:h-[125px] md:w-[230px] md:h-[115px] sm:w-[220px] sm:h-[110px] vsm:w-[260px] vsm:h-[110px] vvsm:h-[140px]"
              />
              <p className=" absolute z-30  fontAdd lg:text-[12px]  md:text-[11px] sm:text-[10px]  vsm:text-[12px] vvsm:text-[13px] bottom-0 px-[3px]">
                “I wanted a unique and personalized gift for my friend's
                wedding, and a custom-made tie seemed like the perfect idea. The
                tie turned out even better than I imagined, with beautiful
                craftsmanship and attention to detail.”
              </p>
            </div>
            <div className="flex justify-start items-center gap-2 text-[#ffff] fontAdd lg:text-[15px]  md:text-[14px]  sm:text-[13px] vvsm:text-[15px] mt-4">
              Neenu Maria
              <img
                src={star}
                alt=""
                className="md:w-[80px] md:h-[20px] sm:w-[70px] "
              />
            </div>
          </div>
          <div className=" flex flex-col justify-center px-4  lg:h-[360px]  md:h-[300px] sm:h-[300px] sm:block vvsm:hidden mt-3">
            <div className="relative   lg:w-[250px] lg:h-[310px] md:w-[230px]   sm:w-[200px] sm:h-[250px] vvsm:w-[260px] vvsm:h-[300px]">
              <img
                src={gif2}
                alt=""
                className="absolute z-10  lg:w-[280px] lg:h-[310px] md:w-[250px]  sm:w-[200px] sm:h-[260px] vvsm:w-[260px] vvsm:h-[300px] "
              />
              <img
                src={glassgif2}
                alt=""
                className="absolute z-20 -bottom-[10px] lg:w-[280px] lg:h-[125px] md:w-[230px] md:h-[115px] sm:w-[220px] sm:h-[110px] vsm:w-[260px] vsm:h-[110px]"
              />
              <p className=" absolute z-30  fontAdd lg:text-[12px]  md:text-[11px] sm:text-[10px]  vsm:text-[12px] bottom-0 px-[3px]">
                “I wanted a unique and personalized gift for my friend's
                wedding, and a custom-made tie seemed like the perfect idea. The
                tie turned out even better than I imagined, with beautiful
                craftsmanship and attention to detail.”
              </p>
            </div>
            <div className="flex justify-start items-center gap-2 text-[#ffff] fontAdd lg:text-[15px]  md:text-[14px]  sm:text-[13px] vvsm:text-[15px] mt-4">
              Neenu Maria
              <img
                src={star}
                alt=""
                className="md:w-[80px] md:h-[20px] sm:w-[70px] "
              />
            </div>
          </div>
        </div>

        <div className=" flex justify-center vsm:mt-[40px] vvsm:mt-[20px]">
          <img
            src={PageSevenButton}
            alt=""
            className="md:w-[200px md:h-[40px]  vvsm:w-[150px] vvsm:h-[40px]"
          />
        </div>
      </div>
    </div>
  );
};
export default PageSeven;
