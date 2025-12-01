import React from "react";
import Location from "./Location";
import Socials from "./Socials";
import Company from "./Company";
import Explore from "./Explore";

const FooterContainer = () => {
  return (
    <section
      id="footer-section"
      className="relative bg-cover bg-center min-h-[50vh] w-[100vw] bg-footer flex flex-wrap flex-col items-center md:p-5 md:py-10  py-10 ">
      <div className="semiContainer w-full sm-md:w-[90%] md:w-[80%]  flex flex-col md:flex-row">
        <Location />
        <Socials />
        <Company />
        <Explore />
      </div>
    </section>
  );
};

export default FooterContainer;
