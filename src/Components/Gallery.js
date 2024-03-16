import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Gallery = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="gallery-section relative text-white" id="gallery">
        <div className="sm:p-5 lg:px-9">
          <div className="p-8 z-20">
            <div
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in"
              data-aos-duration="600"
            >
              <h2 className="text-2lg section-header relative px-5 mb-12">
                Gallery
              </h2>
            </div>
          </div>
          <div className="grid lg:grid-flow-col gap-4">
            <div
              className="p-5"
              data-aos="zoom-in-up"
              data-aos-offset="200"
              data-aos-easing="ease-in"
              data-aos-duration="600"
            >
              <img src="../images/gallery/Thar8.png" alt="gallery-img1" className="xl:hidden" />
              <img
                src="../images/gallery/Thar1.png" alt="gallery-img1"
                className="hidden xl:block h-450px "
              />
            </div>
            <div>
              <div className="grid grid-flow-col gap-4">
                <div>
                  <img
                    src="./images/gallery/Thar2.png" alt="gallery-img2"
                    className="m-3 img-fit"
                    data-aos="zoom-in-up"
                    data-aos-offset="200"
                    data-aos-easing="ease-in"
                    data-aos-duration="600"
                  />
                  <img
                    src="./images/gallery/Thar3.png" alt="gallery-img2"
                    className="m-3 img-fit"
                    data-aos="zoom-in-up"
                    data-aos-offset="200"
                    data-aos-easing="ease-in"
                    data-aos-duration="600"
                  />
                </div>
                <div>
                  <img
                    src="./images/gallery/Thar4.png"  alt="gallery-img3"
                    className="m-3 img-fit"
                    data-aos="zoom-in-up"
                    data-aos-offset="200"
                    data-aos-easing="ease-in"
                    data-aos-duration="600"
                  />
                  <img
                    src="./images/gallery/Thar6.png" alt="gallery-img4"
                    className="m-3 img-fit"
                    data-aos="zoom-in-up"
                    data-aos-offset="200"
                    data-aos-easing="ease-in"
                    data-aos-duration="600"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;
