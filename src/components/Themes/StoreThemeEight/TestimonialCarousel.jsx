import { useCallback, useEffect, useState } from "react";
import { Carousel } from "@mantine/carousel";
import { Progress } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

function TestimonialCarousel({ testimonialData }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState(null);

  // Media queries for different screen sizes
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");

  // Determine slideSize based on screen size
  const getSlideSize = () => {
    if (isMobile) return "100%"; // 1 card on mobile
    if (isTablet) return "50%"; // 2 cards on tablet
    return "33.33%"; // 3 cards on desktop
  };

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll);
      handleScroll();
    }
  }, [embla]);

  return (
    <>
      <Carousel
        dragFree
        slideSize={getSlideSize()}
        height={isMobile ? 500 : 450} // Slightly taller on mobile
        getEmblaApi={setEmbla}
        initialSlide={0}
        align="start"
        className="mx-auto"
        withIndicators
        styles={{
          viewport: {
            padding: "20px 0",
          },
          slide: {
            padding: isMobile ? "0 10px" : "0 15px", // Smaller padding on mobile
          },
          indicators: {
            bottom: "-2rem",
           
          },
          indicator: {
            width: "10px",
            height: "10px",
            transition: "width 250ms ease",
            backgroundColor: "#f1f1f1",
            "&[dataActive]": {
              backgroundColor: "#f97316",
            },
            "&:hover": {
              backgroundColor: "#fdba74",
            },
          },
        }}
      >
        {testimonialData.map((testimonial, index) => (
          <Carousel.Slide key={index}>
            <div className="h-full bg-white  shadow-lg transition-transform hover:scale-105">
              <div
                className={`p-4 md:p-8 h-full flex flex-col justify-between`}
              >
                {" "}
                {/* Responsive padding */}
                {/* Quote Section */}
                <div className="mb-6">
                  <span className="text-6xl text-[var(--primary-color)] font-['Bebas_Neue']">
                    <i className="fi fi-rr-quote-right"></i>
                  </span>
                  <p className="text-4xl md:text-xl leading-relaxed text-black ">
                    {testimonial.quote}
                  </p>
                </div>
                {/* Profile Section */}
                <div className="flex items-center gap-3 md:gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-sm uppercase text-black">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-black">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>

      <div className="w-[280px] md:w-80 mx-auto mt-16">
        <Progress
          value={scrollProgress}
          size="sm"
          styles={{
            root: {
              backgroundColor: "#f1f1f1",
            },
            bar: {
              backgroundColor: "#f97316",
            },
          }}
        />
      </div>
    </>
  );
}

export default TestimonialCarousel;
