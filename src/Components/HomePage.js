import React, { useEffect } from "react";
import Header from "./Header";
import AOS from "aos";
import "aos/dist/aos.css";
const HomePage = () => {
   
  return (
    <>
    <div className="section-home">
      <Header/>
      <div className=" text-white lg:w-2/4 h-screen-header float-right align-middle px-4 flex justify-center flex-col home-container" >
        <h1 className="text-6xl lg:text-8xl font-semibold pb-5 big-text-shadow fade-in-left">
          The Mahindra Thar
        </h1>
        <h2 className="text-4xl font-semibold pb-5 zoom-in">
          BORN OUT OF A DESERT STROM
        </h2>
        
        <button
          type="button"
          className="btn btn-gray btn-thar p-3 relative md:w-1/4 zoom-in"
        >Know More
        </button>
      </div>
    </div>
    </>
  );
};

export default HomePage;
