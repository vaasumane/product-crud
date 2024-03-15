import { useState } from "react";
import {
  design_feature_arr,
  performance_feature_arr,
  confort_feature_arr,
  technology_feature_arr,
  safety_feature_arr,
} from "./Content";
import "aos/dist/aos.css";
import Homeslider from "./Homeslider";
const Features = () => {
  const [FeatureArr, setFeatureArr] = useState([]);
  const handleClick = (feature_val) => {
    setFeatureArr(feature_val);
  };

  return (
    <>
      <div className="bg-black relative text-white">
        <div className="sm:p-5 lg:px-14 ">
          {/* <div className="grid lg:grid-flow-col gap-8 px-9"> */}
          <div className="lg:flex justify-center">
            <div className="p-5 lg:w-1/2">
              <div className=" z-20">
                <div>
                  <h2 className="text-2lg section-header relative px-5 mb-12">
                    FEATURES & SPECIFICATIONS
                  </h2>
                </div>
              </div>
              <div className="py-2 border-solid border-b border-gray">
                <h2>
                  <button
                    id="faqs-title-01"
                    type="button"
                    className="flex items-center justify-between w-full text-left font-semibold py-2"
                    aria-controls="faqs-text-01"
                    onClick={() => handleClick(design_feature_arr)}
                  >
                    <span>Design</span>
                    <svg
                      className="fill-white shrink-0 ml-8"
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className="transform origin-center transition duration-200 ease-out"
                      />
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className="transform origin-center rotate-90 transition duration-200 ease-out"
                      />
                    </svg>
                  </button>
                </h2>
              </div>
              <div className="py-2 border-solid border-b border-gray">
                <h2>
                  <button
                    id="faqs-title-01"
                    type="button"
                    className="flex items-center justify-between w-full text-left font-semibold py-2"
                    aria-controls="faqs-text-01"
                    onClick={() => handleClick(performance_feature_arr)}
                  >
                    <span>Performance And Capability</span>
                    <svg
                      className="fill-white shrink-0 ml-8"
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className="transform origin-center transition duration-200 ease-out"
                      />
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className="transform origin-center rotate-90 transition duration-200 ease-out"
                      />
                    </svg>
                  </button>
                </h2>
              </div>
              <div className="py-2 border-solid border-b border-gray">
                <h2>
                  <button
                    id="faqs-title-01"
                    type="button"
                    className="flex items-center justify-between w-full text-left font-semibold py-2"
                    aria-controls="faqs-text-01"
                    onClick={() => handleClick(confort_feature_arr)}
                  >
                    <span>Comfort & Convenience</span>
                    <svg
                      className="fill-white shrink-0 ml-8"
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className="transform origin-center transition duration-200 ease-out"
                      />
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className="transform origin-center rotate-90 transition duration-200 ease-out"
                      />
                    </svg>
                  </button>
                </h2>
              </div>
              <div className="py-2 border-solid border-b border-gray">
                <h2>
                  <button
                    id="faqs-title-01"
                    type="button"
                    className="flex items-center justify-between w-full text-left font-semibold py-2"
                    aria-controls="faqs-text-01"
                    onClick={() => handleClick(technology_feature_arr)}
                  >
                    <span>Technology</span>
                    <svg
                      className="fill-white shrink-0 ml-8"
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className="transform origin-center transition duration-200 ease-out"
                      />
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className="transform origin-center rotate-90 transition duration-200 ease-out"
                      />
                    </svg>
                  </button>
                </h2>
              </div>
              <div className="py-2 border-solid border-b border-gray">
                <h2>
                  <button
                    id="faqs-title-01"
                    type="button"
                    className="flex items-center justify-between w-full text-left font-semibold py-2"
                    aria-controls="faqs-text-01"
                    onClick={() => handleClick(safety_feature_arr)}
                  >
                    <span>Safety</span>
                    <svg
                      className="fill-white shrink-0 ml-8"
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className="transform origin-center transition duration-200 ease-out"
                      />
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className="transform origin-center rotate-90 transition duration-200 ease-out"
                      />
                    </svg>
                  </button>
                </h2>
              </div>
            </div>
            {FeatureArr.length > 0 ? (
              <div className="lg:w-full xl:w-2/3">
                <Homeslider sliderArr={FeatureArr} />
              </div>
            ) : (
              <div className="flex items-center justify-center ">
                <div className="h-450px overflow-hidden">
                  <img
                    src="./images/mahindra-thar-red-rage.png" alt="thar red"
                    className="height-fit"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Features;
