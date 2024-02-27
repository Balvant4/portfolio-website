import React from "react";
import { styles } from "../styles";
import Socialmedia from "./Socialmedia";

const Hero = () => {
  return (
    <section className="  w-full md:h-screen md:pb-0 pb-14 mx-auto  bg-hero-pattern bg-cover bg-no-repeat bg-center ">
      <div
        className={`${styles.paddingX}  inset-0 pt-5 md:pt-[5rem] max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-5`}
      >
        <div className=" flex flex-col justify-center items-center mt-5">
          <div className=" w-5 h-5 rounded-full bg-[#915eff]" />
          <div className=" w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]">Balvant</span>
            <p className={`${styles.heroSubText}`}>
              A Passionate Front-end React Developer
              <br className=" sm:block hidden" /> based in Vadodara Gurajat
            </p>
          </h1>
          <div>
            <Socialmedia />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
