import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function HeroBanner() {
  const productSections = [
    {
      title: "Best Sellers",
      color: "yellow-50",
      textColor: "text-red-600",
      items: [
        { name: "Doon Valley Fada Coarse 908g", img: "/DoonValleyFadaCoarse.png" },
        { name: "Coriander Powder.png", img: "/corianderpowder.png" },
        { name: "Doon Valley Fada Coarse 908g", img: "/DoonValleyFadaCoarse.png" },
        { name: "Coriander Powder.png", img: "/corianderpowder.png" },
        { name: "Doon Valley Fada Coarse 908g", img: "/DoonValleyFadaCoarse.png" },
        { name: "Coriander Powder.png", img: "/corianderpowder.png" },
        { name: "Doon Valley Fada Coarse 908g", img: "/DoonValleyFadaCoarse.png" },
        { name: "Coriander Powder.png", img: "/corianderpowder.png" },
      ],
    },
    {
      title: "New Arrivals",
      color: "blue-50",
      textColor: "text-red-600",
      items: [
        { name: "Fresh Mango Pickle", img: "/products/new1.jpg" },
        { name: "Natural Honey", img: "/products/new2.jpg" },
      ],
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* ===== Hero Banner Section ===== */}
      <div className="mt-6 px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Big Banner */}
          <div className="md:col-span-2 h-[220px] md:h-[400px] relative rounded-2xl overflow-hidden shadow-2xl group hover:shadow-green-200 transition duration-300">
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showArrows={false}
              interval={3000}
            >
              {[
                {
                  src: "/ice-cream.png",
                  title: "Cool Off with Ice Creams",
                  desc: "Shop summer treats now",
                },
                {
                  src: "/water.png",
                  title: "Beat the Heat",
                  desc: "Refresh your cart",
                },
                {
                  src: "/water.png",
                  title: "Frozen Favorites",
                  desc: "Stock up today",
                },
              ].map((item, i) => (
                <div key={i} className="relative group">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-6 text-white">
                    <h2 className="text-xl md:text-2xl font-extrabold drop-shadow-lg">
                      {item.title}
                    </h2>
                    <p className="text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>

          {/* Right Small Sliders */}
          <div className="flex flex-col gap-6">
            {[
              {
                slides: [
                  { src: "/juices.png", label: "Fresh Juices" },
                  { src: "/product (1).jpg", label: "Mocktails" },
                ],
              },
              {
                slides: [
                  { src: "/frutis.jpg", label: "Daily Essentials" },
                  { src: "/juices.png", label: "Grocery Picks" },
                ],
              },
            ].map((slider, idx) => (
              <div
                key={idx}
                className="h-[100px] md:h-[190px] relative rounded-2xl overflow-hidden shadow-lg group"
              >
                <Carousel
                  autoPlay
                  infiniteLoop
                  showThumbs={false}
                  showStatus={false}
                  showArrows={false}
                  interval={2500}
                >
                  {slider.slides.map((item, i) => (
                    <div key={i} className="relative group">
                      <img
                        src={item.src}
                        alt={item.label}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition" />
                      <div className="absolute bottom-2 left-3 text-white">
                        <h3 className="font-semibold text-lg drop-shadow">{item.label}</h3>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Section 2: Weekly Specials Slider ===== */}
      <section className="mt-14 px-4 md:px-10">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-green-700 tracking-tight">
          Weekly Specials
        </h2>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} showArrows={false}>
          {["/special.png", "/speacial2.png"].map((src, i) => (
            <div
              key={i}
              className="h-[280px] md:h-[380px] rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={src}
                alt={`Special ${i + 1}`}
                className="w-full h-full object-cover transition duration-300"
              />
            </div>
          ))}
        </Carousel>
      </section>




      {/* ===== Section 3: Sweets Corner (Swiper) ===== */}

      <section className="py-24 px-4 md:px-10 bg-pink-50">
  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-red-600 text-center">
    Sweets Corner
  </h2>
  <Swiper
    modules={[Navigation, Autoplay]}
    slidesPerView={1}
    spaceBetween={20}
    navigation
    autoplay={{ delay: 4000 }}
    breakpoints={{
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    }}
    className="!pb-10"
  >
    {[
      {
        name: "Doon Valley Yellow Mustard Seeds 200g",
        image: "/YellowMustardSeeds.png",
      },
      {
        name: "Doon Valley Red Chilli Powder Ex Hot 400g",
        image: "/DoonValleyRedChilliPowderExHot400g.png",
      },
        {
        name: "Doon Valley Yellow Mustard Seeds 200g",
        image: "/YellowMustardSeeds.png",
      },
      {
        name: "Doon Valley Red Chilli Powder Ex Hot 400g",
        image: "/DoonValleyRedChilliPowderExHot400g.png",
      },
        {
        name: "Doon Valley Yellow Mustard Seeds 200g",
        image: "/YellowMustardSeeds.png",
      },
      {
        name: "Doon Valley Red Chilli Powder Ex Hot 400g",
        image: "/DoonValleyRedChilliPowderExHot400g.png",
      },
    
    ].map((product, i) => (
      <SwiperSlide key={i}>
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 h-72 flex flex-col justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg mb-4 w-full h-40 object-contain"
          />
          <h3 className="text-sm font-medium text-center">{product.name}</h3>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>


      

      {/* ===== Section 4-5: Best Sellers & New Arrivals ===== */}
      {productSections.map((section, index) => (
        <section
          key={index}
          className={`py-24 px-4 md:px-10 bg-${section.color}`}
        >
          <h2
            className={`text-2xl md:text-3xl font-bold mb-8 ${section.textColor} text-center`}
          >
            {section.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {section.items.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 h-72 flex flex-col justify-center"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="rounded-lg mb-4 h-40 object-contain"
                />
                <h3 className="text-lg font-semibold text-center">{item.name}</h3>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* ===== Section 6: Ways to Shop ===== */}
      <section className="py-16 px-4 md:px-10 bg-gradient-to-r from-green-50 via-green-100 to-green-50 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-green-800">
          Ways to Shop
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 text-lg font-medium">
          <div className="flex items-center gap-2 hover:scale-105 transition">
            Home Delivery
          </div>
          <div className="flex items-center gap-2 hover:scale-105 transition">
            Pick up in Store
          </div>
          <div className="flex items-center gap-2 hover:scale-105 transition">
            Free Delivery with <strong>FoodEase +</strong>
          </div>
        </div>
      </section>

      {/* ===== Section 7: Loyalty Rewards ===== */}
      <section className="py-16 px-4 md:px-10 bg-yellow-100 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-700">
          Loyalty Rewards
        </h2>
        <p className="text-md md:text-lg max-w-xl mx-auto mb-6 text-gray-700">
          Earn points on every purchase and redeem them for exclusive discounts and gifts!
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full shadow-lg transition transform hover:scale-105">
          Join Now
        </button>
      </section>
    </div>
  );
}
