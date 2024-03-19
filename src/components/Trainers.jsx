import { useState } from "react";
import { coaches } from "../constants";
// import { trainer1, trainer2,trainer3, trainer4, trainer5 } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { Gradient } from "./design/coach";
 

const Collaboration = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === coaches.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Section id="trainers">
      <div className="flex flex-wrap items-center container">
        <div className="max-w-[36rem] mr-15 mb-4">
          <h2 className="h2 mb-4 md:mb-8">
            Discover Our Trainers to Unlock The Secrets to Mastering Muay Thai
          </h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            <li className="mb-3 py-3">
              <div className="flex flex-wrap items-center">
                
                <div>
               
                  <div className="ml-5"><span className="tagline-span">&quot;{coaches[currentIndex].motto}&quot;</span>
                  <h5 className="h5 mb-5">{coaches[currentIndex].name}</h5>
                  </div>
                  <h6 className="body-2 mb-3">{coaches[currentIndex].experience}</h6>
                  
                  <h6 className="body-2">{coaches[currentIndex].accomplishment}</h6>
                 

                </div>
              </div>
            </li>
            
          </ul>
          <Button onClick={nextSlide} className="z-5">Find trainers</Button> 
        </div><Gradient/>

        <div className="relative min-h-[20rem] border border-n-1/10 rounded-3xl overflow-hidden">
<img src={coaches[currentIndex].picture} alt="Slide" className="object-cover w-full h-full opacity-45" /> 
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
