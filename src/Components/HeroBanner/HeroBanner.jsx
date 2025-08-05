import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HeroBanner() {
  return (
    <div>
      {/* ===== Hero Banner Section ===== */}
      <div className="mt-6 px-4 md:px-10 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Big Banner Slider */}
          <div className="md:col-span-2 h-[220px] md:h-[400px] relative rounded-2xl overflow-hidden shadow-lg">
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showArrows={false}
              interval={3000}
            >
              <div className="relative group">
                <img
                  src="/ice-cream.png"
                  alt="Main Banner 1"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition duration-300" />
                <div className="absolute bottom-3 left-5 text-white">
                  <h2 className="text-xl md:text-2xl font-bold drop-shadow">Cool Off with Ice Creams</h2>
                  <p className="text-xs md:text-sm mt-1 drop-shadow">Shop summer treats now</p>
                </div>
              </div>
              <div className="relative group">
                <img
                  src="/water.png"
                  alt="Main Banner 2"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition duration-300" />
                <div className="absolute bottom-3 left-5 text-white">
                  <h2 className="text-xl md:text-2xl font-bold drop-shadow">Beat the Heat</h2>
                  <p className="text-xs md:text-sm mt-1 drop-shadow">Refresh your cart</p>
                </div>
              </div>
              <div className="relative group">
                <img
                  src="/water.png"
                  alt="Main Banner 3"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition duration-300" />
                <div className="absolute bottom-3 left-5 text-white">
                  <h2 className="text-xl md:text-2xl font-bold drop-shadow">Frozen Favorites</h2>
                  <p className="text-xs md:text-sm mt-1 drop-shadow">Stock up today</p>
                </div>
              </div>
            </Carousel>
          </div>

          {/* Right Small Banners */}
          <div className="flex flex-col gap-6">
            {/* Juices Slider */}
            <div className="h-[100px] md:h-[190px] rounded-2xl overflow-hidden relative shadow-md">
              <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showArrows={false}
                interval={2500}
              >
                <div className="relative group">
                  <img
                    src="/juices.png"
                    alt="Juice Banner 1"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition" />
                  <div className="absolute bottom-2 left-3 text-white">
                    <h3 className="font-semibold text-base md:text-lg drop-shadow">Fresh Juices</h3>
                  </div>
                </div>
                <div className="relative group">
                  <img
                    src="/product (1).jpg"
                    alt="Juice Banner 2"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition" />
                  <div className="absolute bottom-2 left-3 text-white">
                    <h3 className="font-semibold text-base md:text-lg drop-shadow">Mocktails</h3>
                  </div>
                </div>
              </Carousel>
            </div>

            {/* Products Slider */}
            <div className="h-[100px] md:h-[190px] rounded-2xl overflow-hidden relative shadow-md">
              <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showArrows={false}
                interval={2500}
              >
                <div className="relative group">
                  <img
                    src="/frutis.jpg"
                    alt="Product Banner 1"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition" />
                  <div className="absolute bottom-2 left-3 text-white">
                    <h3 className="font-semibold text-base md:text-lg drop-shadow">Daily Essentials</h3>
                  </div>
                </div>
                <div className="relative group">
                  <img
                    src="/juices.png"
                    alt="Product Banner 2"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition" />
                  <div className="absolute bottom-2 left-3 text-white">
                    <h3 className="font-semibold text-base md:text-lg drop-shadow">Grocery Picks</h3>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Section 2: Slider (Specials) ===== */}
      <section className="mt-12 px-4 md:px-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-green-700">
          Weekly Specials
        </h2>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={false}
        >
          <div className="h-[360px] md:h-[450px] overflow-hidden rounded-lg">
            <img
              src="/special.png"
              alt="Special 1"
              className="w-full h-full object-cover shadow"
            />
          </div>
          <div className="h-[360px] md:h-[450px] overflow-hidden rounded-lg">
            <img
              src="/speacial2.png"
              alt="Special 2"
              className="w-full h-full object-cover shadow"
            />
          </div>
        </Carousel>
      </section>
    </div>
  );
}
