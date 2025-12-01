import React from "react";
import WelcomeHeader from "./WelcomeHeader";
import WelcomeBody from "./WelcomeBody";

const Welcome = () => {
  return (
    <section
      id="welcome-section"
      className="relative bg-cover bg-center min-h-[90vh] w-[100vw]  flex flex-wrap flex-col items-center md:p-5 md:py-10 bg-gradient-to-b from-black via-black to-white space-y-12 py-10 ">
      <WelcomeHeader />
      <WelcomeBody />
    </section>
  );
};

export default Welcome;
