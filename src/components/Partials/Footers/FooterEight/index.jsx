import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Facebook from "../../../Helpers/icons/Facebook";
import Instagram from "../../../Helpers/icons/Instagram";
import Youtube from "../../../Helpers/icons/Youtube";
import FontAwesomeCom from "../../../Helpers/icons/FontAwesomeCom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import apiRequest from "../../../../../utils/apiRequest";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css";

export default function FooterEight({ settings }) {
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const [firstCol, setFirstCol] = useState(null);
  const [secondCol, setSecondCol] = useState(null);
  const [thirdCol, setThirdCol] = useState(null);
  const [desc, setDesc] = useState(null);
    const [socialLink, setSocialLink] = useState(null);
const [productCategories, setProductCategories] = useState(null);
const [email, setEmail] = useState("");




useEffect(()=>
{
  if(!productCategories) {
    setProductCategories(
      websiteSetup && 
      websiteSetup.payload &&
      websiteSetup.payload.productCategories
    )
}});

  useEffect(() => {
    if (!firstCol) {
      setFirstCol(
        websiteSetup &&
          websiteSetup.payload &&
          websiteSetup.payload.footer_first_col
      );
    }
  });
  useEffect(() => {
    if (!desc) {
      setDesc(
        websiteSetup &&
          websiteSetup.payload &&
          websiteSetup.payload.footer
      );
    }
  });
   useEffect(() => {
     if (!socialLink) {
       setSocialLink(
         websiteSetup &&
           websiteSetup.payload &&
           websiteSetup.payload.social_links
       );
     }
   });
  useEffect(() => {
    if (!secondCol) {
      setSecondCol(
        websiteSetup &&
          websiteSetup.payload &&
          websiteSetup.payload.footer_second_col
      );
    }
  });
  useEffect(() => {
    if (!thirdCol) {
      setThirdCol(
        websiteSetup &&
          websiteSetup.payload &&
          websiteSetup.payload.footer_third_col
      );
    }
  });



  
  const subscribehandler = () => {
    apiRequest
      .subscribeRequest({ email: email })
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.response && err.response.data.message);
      });
  };

  return (
    // style={{backgroundImage: "url('/assets/sankalp/footer.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}
    <footer className="min-h-screen bg-black font-['Bebas_Neue'] border-t-2">
      <div className=" w-full  pt-16 ">
        <div
          className="text-center flex-col items-center justify-self-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <h2 className="text-lg text-yellow-500  ">join our newsletter</h2>
          <h3 className="font-bold text-white text-5xl mb-4">
            subscribe follow our newsletter
          </h3>
          <h3 className="font-bold text-white text-5xl mb-4">
            to get more updates
          </h3>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center max-w-[600px]"
          >
            <input
              onChange={(e) => setEmail(e.target.value.trim())}
              value={email}
              type="email"
              placeholder="EMAIL ADDRESS"
              className="flex-grow outline-none px-4 py-3 border-none focus:outline-none focus:ring-1 focus:ring-gray-200"
            />
            <button
              onClick={subscribehandler}
              type="button"
              className="px-6 py-3 bg-[#FF4B12] text-white font-medium uppercase hover:bg-[#E64410] transition duration-300"
            >
              Subscribe →
            </button>
          </form>
          {/* <p className="text-sm text-gray-600 mt-2">
            Sign up to get the latest on new Products, Promotions, Design news
            and more
          </p> */}
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-5 px-6 pb-10 py-16">
          <div data-aos="fade-up" data-aos-duration="1100" data-aos-delay="400">
            {desc && (
              <>
                <p className="font-normal text-[var(--footer-text-color)]    text-lg">
                  <Link href="/" passHref>
                   
                      {settings ? (
                        <Image
                          width="200"
                          height="140"
                          src={`${
                            process.env.NEXT_PUBLIC_BASE_URL + settings.logo
                          }`}
                          alt="logo"
                        />
                      ):<>loading....</>}
                   
                  </Link>
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li className="font-normal font-sans text-[var(--footer-text-color)]    text-md transform transition-transform duration-300 hover:scale-105">
                    {desc.about_us}
                  </li>
                  {desc.address && (
                    <li className="transform transition-transform duration-300 hover:scale-105">
                      {desc.address}
                    </li>
                  )}
                  <li className="flex flex-row gap-4">
                    {socialLink &&
                      socialLink.length > 0 &&
                      socialLink.map((item, i) => (
                        <a
                          key={i}
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeCom
                            className="w-10 h-10 text=[var(--footer-text-color)] "
                            icon={item.icon}
                          />
                        </a>
                      ))}
                  </li>
                </ul>
              </>
            )}
          </div>
          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="450">
            {productCategories && (
              <>
                <p className="font-normal text-[var(--footer-text-color)] text-xl tracking-wide ">
                  {" "}
                  categories{" "}
                </p>

                <ul className="mt-6 space-y-4 text-sm font-sans">
                  {productCategories.length > 0 &&
                    productCategories.slice(0, 5).map((item, i) => (
                      <li
                        key={i}
                        className="transform transition-transform duration-300 hover:scale-105 `6 "
                      >
                        <Link
                          href={{
                            pathname: "/products",
                            query: { category: item.slug },
                          }}
                          className="text-[var(--footer-text-color)] transition hover:opacity-75"
                          legacyBehavior
                        >
                          <span className="cursor-pointer text-[var(--footer-text-color)]">
                            {" "}
                            {item.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </>
            )}
          </div>
          {firstCol && (
            <div
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="500"
            >
              <p className="font-normal text-[var(--footer-text-color)]  tracking-wide text-xl">
                {" "}
                Help
              </p>
              {/* Popular Foods  */}
              <ul className="mt-6 space-y-4 text-sm font-sans">
                {firstCol.col_links.length > 0 &&
                  firstCol.col_links.map((item, i) => (
                    <li
                      key={i}
                      className="transform transition-transform duration-300 hover:scale-105"
                    >
                      <Link
                        href={item.link}
                        className="text-[var(--footer-text-color)] transition-opacity duration-300 hover:opacity-75"
                        legacyBehavior
                      >
                        <span className="cursor-pointer text-[var(--footer-text-color)]">
                          {item.title}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          )}
          {/* Contact Information */}

          <div>
            {thirdCol && (
              <>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1300"
                  data-aos-delay="550"
                >
                  <p className="font-normal text-[var(--footer-text-color)] text-xl first-letter:">
                    {" "}
                    {thirdCol.columnTitle}
                  </p>

                  <ul className="mt-6 space-y-4 text-sm tracking-wider font-sans">
                    {thirdCol.col_links.length > 0 &&
                      thirdCol.col_links.map((item, i) => (
                        <li
                          key={i}
                          className="transform transition-transform duration-300 hover:scale-105"
                        >
                          <Link
                            href={item.link}
                            className="text-[var(--footer-text-color)] transition-opacity duration-300 hover:opacity-75"
                            legacyBehavior
                          >
                            <span className="cursor-pointer text-[var(--footer-text-color)]">
                              {item.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </>
            )}
          </div>
          {/* Opening Hours*/}
          <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
            <p className="font-medium text-xl text-[var(--footer-text-color)] ">
              opening hour
            </p>

            <ul className="mt-6 space-y-4 text-sm font-sans">
              <li className="flex flex-row">
                <p className="text-[var(--footer-text-color)]   ">
                  Monday – Friday:
                </p>
                <p className="text-yellow-500"> 8am – 4pm</p>
              </li>

              <li className="flex flex-row">
                <p className="text-[var(--footer-text-color)] ">Saturday:</p>
                <p className="text-yellow-500"> 8am – 12am</p>
              </li>

              <li>
                <p className="text-[var(--footer-text-color)] ">
                  Have any questions?
                </p>
              </li>
              <li className=" px-4 py-2 bg-yellow-400 text-center w-[50%] cursor-pointer">
                <Link href="/contact">Let's Talk Us</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="py-4 bg-gray-950 px-4 mx-0 ">
          <div className="flex lg:flex-row flex-col justify-between items-center gap-4 text-md ">
            <div className="flex lg:flex-row flex-col  w-[50%] items-center gap-4 text-md ">
              <p className=" text-white font-normal ">
                <FontAwesomeIcon icon="fa-solid fa-copyright" />
                {desc && desc.copyright}
              </p>
              <p className=" text-white">
                <FontAwesomeIcon icon="fa-solid fa-phone-volume" />
                {desc && desc.phone}
              </p>
              <p className=" text-white">
                <FontAwesomeIcon icon="fa-regular fa-envelope" />
                {desc && desc.email}
              </p>
            </div>
            <div className="flex  w-[50%] gap-8 justify-center items-center ">
              {socialLink &&
                socialLink.length > 0 &&
                socialLink.map((item, i) => (
                  <a key={i} href={item.link} target="_blank" rel="noreferrer">
                    <FontAwesomeCom
                      className="w-10 h-10   text-[var(--secondary-color)]"
                      icon={item.icon}
                    />
                  </a>
                ))}
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
