import React from "react";
import LocationTitle from "./LocationTitle";
import LocationBody from "./LocationBody";

const OurLocation = () => {
  return (
    <section
      id="ourlocation-section"
      className="relative bg-cover bg-center min-h-[90vh] w-[100vw]  flex flex-wrap flex-col items-center md:p-5 md:py-10  space-y-12 py-10">
      <div className="welcomeHeading text-black w-[100%] md:w-[80%]  flex justify-center flex-col    items-center mt-5 ">
        <LocationTitle />
        <LocationBody />
      </div>
    </section>
  );
};

export default OurLocation;
