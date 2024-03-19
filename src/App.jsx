import ButtonGradient from './assets/svg/ButtonGradient';
import Header from './components/Header';
import Hero from './components/Hero'
import Program from './components/Program';
import Trainers from "./components/Trainers"
import Gallery from './components/Gallery';
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Testimonials from './components/Testimonials';

 const App = () => {
   return (
     <>
       <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header /> 
        <Hero />
        <Program />
        <Trainers/>
        <Gallery/>
        <Pricing/>
        <Testimonials/> 
        <Footer/> 

       </div>

       <ButtonGradient/>
     </>
   );
}
 export default App