import './App.css';

import Footer from './Layout/Footer';
import Header from './Layout/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import MyACHIEVEMENTS from './components/MyACHIEVEMENTS';
import MyPortfolio from './components/MyPortfolio';
import LeterNews from './components/LeterNews';
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
        {/* contact */}
        <section id="contact" className="section-contact 2xl:py-[80px] py-[70px]">
          <div
            className="banner text-center mb-[30px]"
            data-aos="fade-up"
            data-aos-duration={2000}
            data-aos-delay={300}>
            <span className="text-[14px] text-[#777]">FORM</span>
            <h2 className="text-center mt-[5px] 2xl:text-[35px] xl:text-[33px] lg:text-[30px] md:text-[26px] sm:text-[24px] text-[22px] font-bold">
              Get In <span className="text-[#7963e0]">TOUCH</span>
            </h2>
          </div>
          <form>
            <div className="flex flex-wrap justify-between items-center mx-auto mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-[320px]:px-[12px] px-6">
              <div className="m-b-minus-24px w-full">
                <div
                  className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]"
                  data-aos="fade-up"
                  data-aos-duration={2000}
                  data-aos-delay={300}>
                  <div className="border rounded-lg">
                    <div className="border-b">
                      <input
                        type="text"
                        className="appearance-none w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none rounded-t-lg"
                        id="fname"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="border-b">
                      <input
                        type="email"
                        className="appearance-none w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none"
                        id="umail"
                        placeholder="Email"
                      />
                    </div>
                    <div className="border-b">
                      <input
                        type="text"
                        className="appearance-none w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none"
                        id="phone"
                        placeholder="Phone"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="appearance-none w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none rounded-b-lg"
                        id="subject"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div className="mb-0">
                    <div className="mb-4">
                      <textarea
                        className="w-full border rounded-xl pl-4 pt-2 focus:outline-none"
                        id="exampleFormControlTextarea1"
                        rows={8}
                        placeholder="Message"
                        defaultValue={''}
                      />
                    </div>
                    <button
                      type="button"
                      className="text-white bg-[#7963e0] hover:bg-opacity-80 no-underline font-medium rounded-full text-sm px-8 py-2.5 mr-2">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
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
