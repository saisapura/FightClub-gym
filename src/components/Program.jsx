import { useState } from "react";
import { programs } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";

import ClipPath from "../assets/svg/ClipPath";

const Program = () => {
  const truncateText = (text) => {
    const words = text.split(" ");
    const truncatedText = words.slice(0, 14).join(" ");
    const hasMore = words.length > 14;
    return { truncatedText: truncatedText + (hasMore ? "..." : ""), hasMore };
  };

  const [expandedProgram, setExpandedProgram] = useState(null); 

  const toggleDetails = (programId) => {
    if (expandedProgram === programId) {
      setExpandedProgram(null); 
    } else {
      setExpandedProgram(programId); 
    }
  };

  return (
    <Section id="features"> 
      
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Muay Thai Training Programs"
        />

        <div className="flex flex-wrap gap-10">
          {programs.map((item) => {
            const { id, title, text, duration, frequency, focus } = item;
        
            
            const { truncatedText } = truncateText(item.text);

            return (
              <div key={id}>
                <div
                  className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] hover:scale-105 transition-transform duration-300"
                 
                  onClick={() => toggleDetails(id)}
                >
                  <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                    <h5 className="h5 mb-5">{title}</h5>
                    {expandedProgram !== id && ( 
                      <p className="body-2 mb-6 text-n-3">{truncatedText}</p>
                    )}

                    {expandedProgram === id && ( 
                      <>
                        <p className="body-2 mb-5 text-n-2">{text}</p>
                        <p className="body-2 mb-5 text-n-2 ">Training duration : {duration}</p>
                        <p className="body-2 mb-5 text-n-2 ">Duration per session : {frequency}</p>
                        <p className="body-2 mb-5 text-purple-500 font-semibold">Focus:</p>
                        <ul className="list-disc ml-8">
                          {focus.map((item, index) => (
                            <li key={index}>
                              {Object.entries(item).map(([key, value]) => (
                                <p key={key} className="body-2 mb-2 text-n-1">
                                  <span className="body-2 mb-5 text-n-2">{key}&nbsp; : &nbsp;</span>
                                  {value}
                                </p>
                              ))}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    <div className="flex items-center mt-auto">
                      {expandedProgram !== id && ( 
                        <img
                          src={item.iconUrl}
                          width={48}
                          height={48}
                          alt={item.title}
                        />
                     
                      )}
                      <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                        {expandedProgram === id ? "Back" : "Explore more"}{" "}
                      </p>
                      <Arrow />   
                    </div>
                  </div>

               

                  <div className="absolute inset-0.5 bg-n-8 border border-purple-400 rounded-3xl opacity-15 overflow-hidden">

  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-70 cursor-pointer">
    {item.imageUrl && (
      <img
        src={item.imageUrl}
        width={380}
        height="auto"
        alt={item.title}
        className="w-full h-full object-cover"
      />
    )}
  </div>
  
</div>


                  <ClipPath />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Program;
