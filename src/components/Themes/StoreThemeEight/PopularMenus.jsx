import ReactStars from "react-rating-stars-component";

const PopularMenus = () => {
  const menuItems = [
    {
      id: 1,
      name: "IDLIs",
      rating: 4.5,
      image: "/assets/sankalp/idli.avif",
      price: "$11",
    },
    {
      id: 2,
      name: "PANEER TIKKA",
      rating: 4.0,
      image: "/assets/sankalp/curries.png",
      price: "$11",
    },
    {
      id: 3,
      name: "Crispy Dosa",
      rating: 4.7,
      image: "/assets/sankalp/dosa-pic.png",
      price: "$11",
    },
    {
      id: 4,
      name: "crispy vada",
      rating: 4.2,
      image: "/assets/sankalp/medu-vada.png",
      price: "$11",
    },
  ];
  
  return (
    <>
      <div className="w-full px-4 ">
        <div className="flex flex-col items-center tracking-wide gap-6">
          <p className="text-[var(--primary-color)] text-3xl capitalize">
            popular dishes
          </p>
          <h1 className="text-[var(--secondary-text-color)] text-5xl capitalize">
            explore popular menus
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md gap-6 px-4">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="aspect-[12/16] border-2 hover:bg-[#f4f1ea] flex-col items-center transition-all duration-300 ease-in-out"
            >
              <img src={item.image} alt={item.name} />
              <div className="flex justify-center pt-4">
                <ReactStars
                  count={5}
                  value={item.rating}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                  isHalf={true}
                />
              </div>
              <h2 className="text-semibold tracking-wider text-3xl text-center pt-2">
                {item.name}
              </h2>
              <h3 className="text-[var(--primary-color)] text-semibold tracking-wider text-xl text-center pt-2">
                {item.price}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularMenus;
