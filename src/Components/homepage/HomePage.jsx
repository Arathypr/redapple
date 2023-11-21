import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import redapple from "../../assets/redapple.mp4";
import "./HomePage.css";

const Homepage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();
  const [transformedText, setTransformedText] = useState([]);
  const [textColorClass, setTextColorClass] = useState("");
  const [textPosition, setTextPosition] = useState(0);

  useEffect(() => {
    const originalText = "SCROLL DOWN • SCROLL DOWN •";
    const transformed = originalText.split("").map((char, i) => (
      <span key={i} style={{ transform: `rotate(${i * 11}deg)` }}>
        {char}
      </span>
    ));

    setTransformedText(transformed);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Calculate the new position for the text based on scroll position
      let newPosition = (scrollPosition / window.innerHeight) * 100;

      // Limit the text position to a maximum of 50vh (middle of the screen)
      newPosition = Math.min(newPosition, 30);

      // Update the text position
      setTextPosition(newPosition);
    };

    const video = document.getElementById("video");
    let lastScrollPosition = window.scrollY;

    const handleVideoScroll = () => {
      const videoLength = video.duration;
      const scrollPosition = window.scrollY;

      if (scrollPosition > lastScrollPosition) {
        // Scrolling down
        if (!isPlaying) {
          setIsPlaying(true);
          video.play();
        }
      } else {
        // Scrolling up
        if (isPlaying) {
          setIsPlaying(false);
          video.pause();
        }
      }

      lastScrollPosition = scrollPosition;

      // Check if the user has scrolled past a certain point
      if (scrollPosition > window.innerHeight) {
        setIsPlaying(false);
        video.pause();

        // Navigate to the next page
        navigate("/next-page");
      }
    };

    const handlePause = () => {
      setIsPlaying(false);
      video.pause();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleVideoScroll);
    window.addEventListener("scroll", handlePause);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleVideoScroll);
      window.removeEventListener("scroll", handlePause);
    };
  }, [isPlaying, navigate]);

  return (
    <>
      <div className="sticky h-[960vh] top-0">
        <div className="overflow-hidden">
          <div
            className={`flex flex-col justify-center items-center absolute z-20 w-[100%] sm:h-[200px] vvsm:h-[150px]`}
            style={{ transform: `translateY(${textPosition}vh)` }}
          >
            <div className="fontForum font-normal text-black lg:h-[110px] md:h-[90px] sm:h-[80px] lg:text-[75px] md:text-[70px] sm:text-[70px] ssm:text-[40px] vsm:text-[36px] vvsm:text-[30px]">
              Your One-Stop Shop
            </div>
            <div className="fontForum font-normal text-black lg:text-[75px] md:text-[70px] sm:text-[70px] ssm:text-[40px] vsm:text-[36px] vvsm:text-[30px]">
              for Wholesale Fashion
            </div>
          </div>

          <div className="videocontainer h-[100vh] w-[102%] ml-0  ">
            <video id="video" src={redapple} loop muted></video>
          </div>
        </div>
      </div>

      <div
        className={`circle flex justify-center items-center sticky left-[46%]  w-[150px] h-[150px]     ${textColorClass}`}
      >
        <div className="logo"></div>
        <div className="text animate-spin-slow ">
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
