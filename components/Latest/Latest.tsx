import React from "react";
import PrimaryBtn from "../Buttons/PrimaryBtn";

import LatestText from "./LatestText";
import LatestBody from "./LatestBody";

const Latest = () => {
  return (
    <section
      id="welcome-section"
      className="relative bg-cover bg-center min-h-[90vh] w-[100vw]  flex flex-wrap flex-col items-center md:p-5 md:py-10  space-y-12 py-10">
      <div className="welcomeHeading text-black w-[100%] md:w-[80%]  flex flex-col md:flex-row items-center mt-5  ">
        <LatestText />
        <LatestBody />
        <div className="bottomBtn mt-5  w-[80%] justify-start  md:hidden">
          <PrimaryBtn label={"View Latest From Qolani"} />
        </div>
      </div>
    </section>
  );
};

export default Latest;
