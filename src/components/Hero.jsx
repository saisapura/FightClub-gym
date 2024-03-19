import {hero } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { useRef } from "react";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section id="home"
      className="pt-[8rem] -mt-[5.25rem]"
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >   
      <div className="container relative" ref={parallaxRef}>
     
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[.25rem] overflow-hidden">
          <h1 className="h1 mb-12"> 
          Welcome to Muay Thai FightClub Gym
          <img
                src={hero}
                className="w-full mt-12 relative min-auto
                 border border-n-1/10 rounded-3xl overflow-hidden"
                width={1440}
                height={1800}
                alt="hero"
              />
            
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-12
           text-n-2 lg:mb-12">
          In the heart of relentless training and expert guidance, we sculpt champions. Join us in the pursuit of greatness, where every session is a thrilling ascent towards your ultimate potential.
          </p>
          <Button className="mt-8" href="/pricing" white>
            Get started
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
