import './App.css';

import Footer from './Layout/Footer';
import Header from './Layout/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import MyACHIEVEMENTS from './components/MyACHIEVEMENTS';
import MyPortfolio from './components/MyPortfolio';
import LeterNews from './components/LeterNews';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <div>
        {/* Loader */}
        <div id="bx-overlay">
          <span className="loader" />
        </div>
        <Header />
        <HeroSection />
        <AboutUs />
        <MyACHIEVEMENTS />
        <MyPortfolio />

        <LeterNews />
        <Contact />
        <Footer />
        {/* scroll Top */}
        <div
          id="scrollup"
          className="fixed bg-[#7963e0] text-white rounded-full flex justify-center text-center items-center p-2 right-6 cursor-pointer bottom-6 h-10 w-10 z-20">
          <i className="fa fa-arrow-up" aria-hidden="true" />
        </div>
      </div>
    </>
  );
}
export default App;
