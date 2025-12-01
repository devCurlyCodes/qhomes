import Construction from "@/components/Construction/Construction";

import Hero from "@/components/Hero/Hero";
import Latest from "@/components/Latest/Latest";
import Listing from "@/components/Listings/Listing";
import Welcome from "@/components/Welcome/Welcome";
import React from "react";

export default function Home() {
  return (
    <main className="  min-h-screen  w-[100vw]  flex justify-center items-center flex-col overflow-hidden sm:px-10 px-5 ">
      <Hero />
      <Welcome />
      <Latest />
      <Construction />
      <Listing />
    </main>
  );
}
