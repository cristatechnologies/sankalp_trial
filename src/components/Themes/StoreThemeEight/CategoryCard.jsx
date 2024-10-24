import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import FontAwesomeCom from "../../Helpers/icons/FontAwesomeCom";
import ServeLangItem from "../../Helpers/ServeLangItem";
import Arrow from "../../Helpers/icons/Arrow";
import MarqueeComponent from "./MarqueeComponent";
export default function CategoryCard({ sectionTitle, categories }) {
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  // const categoryList = websiteSetup && websiteSetup.payload.productCategories;
  // const mageMenuList = websiteSetup && websiteSetup.payload.megaMenuCategories;
  // const megaMenuBanner = websiteSetup && websiteSetup.payload.megaMenuBanner;
  // const customPages = websiteSetup && websiteSetup.payload.customPages;
  console.log(categories);
  
     const boxData = [
       { bg: "red", content: "Hello World #1" },
       { bg: "cyan", content: "Hope you like it #2" },
       { bg: "blue", content: "Have a nice day #3" },
       { bg: "lime", content: "Goodbye #4" },
     ];

  return (
    <>
      <div className="h-[100vh] container mx-auto px-4 pb-10 font-['Bebas_Neue'] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-[200px] md:h-auto relative mb-8 md:mb-0">
          <div
            className="absolute top-0 left-0 w-full h-[90%]"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <Image
              src="/assets/sankalp/indian-chef.jpg"
              alt="Chef presenting a dish"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 flex items-center">
            <span className="text-orange-500 mr-1">VERY GOOD FOOD</span>
            <span className="text-yellow-400">★★</span>
          </div> */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="absolute bottom-4 right-4 text-white p-10 bg-no-repeat bg-center bg-contain flex items-center justify-center"
            style={{ backgroundImage: `url('/assets/sankalp/about-star.png')` }}
          >
            <span
              className="absolute left-[25px] top-[25px] border-[2px] border-dashed border-white box-border"
              style={{
                width: "calc(100% - 50px)",
                height: "calc(100% - 50px)",
                borderRadius: "50%",
                boxSizing: "border-box",
              }}
            ></span>
            QUALITY FOOD
          </div>
        </div>
        <div
          className="w-full md:w-1/2 md:pl-8 flex flex-col justify-center"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <h2 className="text-[var(--primary-color)] text-xl mb-2">
            LEARN ABOUT SANKALP
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            THE AMAZING & QUALITY FOOD FOR YOUR GOOD HEALTH
          </h1>
          <p className="mb-6 text-sm md:text-base font-sans">
            Welcome to our restaurant, where culinary excellence meets warm
            hospitality in every dish we serve. Nestled in the heart of City
            Name, our eatery invites you on a journey
          </p>
          <div className="flex flex-col sm:flex-row mb-6">
            <button className="bg-yellow-400 hover:bg-[var(--primary-color)] duration-200 transition-colors text-black px-4 py-2 mb-2 sm:mb-0 sm:mr-4">
              LEARN MORE US
            </button>
            <button className="text-[var(--primary-color)] border border-[var(--primary-color)] px-4 py-2">
              EXPLORE POPULAR MENU
            </button>
          </div>
          <div className="flex flex-col sm:flex-row tracking-wide">
            <div className="mb-4 sm:mb-0 sm:mr-8">
              <div className="flex items-center mb-2">
                {/* <span className="text-[var(--primary-color)] mr-2"></span> */}
                <h3 className="font-bold">BEST QUALITY FOOD</h3>
              </div>
              <p className="text-sm font-sans">
                Our talented chefs craft each dish precision sourcing
              </p>
            </div>
            <div>
              <div className="flex items-center mb-2 text-base ">
                {/* <span className="text-[var(--primary-color)] mr-2">👨‍🍳</span> */}
                <h3 className="font-bold">EXPERIENCE OUR CHEFS</h3>
              </div>
              <p className="text-sm font-sans">
                Our talented chefs craft each dish precision sourcing
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className="container mx-auto px-4 pb-10 font-['Bebas_Neue']">
    //   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
    //     {categories &&
    //       categories.map((item, i) => (
    //         <div
    //           data-aos="fade-left"
    //           data-aos-delay={i + "00"}
    //           key={i}
    //           className="flex flex-col items-center"
    //         >
    //           <Link
    //             href={{
    //               pathname: "/products",
    //               query: {
    //                 category:
    //                   item.category && item.category.slug
    //                     ? item.category.slug
    //                     : item.slug,
    //               },
    //             }}
    //             passhref
    //             rel="noopener noreferrer"
    //             legacyBehavior
    //           >
    //             <div className="relative w-full aspect-[9/14] mb-2 cursor-pointer">
    //               <Image
    //                 src={
    //                   process.env.NEXT_PUBLIC_BASE_URL +
    //                   (item.thumb_image ||
    //                     (item.category && item.category.image))
    //                 }
    //                 alt={item.name || (item.category && item.category.name)}
    //                 layout="fill"
    //                 objectFit="cover"
    //                 className=" hover:opacity-80 transition-opacity"
    //               />
    //             </div>
    //           </Link>
    //           <p className="text-center uppercase text-sm font-normal text-[var(--text-color)]">
    //             {item.name || (item.category && item.category.name)}
    //           </p>
    //         </div>
    //       ))}
    //   </div>
    // </div>
  );
}
