import Link from "next/link";
import { useEffect } from "react";
import settings from "../../../../utils/settings";
import ShopNowBtn from "../../Helpers/Buttons/ShopNowBtn";
import ServeLangItem from "../../Helpers/ServeLangItem";
import SimpleSlider from "../../Helpers/SliderCom";
import FontAwesomeCom from "../../Helpers/icons/FontAwesomeCom";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

export default function Banner({
  className,
  images = [],
  sidebarImgOne,
  sidebarImgTwo,
  services = [],
}) {
  const settingBanner = {
    infinite: true,
    dots: true,
    autoplay: false,
    arrows: false,
    fade: true,
  };
  const { text_direction } = settings();
  useEffect(() => {
    const getSliderInitElement = document.querySelector(
      ".slider-wrapper .slick-slider.slick-initialized"
    );
    getSliderInitElement.setAttribute("dir", `${text_direction}`);
  }, [text_direction]);

  return (
    <>
      <div className={`w-full !mt-30px font-bebas ${className || ""}`}>
        <div className="">
          <div className="main-wrapper w-full ">
            <div className="banner-card xl:flex xl:space-x-[30px] rtl:space-x-0 xl:h-[100vh]  ">
              <div
                data-aos="fade-right"
                className="rtl:ml-[30px] ltr:ml-0 w-full xl:h-full md:h-[500px] h-[220px] xl:mb-0 mb-2"
              >
                <div className="slider-wrapper w-full h-full">
                  <SimpleSlider settings={settingBanner}>
                    {images.length > 0 &&
                      images.slice(0, 1).map((item, i) => (
                        <div
                          key={i}
                          className="item w-full h-full group relative"
                        >
                          <div
                            style={{
                              position: "relative",
                              height: "100%",
                              width: "100%",
                              display: " flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            className="flex w-full h-full relative items-center justify-center"
                          >
                            <div
                              style={{
                                position: "absolute",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                left: "0",
                                filter: " brightness(0.9)",
                                backgroundImage: `url(${
                                  process.env.NEXT_PUBLIC_BASE_URL + item.image
                                })`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                              }}
                            ></div>
                            <div className="flex flex-row  items-center justify-between h-full w-full relative gap-12 my-auto font-bebas py-[80px] px-8">
                              <div
                                className="flex flex-col  w-[50%] h-full items-start justify-center "
                                data-aos="fade-left"
                                data-aos-duration="2000"
                              >
                                <div className="text-start relative z-10">
                                  {item.badge ? (
                                    <div className="text-yellow-500 font-bold text-[24px]">
                                      <span>{item.badge}</span>
                                    </div>
                                  ) : null}
                                </div>
                                <div>
                                  <h1 className="text-7xl font-bold text-[var(--secondary-color)] ">
                                    {item.title_one}
                                  </h1>
                                  <p className="font-sans text-[var(--secondary-color)] text-base font-normal mt-[10px]">
                                    {item.title_two}
                                  </p>
                                  :
                                </div>
                                <div>
                                  {item.product_slug ? (
                                    <button>
                                      <Link
                                        href={{
                                          pathname: `${item.pro}`,
                                          query: { slug: item.product_slug },
                                        }}
                                        passHref
                                        rel="noopener noreferrer"
                                        legacyBehavior
                                      >
                                        <span className="py-5 p-8 flex items-center justify-center bg-[var(--primary-color)] text-[var(--secondary-color)]      ">
                                          Shop Now
                                        </span>
                                      </Link>
                                    </button>
                                  ) : null}
                                </div>
                              </div>
                              <div className="flex w-[50%]">
                                {images.length > 0 &&
                                  images.slice(1, 2).map((item, i) => (
                                    <div
                                      key={i}
                                      className="item w-full h-full group relative"
                                    >
                                      <div
                                        style={{
                                          position: "relative",
                                          height: "100%",
                                          width: "100%",
                                          display: " flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                        }}
                                        className="flex w-full h-full relative items-center justify-center"
                                      >
                                        <div
                                          style={{
                                            position: "absolute",
                                            top: "0",
                                            right: "0",
                                            bottom: "0",
                                            left: "0",
                                            filter: " brightness(0.9)",
                                            backgroundImage: `url(${
                                              process.env.NEXT_PUBLIC_BASE_URL +
                                              item.image
                                            })`,
                                            backgroundSize: "cover",
                                            backgroundRepeat: "no-repeat",
                                          }}
                                        ></div>
                                      </div>
                                    </div>
                                  ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </SimpleSlider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
