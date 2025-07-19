import React from 'react';
import BannerImage from '../../assets/banner.jpg';

const Banner = () => {
  return (
    <section
      className="h-[60vh] mt-[14vh] bg-cover bg-top"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="max-w-[1300px] mx-auto px-12 h-full flex flex-col justify-center gap-3">
        <h1 className="text-red-600 text-9xl uppercase font-bold tracking-tight">Big Sale!</h1>
        <p className="text-zinc-800 text-3xl">Up to 50% off - Limited Time Only</p>
        <h3 className="text-6xl font-bold text-zinc-800 flex gap-x-3 mt-5">
          <span className="text-white bg-zinc-800 p-3">00</span>
          <span className="text-white bg-zinc-800 p-3">00</span>
          <span className="text-white bg-zinc-800 p-3">00</span>
        </h3>
      </div>
    </section>
  );
};

export default Banner;
