import { useEffect, useState } from "react";
import settings from "../../../../utils/settings";
import SectionStyleFour from "../../Helpers/SectionStyleFour";
import SectionStyleOne from "../../Helpers/SectionStyleOne";
import SectionStyleThree from "../../Helpers/SectionStyleThree";
import SectionStyleTwo from "../../Helpers/SectionStyleTwo";
import ViewMoreTitle from "../../Helpers/ViewMoreTitle";
import Layout from "../../Partials/Layout";
import Ads from "./Ads";
import Banner from "./Banner";
import BestSellers from "./BestSellers";
import BrandSection from "./BrandSection";
import CampaignCountDown from "./CampaignCountDown";
// import ProductsAds from "./ProductsAds";
import TwoColumnAds from "./ProductAds/TwoColumnAds";
import OneColumnAdsOne from "./ProductAds/OneColumnAdsOne";
import OneColumnAdsTwo from "./ProductAds/OneColumnAdsTwo";
import CategorySection from "./CategorySection";
import ProductCard from "./Partials/ProductCard";
import ProductGrid from "./ProductGrid";
import TwoColsCategories from "./Partials/TwoColsCategories";
import TwoColsCategoriesRev from "./Partials/TwoColsCategoriesRev";

export default function StorePageThemeTwo({ homepageData }) {
  const getsectionTitles = homepageData.section_title;
  const [sectionTitles, setSectionTitles] = useState(null);

  useEffect(() => {
    if (!sectionTitles) {
      let tem =
        getsectionTitles &&
        getsectionTitles.map((item, i) => {
          return {
            [item.key]: item.custom ? item.custom : item.default,
          };
        });
      setSectionTitles(Object.assign.apply(Object, tem));
    }
  }, [sectionTitles]);

  const [homepage] = useState(homepageData);
  const { enable_multivendor } = settings();
  const [isMultivendor, setIsMultivendor] = useState(false);
  console.log("homepage data is",homepage)
  useEffect(() => {
    if (!isMultivendor) {
      setIsMultivendor(enable_multivendor && parseInt(enable_multivendor));
    }
  }, [isMultivendor]);
  return (
    <div style={{ fontFamily: "Jost" }}>
      <Layout childrenClasses="pt-0 pb-[60px] ">
        <Ads />
        {homepage && (
          <Banner
            images={homepage.sliders}
            services={homepage.services}
            sidebarImgOne={homepage.sliderBannerOne}
            sidebarImgTwo={homepage.sliderBannerTwo}
            className="banner-wrapper md:mb-[60px] mb-[30px]"
          />
        )}
        {/* {homepage && (
          <CategorySection
            categories={homepage.homepage_categories}
            sectionTitle={sectionTitles && sectionTitles.Trending_Category}
          />
        )} */}
        {/* {homepage && (
          <SectionStyleOne
            products={homepage.popularCategoryProducts}
            categories={homepage.popularCategories}
            categoryBackground={
              process.env.NEXT_PUBLIC_BASE_URL +
              homepage.popularCategorySidebarBanner
            }
            categoryTitle={sectionTitles && sectionTitles.Popular_Category}
            sectionTitle={sectionTitles && sectionTitles.Popular_Category}
            seeMoreUrl={`/products?highlight=popular_category`}
            className="category-products md:mb-[60px] mb-[30px]"
          />
        )} */}
        {/* {homepage && (
          <BrandSection
            brands={homepage.brands.length > 0 ? homepage.brands : []}
            sectionTitle={sectionTitles && sectionTitles.Shop_by_Brand}
            className="brand-section-wrapper md:mb-[60px] mb-[30px]"
          />
        )} */}

        {/* {homepage && (
          <CampaignCountDown
            className="md:mb-[60px] mb-[30px]"
            flashSaleData={homepage.flashSale}
            downloadData={homepage.flashSaleSidebarBanner}
            lastDate={homepage.flashSale.end_time}
          />
        )} */}
        {homepage && (
          <ViewMoreTitle
            className="feature md:mb-[60px] mb-[30px] "
            seeMoreUrl={`/products?highlight=categories`}
            categoryTitle={sectionTitles && sectionTitles.Featured_Category}
          >
            <CategorySection
              categories={homepage.featuredCategories}
              sectionTitle={sectionTitles && sectionTitles.Featured_Category}
            />
          </ViewMoreTitle>
        )}

        {/* {homepage && (
          <ViewMoreTitle
            className="top-selling-product md:mb-[60px] mb-[30px] "
            seeMoreUrl={`/products?highlight=top_product`}
            categoryTitle={sectionTitles && sectionTitles.Top_Rated_Products}
          >
            <SectionStyleTwo
              products={
                homepage.topRatedProducts.length &&
                homepage.topRatedProducts.length > 0
                  ? homepage.topRatedProducts
                  : []
              }
            />
          </ViewMoreTitle>
        )} */}
        {/* {homepage && isMultivendor === 1 && (
          <ViewMoreTitle
            className="best-sallers-section md:mb-[60px] mb-[30px]"
            seeMoreUrl="/sellers"
            categoryTitle={sectionTitles && sectionTitles.Shop_by_Brand === 'Shop by Brand' ? 'Shop by Artist' : 'Shop by Brand'}
          >
            <BestSellers
              sallers={homepage.sellers.length > 0 ? homepage.sellers.slice(0, 7) : []}
            />
          </ViewMoreTitle>
        )} */}
        {homepage && (
          <>
            <div className="flex flex-col items-center justify-center space-y-2 mb-4">
              <h1 className=" text-4xl">BEST SELLER</h1>
              <div className=" text-xl">Best Seller Product This Week!</div>
            </div>
            <ProductGrid
              categories={
                homepage.bestProducts.length > 0 ? homepage.bestProducts : []
              }
            />
          </>
        )}
        {homepage && (
          <>
            <TwoColsCategories categories={homepage.featuredCategories} />
          </>
        )}
        {homepage && (
          <>
            <TwoColsCategoriesRev categories={homepage.featuredCategories} />
          </>
        )}
        {homepage && (
          <>
            <div className="flex flex-col items-center justify-center space-y-2 mb-4">
              <h1 className=" text-4xl">HOT DEAL</h1>
              <div className=" text-xl">Don't Miss Today's Featured Deals</div>
            </div>
            <ProductGrid
              categories={
                homepage.popularCategoryProducts.length > 0
                  ? homepage.popularCategoryProducts
                  : []
              }
            />
          </>
        )}
        {/* {homepage && (
          <TwoColumnAds
            bannerOne={homepage.twoColumnBannerOne}
            bannerTwo={homepage.twoColumnBannerTwo}
          />
        )} */}

        {/* {homepage && (
          <SectionStyleOne
            categories={
              homepage.featuredCategories.length > 0
                ? homepage.featuredCategories
                : []
            }
            categoryBackground={
              process.env.NEXT_PUBLIC_BASE_URL +
              homepage.featuredCategorySidebarBanner
            }
            categoryTitle={sectionTitles && sectionTitles.Featured_Products}
            products={
              homepage.featuredCategoryProducts.length > 0
                ? homepage.featuredCategoryProducts.slice(0, 12)
                : []
            }
            sectionTitle={sectionTitles && sectionTitles.Featured_Products}
            seeMoreUrl={`/products?highlight=featured_product`}
            className="category-products md:mb-[60px] mb-[30px]"
          />
        )} */}
        {/* {homepage && <OneColumnAdsOne data={homepage.singleBannerOne} />} */}
        {/* 
        {homepage && (
          <SectionStyleThree
            products={
              homepage.newArrivalProducts.length > 0
                ? homepage.newArrivalProducts.slice(0, 12)
                : []
            }
            sectionTitle={sectionTitles && sectionTitles.New_Arrivals}
            seeMoreUrl={`/products?highlight=new_arrival`}
            className="new-products md:mb-[60px] mb-[30px]"
          />
        )} */}

        {/* {homepage && (
          <div className="w-full text-white md:mb-[60px] mb-[30px]">
            <div className="container-x mx-auto">
              <OneColumnAdsTwo data={homepage.singleBannerTwo} />
            </div>
          </div>
        )} */}
        {/* {homepage && (
          <SectionStyleFour
            products={
              homepage.bestProducts.length > 0
                ? homepage.bestProducts.slice(0, 12)
                : []
            }
            sectionTitle={sectionTitles && sectionTitles.Best_Products}
            seeMoreUrl={`/products?highlight=best_product`}
            className="category-products md:mb-[60px] mb-[30px]"
          />
        )} */}
      </Layout>
    </div>
  );
}
