import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Explore = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="explore-section relative text-white">
        <div className="sm:p-5 lg:p-14">
          <div className="left-strip absolute bottom-0 left-0">
            <img src="./images/left-strip.png" />
          </div>

          <div className="p-8 z-20">
            <div
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in"
              data-aos-duration="600"
            >
              <h2 className="text-2lg section-header relative px-5 mb-12">
                EXPLORE THAR
              </h2>
            </div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-3">
              <div>
                <div
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-easing="ease-in"
                  data-aos-duration="600"
                >
                  <h1 className="text-4xl font-semibold mb-2">
                    Here is where the impossible
                  </h1>
                  <h1 className="text-4xl font-semibold mb-3">begins</h1>
                </div>
                <p className="mb-5">
                  An enduring icon that just keeps on giving, The All-New Thar
                  comes equipped with the iconic design and all new interiors to
                  help you Explore The Impossible
                </p>
                <button
                  type="button"
                  className="btn btn-gray btn-thar btn-transparent border-white p-3 my-5 relative md:w-1/4 "
                >
                  Know More
                </button>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in"
                data-aos-duration="600"
              >
                <div className="py-5 h-80 md:h-96">
                  <img src="./images/explorethar.png" className="h-100px" />
                </div>
              </div>
            </div>
          </div>
          <div className="left-strip absolute top-0 right-0">
            <img src="./images/right-strip.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
