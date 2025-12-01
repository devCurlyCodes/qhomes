import React from "react";
import PrimaryBtn from "../Buttons/PrimaryBtn";

import ListingHeader from "./ListingHeader";
import ListingsCard from "./ListingCard";

const Listing = () => {
  return (
    <section
      id="listings"
      className="relative bg-cover bg-center min-h-[90vh] w-[100vw]  flex flex-wrap flex-col items-center md:p-5 md:py-10  space-y-12 py-10">
      <div className="welcomeHeading text-black w-[100%] md:w-[80%]  flex flex-col   items-center mt-5  ">
        <ListingHeader />
        <div className="latestImages w-full flex  flex-col  flex-wrap md:flex-row items-center min-h-[80vh] px-2 md:px-5">
          <ListingsCard />
          <ListingsCard />
          <ListingsCard />
          <ListingsCard />
          <ListingsCard />
          <ListingsCard />
          <ListingsCard />
          <ListingsCard />
        </div>

        <div className="pagination mt-5  w-[100%] justify-center flex flex-row items-center space-x-4 ">
          <PrimaryBtn label={" 1 "} />
          <PrimaryBtn label={" 2 "} />
          <PrimaryBtn label={" 3 "} />
          <PrimaryBtn label={" 4 "} />
          <PrimaryBtn label={" 5 "} />
        </div>
      </div>
    </section>
  );
};

export default Listing;
