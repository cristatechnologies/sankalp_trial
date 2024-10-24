'use client';
import { useEffect } from "react";
import Slider from "react-slick";
import TestimonialCarousel from "./TestimonialCarousel";

import { Marquee } from "@gfazioli/mantine-marquee";
import MarqueeComponent from "./MarqueeComponent";
        
const Testimonials = () => {
     var settings = {
       dots: true,
       infinite: false,
       speed: 500,
       slidesToShow: 3,
       slidesToScroll: 4,
       initialSlide: 0,
       responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             infinite: true,
             dots: true,
           },
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
             initialSlide: 2,
           },
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
           },
         },
       ],
     };
 const testimonialData = [
   {
     quote:
       "Renowned for its versatility in the kitchen, Red King Crab can be prepared in various ways, from simple steaming or boiling to elaborate preparations.",
     name: "Steven H. Paxson",
     role: "CEO & Founder",
     image:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROQaQEddAlPNHSzk87ZTIRcUSh6UFl3uLBLw&s", // Replace with actual image URL
   },
   {
     quote:
       "This is another testimonial from another user who loves the service.",
     name: "Jane Doe",
     role: "CTO",
     image:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgGrr4d-EygwO8Vn2hyt8C2kbMXCh8x5Oqww&s", // Replace with actual image URL
   },
   {
     quote: "I am thrilled with the quality and customer support I received.",
     name: "John Smith",
     role: "Designer",
     image:
       "https://img.freepik.com/premium-photo/lion-azuki-nft-style-wearing-street-wear_899449-3742.jpg", // Replace with actual image URL
   },
   {
     quote: "Amazing experience with the team and the product.",
     name: "Linda Williams",
     role: "Marketing Head",
     image:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-TvK1DdrCeHvbHQ706HrX7VtjsnYuIfE9w&s", // Replace with actual image URL
   },
 ];

 

     const boxData = [
       { bg: "red", content: "Hello World #1" },
       { bg: "cyan", content: "Hope you like it #2" },
       { bg: "blue", content: "Have a nice day #3" },
       { bg: "lime", content: "Goodbye #4" },
     ];

   
  return (
    <>
      {" "}
      <div className="flex flex-col items-center justify-center w-[100%] bg-black h-auto pt-16">
        <MarqueeComponent boxData={boxData} />
        <p className="text-[var(--primary-color)] text-xl capitalize ">
          {" "}
          customer feedback
        </p>
        <h1 className=" text-5xl font-semibold  text-[var(--primary-text-color)]    ">
          what have lot’s off happy customer
        </h1>
        <h1 className=" text-5xl font-semibold  text-[var(--primary-text-color)]   ">
          on usa explore our popular food
        </h1>
      </div>
      <div className=" bg-black   px-12  py-12">
        <div className="slider-container">
          <TestimonialCarousel testimonialData={testimonialData} />;
        </div>
      </div>
    </>
  );
};

export default Testimonials;
  