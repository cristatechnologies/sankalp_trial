const ThreeImageMenu = () => {
  return (
    <>
      <div className="h-auto w-full grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-24">
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          <FoodCard
            image="assets/sankalp/curries.png"
            title="SPICY AWESOME CURRIES"
            categories="CURRIES, PANEER"
          />
        </div>
        <div data-aos="fade-up" data-aos-duration="1100" data-aos-delay="200">
          <FoodCard
            image="assets/sankalp/idli.avif"
            title="SOFT SPONGY IDLIS"
            categories="IDLI, SAMBAR, CHUTNEY"
          />
        </div>
        <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
          <FoodCard
            image="assets/sankalp/dosa-pic.png"
            title="CRUNCHY TASTY DOSAS"
            categories="DOSA, CHUTNEY, PODI "
          />
        </div>
      </div>
    </>
  );
};

export default ThreeImageMenu;

const FoodCard = ({ image, title, categories }) => {
  return (
    <div className="relative group">
      <div className="relative">
        <img src={image} alt={title} className="w-full rounded-lg" />

        <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-4 left-1/2 -translate-x-1/2 bg-white p-4 rshadow-lg min-w-[300px]">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600">{categories}</p>
        </div>
      </div>
    </div>
  );
};

// Usage:
