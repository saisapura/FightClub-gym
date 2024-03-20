import { useState } from "react";
import Section from "./Section";
import Button from "./Button";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setIsSubmitted(true);
  };

  return (
    <Section id="contact-us">
      <div className="container relative flex justify-center">
        <footer className="container mx-auto flex flex-wrap justify-center gap-6 lg:justify-between mb-24">
          {/* Newsletter Sign up */}
          <div className="w-full max-w-md mb-10">
            <h3 className="text-lg font-semibold mb-3">Start Your Journey</h3>
            <form onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Your Email" 
                className="bg-gray-700 text-white px-4 py-2 rounded-lg w-full mb-2" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                disabled={isSubmitted} 
              />
              <Button type="submit" className="w-full">
                {isSubmitted ? 'Submitted' : 'Subscribe'}
              </Button>
            </form>
          </div>
          {/* Contact Information */}
          <div className="w-full max-w-md">
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <div className="body-2 text-n-2"> 
            <p>MuayThai FightClub</p>
            <p>123 Main Street, City, Country</p>
            <p>Phone: 123-456-7890</p>
            <p>Email: info@muaythaifightclub.com</p>  </div>
           
          </div>
        </footer>
      </div>
      {/* Copyright Information */}
      <div className="container mx-auto text-center">
        <p className='tagline-span'>&copy; {new Date().getFullYear()} Muay Thai FightClub Gym. All Rights Reserved</p>
      </div>
    </Section>
  );
};

export default Contact;
