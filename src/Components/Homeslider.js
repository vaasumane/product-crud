import React from "react";
import { Carousel } from "flowbite-react";
const Homeslider = ({ sliderArr }) => {
  console.log(sliderArr);
  return (
    <>
      <div className="p-5">
        <Carousel  indicators={false}>
        {sliderArr?.length > 0 &&
            sliderArr.map((slider,index) => (
              <div  key={index} className="relative">
                <h1 className="text-4xl py-3">{slider?.title} </h1>
                <img src={slider?.image} alt={slider?.title}  className="w-full h-full "/>
                <p className="py-3 text-white">{slider?.description}</p>
              </div>
            ))}
        </Carousel>
      </div>
    </>
  );
};

export default Homeslider;
