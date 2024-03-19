import { useState, useEffect } from "react";
import { testimonials } from "../constants";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { Link } from 'react-router-dom';
import Arrow from "../assets/svg/Arrow";
import Section from "./Section";
import Heading from "./Heading";

const Testimonials = () => {
  const [expandedTestimonial, setExpandedTestimonial] = useState(null);

  const toggleDetails = (testimonialId) => {
    if (expandedTestimonial === testimonialId) {
      setExpandedTestimonial(null); 
    } else {
      setExpandedTestimonial(testimonialId);  
    }
  };
  

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = useWindowSize().width <= 640 ? 1 : 3; 

  const truncateText = (text) => {
    const words = text.split(' ');
    const truncatedText = words.slice(0, 18).join(' ');
    const hasMore = words.length > 14;
    return { truncatedText: truncatedText + (hasMore ? "..." : ""), hasMore };
  };

  const totalItems = testimonials.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    setCurrentPage(Math.ceil(totalItems / itemsPerPage) === 0 ? 1 : 2);
  }, [totalItems, itemsPerPage]);

  const previousPage = () => {
    if (currentPage === 1) {
      setCurrentPage(totalPages); 
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage === totalPages) {
      setCurrentPage(1); 
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = ((currentPage - 1) * itemsPerPage) % totalItems;
  const endIndex = (startIndex + itemsPerPage) % totalItems;
  const currentItems =
    endIndex > startIndex
      ? testimonials.slice(startIndex, endIndex)
      : [...testimonials.slice(startIndex), ...testimonials.slice(0, endIndex)];

  return (
    <Section>
      <div className="container relative z-2">
      <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Explore testimonials from our satisfied members"
        />
        <div className="flex justify-center flex-wrap gap-10 mb-10">
          {currentItems.map((item) => {
            const {id, name, job, avatarUrl, testimonial, backgroundUrl} = item;
            const { truncatedText } = truncateText(testimonial);
            return (
              <Link to="/" key={id}>
                <div
                  className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url(${backgroundUrl})`,
                  }}
                  onClick={() => toggleDetails(id)}
                >
                  <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                    <h6 className="h6 mb-1">{name}</h6>
                    <span className="tagline-span mb-5">{job}</span>
                    {expandedTestimonial !== id && <p className="body-2 mb-6 text-n-3">{truncatedText}</p>}
                    
                    {expandedTestimonial === id && (
                      <>
                        
                        <p className="body-2 mb-6 text-n-3">{testimonial}</p>
                      </>
                    )}
                   
                    <div className="flex items-center mt-auto">
                      <img className="rounded-lg mr-7"
                        src={avatarUrl}
                        width={78}
                        height={78}
                        alt={name}
                      />
                      <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                      {expandedTestimonial === id ? "Back" : "Read more"}{" "}
                      </p>
                      <Arrow />
                    </div>
                  </div>

                  {item.light && <GradientLight />}

                  <div
                    className="absolute inset-0.5 bg-n-8"
                    style={{ clipPath: "url(#benefits)" }}
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-5">
                      {item.avatarUrl && (
                        <img
                          src={avatarUrl}
                          width={380}
                          height={362}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>

                  <ClipPath />
                </div>
              </Link>
            );
          })}
        </div>
        <div className="flex justify-between">
  <button 
    onClick={previousPage} 
    className="button mr-8 text-n-1/50 transition-colors hover:text-n-1"
  >
    Previous
  </button>
  <button 
    onClick={nextPage} 
    className="button mr-8 text-n-1/50 transition-colors hover:text-n-1"
  >
    Next
  </button>
</div>

      </div>
    </Section>
  );
};

export default Testimonials;
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
