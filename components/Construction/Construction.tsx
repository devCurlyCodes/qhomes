import React from "react";

import ConstructionLeft from "./ConstructionLeft";
import ConstructionSecond from "./ConstructionSecond";
import ConstructionRight from "./ConstructionRight";

import ConstructionBtn from "./ConstructionBtn";

const Construction = () => {
  return (
    <section
      id="welcome-section"
      className="relative bg-cover bg-center min-h-[90vh] w-[100vw]  flex flex-wrap flex-col items-center md:p-5 md:py-10  space-y-12 py-10">
      <div className="welcomeHeading text-black w-[100%] md:w-[80%]  flex flex-col md:flex-row items-center mt-5  ">
        <ConstructionLeft />
        <ConstructionSecond />
        <ConstructionRight />
        <ConstructionBtn />
      </div>
    </section>
  );
};

export default Construction;
