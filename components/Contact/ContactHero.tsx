import React from "react";
import { ContactForm } from "./ContactForm";
import ContactDeco from "./ContactDeco";

const ContactHero = () => {
  return (
    <section className="relative bg-cover bg-center min-h-[100vh] w-[100vw]  bg-transparent md:h[-90vh] sm:h[-100vh]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="contactpage.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="tintbackground relative min-h-[100vh] w-full bg-black bg-opacity-70 flex items-center justify-center flex-wrap ">
        <div className="container  relative z-10 flex flex-col items-center justify-center h-full text-center  w-full  md:flex-row md:w-[80vw] py-10 ">
          <div className="messageAway sm-md:w-[70%] md:w-1/2 md:h-full flex items-center justify-center">
            <ContactDeco />
          </div>
          <div className="contactform w-full   sm-md:w-[80%] md:w-1/2 md:h-full flex items-center justify-center">
            <div className="contactUs  flex items-center justify-center">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
