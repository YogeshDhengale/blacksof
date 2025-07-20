import React from "react";

const HeroSection = () => {
  return (
    <div className="font-sans relative items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* Video section */}
      <div className="absolute inset-0">
        <video
          src="/assets/hero.mp4"
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
        />
      </div>
      {/* Video Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white">
        <div className="max-w-3xl px-6 mt-8 mx-auto text-center">
        <p className="sg-translate font-light pt-2 pb-3  text-lg  xl:text-xl 2xl:text-2xl block leading-snug">
          Driven by performance
        </p>
        <h1 className="sg-translate font-medium leading-tight pb-2 text-5xl">
          <span className="font-semibold">Soft trims and <span className="text-primary">NVH solutions</span></span>{" "}
          for seamless rides
        </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
