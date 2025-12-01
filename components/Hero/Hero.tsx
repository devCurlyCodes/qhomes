import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center h-[100vh] w-[100vw]  bg-transparent md:h[-90vh] sm:h[-100vh]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="myvideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="tintbackground relative h-full w-full bg-black bg-opacity-20">
        <div className="container mx-auto relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:flex-row sm:w-[80vw] text-4xl   font-thin">
          QOLANI HOMES
        </div>
      </div>
    </section>
  );
};

export default Hero;
