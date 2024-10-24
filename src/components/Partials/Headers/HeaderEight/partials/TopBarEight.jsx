import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { fetchWishlist } from "../../../../../store/wishlistData";
import LoginContext from "../../../../Contexts/LoginContext";
import { IoCartOutline } from "react-icons/io5";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

import ThinPeople from "../../../../Helpers/icons/ThinPeople";
import ServeLangItem from "../../../../Helpers/ServeLangItem";
import Cart from "../../../../Cart";
import apiRequest from "../../../../../../utils/apiRequest";
import ThinBag from "../../../../Helpers/icons/ThinBag";
import ThinLove from "../../../../Helpers/icons/ThinLove";
// import SearchBox from "../../../../Helpers/SearchBox";
// import Arrow from "../../../Helpers/icons/Arrow";
// import Compair from "../../../Helpers/icons/Compair";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Router from "next/router";

// import IcoLogout from "../../../Auth/Profile/icons/IcoLogout";

// import Login from "../../../Helpers/icons/Login";

export default function TopBarEight({ className, contact, settings }) {
  const router = useRouter();
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const categoryList = websiteSetup && websiteSetup.payload.productCategories;
  const getLoginContexts = useContext(LoginContext);
  const dispatch = useDispatch();
  const location = useRouter();
  const [auth, setAuth] = useState(null);
  const cartItem = useSelector(
    (state) => state.cart?.cart?.cartProducts?.length
  );
  const { wishlistData } = useSelector((state) => state.wishlistData);
  const { compareProducts } = useSelector((state) => state.compareProducts);
  const wishlists = wishlistData && wishlistData.wishlists;
  const [profile, setProfile] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  useEffect(() => {
    if (getLoginContexts.loginPopup === false) {
      setAuth(() => JSON.parse(localStorage.getItem("auth")));
    }
  }, [getLoginContexts.loginPopup]);

  

  const profilehandler = () => {
    setProfile(!profile);
  };

  useEffect(() => {
    setAuth(JSON.parse(localStorage.getItem("auth")));
    dispatch(fetchWishlist());
  }, []);

  const logout = () => {
    if (auth) {
      apiRequest.logout(auth.access_token);
      localStorage.removeItem("auth");
      dispatch(fetchWishlist());
      location.push("/login");
    }
  };

  const searchHandler = () => {
    if (searchKey !== "") {
      router.push({
        pathname: "/search",
        query: { search: searchKey },
      });
    } else {
      return false;
    }
  };

  const handleSearchClick = () => {
    setIsSearchActive(true);
  };

  const handleSearchKeyChange = (e) => {
    setSearchKey(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search submission logic here
    console.log("Search for:", searchKey);
    // You can navigate to the search results page or perform other actions
  };

  const handleCloseSearch = () => {
    setIsSearchActive(false);
    setSearchKey("");
  };

  return (
    <div
      className={`w-full   h-18 hidden lg:block text-white  ${className || ""}`}
    >
      <header className="flex items-center !justify-center h-20 py-4 text-xl ">
        <div className="flex-1 flex items-center justify-start h-[60px]   ">
          {settings && (
            <Link href="/" passHref rel="noopener noreferrer" legacyBehavior>
              <Image
                width="180"
                height="155"
                objectFit="scale-down"
                src={`${process.env.NEXT_PUBLIC_BASE_URL + settings.logo}`}
                alt="logo"
              />
            </Link>
          )}
        </div>

        <div className=" flex items-center h-full space-x-6 text-md font-900   mr-auto">
          <Link href="/" passHref legacyBehavior>
            <a className="text-white hover:text-gray-500 transition-colors duration-200 ">
              HOME
            </a>
          </Link>
          <div className="relative group h-full flex items-center">
            <span className="text-white capitalize hover:text-gray-500 transition-colors duration-200 cursor-pointer flex items-center">
              MENU
              <svg
                className="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <div className="absolute left-0 top-full w-[250px] bg-white shadow-lg hidden group-hover:block z-50">
              {categoryList.slice(0, 6).map((category, index) => (
                <Link
                  href={{
                    pathname: "/products",
                    query: {
                      category: category.slug,
                    },
                  }}
                  key={index}
                  passHref
                  legacyBehavior
                >
                  <a className="block px-4 py-2 text-lg text-black hover:bg-gray-300 border-b-2">
                    {category.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="relative group">
            <span className="text-white capitalize hover:text-gray-500 transition-colors duration-200 cursor-pointer flex items-center">
              PAGES
              <svg
                className="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <div className="absolute left-0 top-full w-[250px] bg-white shadow-lg hidden group-hover:block z-50">
              {categoryList.slice(0, 6).map((category, index) => (
                <Link
                  href={{
                    pathname: "/products",
                    query: {
                      category: category.slug,
                    },
                  }}
                  key={index}
                  passHref
                  legacyBehavior
                >
                  <a className="block px-4 py-2 text-lg text-black hover:bg-gray-300 border-b-2">
                    {category.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="relative group">
            <span className="text-white capitalize hover:text-gray-500 transition-colors duration-200 cursor-pointer flex items-center">
              BLOG
              <svg
                className="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <div className="absolute left-0 top-full w-[250px] bg-white shadow-lg hidden group-hover:block z-50">
              {categoryList.slice(0, 6).map((category, index) => (
                <Link
                  href={{
                    pathname: "/products",
                    query: {
                      category: category.slug,
                    },
                  }}
                  key={index}
                  passHref
                  legacyBehavior
                >
                  <a className="block px-4 py-2 text-lg text-black hover:bg-gray-300 border-b-2">
                    {category.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/contact" passHref legacyBehavior>
            <a className="text-white hover:text-gray-500 transition-colors duration-200">
              CONTACT US
            </a>
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-end gap-x-6 h-full">
          <div className="topbar-dropdowns lg:block hidden">
            <div className="flex ltr:space-x-6 rtl:-space-x-0 items-center">
              <div className="flex space-x-6 rtl:space-x-reverse items-center relative">
                <div className="favorite relative ">
                  <a rel="noopener noreferrer">
                    <span className="cursor-pointer flex gap-2 flex items-center justify-center">
                      <FontAwesomeIcon
                        icon="fa fa-phone"
                        className="text-yellow-500 -rotate-90 text-2xl"
                      />
                      <span className="font-900 w-[150px]">
                        Call: + 12345678{" "}
                      </span>
                    </span>
                  </a>
                </div>
                <div className=" relative">
                  <div className="py-3 px-6 bg-orange-600 text-gray-100 font-900  cursor-pointer hover:bg-yellow-500  flex items-center justify-center gap-2 ">
                    <span>BOOK NOW</span>
                    <span className="ml-2">&rarr;</span>
                  </div>
                </div>
                <div className="favorite relative">
                  <span className="cursor-pointer" onClick={handleSearchClick}>
                    <FontAwesomeIcon
                      icon="fas fa-search"
                      style={{ color: "white" }}
                    />
                  </span>
                </div>
                <button onClick={profilehandler} type="button">
                  <span className="cursor-pointer">
                    <BsFillGrid3X3GapFill />
                  </span>
                </button>

                <div className="cart-wrapper group relative py-4">
                  <div className="cart relative cursor-pointer">
                    <Link href="/cart" passHref>
                    
                        <span className="cursor-pointer">
                          <IoCartOutline className="fill-current font-bold  w-6 h-6" />
                        </span>
                  
                    </Link>
                    <span className="w-[18px] h-[18px]  font-bold rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[10px]  bg-orange-600 text-[var(--secondary-color)]">
                      {cartItem ? cartItem : 0}
                    </span>
                  </div>

                  <Cart className="absolute text-white ltr:-right-[45px] rtl:-left-[45px] top-11 z-50 hidden group-hover:block" />
                </div>

                {profile && (
                  <>
                    <div
                      onClick={() => setProfile(false)}
                      className="w-full h-full fixed top-0 left-0 z-30"
                      style={{ zIndex: "35", margin: "0" }}
                    ></div>
                    <div
                      className="w-[208px] h-auto bg-white absolute right-0 top-11 z-40 border-t-[3px] primary-border flex flex-col justify-between"
                      style={{
                        boxShadow: " 0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                      }}
                    >
                      <div className=" w-full  p-5">
                        <ul className="w-full  flex flex-col space-y-7 text-black ">
                          {auth && (
                            <li className=" text-black font-semibold cursor-pointer hover:text-[var(--primary-color)] transition-colors duration-200 ease-in-out">
                              <span>
                                {ServeLangItem()?.Hi}, {auth && auth.user.name}{" "}
                              </span>
                            </li>
                          )}
                          <li className="font-semibold text-black cursor-pointer hover:text-gray-400 hover:font-semibold border-b-2">
                            <Link href="/profile#dashboard" passHref>
                            
                                <span className="capitalize">
                                  {ServeLangItem()?.profile}
                                </span>
                             
                            </Link>
                          </li>
                          <li className="font-semibold !text-black cursor-pointer hover:text-gray-400 hover:font-semibold border-b-2">
                            <Link href="/tracking-order" passHref>
                           
                                <span className="capitalize">
                                  {ServeLangItem()?.Track_Order}
                                </span>
                            
                            </Link>
                          </li>
                          <li className="font-semibold  text-black cursor-pointer hover:text-gray-400 hover:font-semibold border-b-2">
                            <Link href="/contact" passHref>
                          
                                <span className="capitalize">
                                  {ServeLangItem()?.Support}
                                </span>
                          
                            </Link>
                          </li>
                          <li className="font-semibold text-black cursor-pointer hover:text-gray-400 hover:font-semibold border-b-2">
                            <Link href="/faq" passHref>
                           
                                <span className="capitalize">
                                  {ServeLangItem()?.FAQ}
                                </span>
                            
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="w-full h-10 flex justify-center items-center border-t border-qgray-border">
                        <button
                          onClick={() => {
                            auth ? logout() : location.push("/login");
                          }}
                          type="button"
                          className="text-black text-base font-semibold"
                        >
                          {auth
                            ? ServeLangItem()?.Sign_Out
                            : ServeLangItem()?.Login}
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="flex ltr:space-x-2 rtl:space-x-0 items-center ">
                {/* cart and heart */}
              </div>
              {/* {isSearchActive && (
                <div className="flex-1 flex items-center justify-center">
                  <form onSubmit={handleSearchSubmit} className="w-full">
                    <input
                      type="text"
                      value={searchKey}
                      onKeyDown={(e) => e.key === "Enter" && searchHandler()}
                      onChange={(e) => setSearchKey(e.target.value)}
                      placeholder={ServeLangItem()?.Search_products + "..."}
                      className="text-[var(--primary-color)] font-serif text-3xl w-full px-4 pl-12 py-2 bg-transparent outline-none focus:ring-0"
                    />
                  </form>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </header>
      {isSearchActive && (
        <>
          {/* Overlay to close search when clicking outside */}
          <div
            className="fixed inset-0 z-30"
            onClick={() => setIsSearchActive(false)}
          ></div>

          {/* Search Bar Container */}
          <div className="absolute right-0 mt-2 w-[300px] bg-white shadow-lg z-40 transform origin-top-right transition-all duration-300">
            <div className="p-4 text-black">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  searchHandler();
                }}
                className="relative"
              >
                <input
                  type="text"
                  value={searchKey}
                  onChange={(e) => setSearchKey(e.target.value)}
                  placeholder="Search products..."
                  className="w-full py-2 px-10 text-black font-bold tracking-wider text-sm border border-black focus:outline-none focus:border-orange-500 transition-all duration-300"
                  autoFocus
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black">
                  <FontAwesomeIcon icon="fas fa-search" className="text-sm" />
                </span>
                <button
                  type="button"
                  onClick={() => setIsSearchActive(false)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-black"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
