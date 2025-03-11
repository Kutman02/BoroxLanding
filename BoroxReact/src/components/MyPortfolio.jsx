import portfolio1 from '../assets/img/portfolio/img-1.jpg';
import portfolio2 from '../assets/img/portfolio/img-2.jpg';
import portfolio3 from '../assets/img/portfolio/img-3.jpg';
import portfolio4 from '../assets/img/portfolio/img-4.jpg';

function MyPortfolio() {
  return (
    <>
      {/* Портфолио */}
      <section id="portfolio" className="section-Portfolio 2xl:py-[80px] py-[70px]">
        <div
          className="banner text-center mb-[30px]"
          data-aos="fade-up"
          data-aos-duration={2000}
          data-aos-delay={300}>
          <span className="text-[14px] text-[#777]">ПОРТФОЛИО</span>
          <h2 className="text-center mt-[5px] 2xl:text-[35px] xl:text-[33px] lg:text-[30px] md:text-[26px] sm:text-[24px] text-[22px] font-bold">
            Моё <span className="text-[#7963e0]"> ПОРТФОЛИО</span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-between items-center mx-auto mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-[320px]:px-[12px] px-6">
          <div className="m-b-minus-24px w-full">
            <div
              className="portfolio-content"
              id="MixItUpDA2FB7"
              data-aos="fade-up"
              data-aos-duration={2000}
              data-aos-delay={600}>
              <div className="portfolio-tabs mb-[30px]">
                <ul className="2xl:flex xl:flex md:flex sm:block place-content-center text-center">
                  <li
                    className="text-[14px] text-[#17181c] 2xl:mx-[10px] sm:mx-[0px] px-[10px] leading-[11px] font-semibold hover:text-[#7963e0] cursor-pointer inline-block active"
                    data-filter="all">
                    ВСЕ
                  </li>
                  <li
                    className="text-[14px] text-[#17181c] 2xl:mx-[10px] sm:mx-[0px] px-[10px] leading-[11px] font-semibold hover:text-[#7963e0] cursor-pointer inline-block"
                    data-filter=".design">
                    ДИЗАЙН
                  </li>
                  <li
                    className="text-[14px] text-[#17181c] 2xl:mx-[10px] sm:mx-[0px] px-[10px] leading-[11px] font-semibold hover:text-[#7963e0] cursor-pointer inline-block"
                    data-filter=".development">
                    РАЗРАБОТКА
                  </li>
                  <li
                    className="text-[14px] text-[#17181c] 2xl:mx-[10px] sm:mx-[0px] px-[10px] leading-[11px] font-semibold hover:text-[#7963e0] cursor-pointer inline-block"
                    data-filter=".graphics">
                    ГРАФИКА
                  </li>
                  <li
                    className="text-[14px] text-[#17181c] 2xl:mx-[10px] sm:mx-[0px] px-[10px] leading-[11px] font-semibold hover:text-[#7963e0] cursor-pointer inline-block"
                    data-filter=".templates">
                    ШАБЛОНЫ
                  </li>
                </ul>
              </div>
              <div className="portfolio-content-items">
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
                  <div className="mix graphics templates">
                    <div className="portfolio-img truncate rounded-2xl relative">
                      <img
                        src={portfolio1}
                        alt="графика"
                        className="w-full transform hover:bg-blue-600 transition duration-500 hover:-rotate-12 hover:scale-125"
                      />
                      <h3 className="top-contain absolute top-[15px] right-[15px]">
                        <span className="bg-black rounded-full text-white font-normal text-[12px] px-2 py-1">
                          3D Графика
                        </span>
                        <span className="bg-black rounded-full text-white font-normal text-[12px] px-2 py-1">
                          Шаблоны
                        </span>
                      </h3>
                      <div className="bottom-contain absolute bottom-4 left-4 right-4">
                        <div className="overlay-info px-4 py-2 bg-black bg-opacity-60 rounded-xl grid grid-cols-2 gap-[30px] place-content-between">
                          <a href="#" className="text-white text-sm flex items-center">
                            Nitro - Автосервис
                          </a>
                          <a
                            href="assets/img/portfolio/img-1.jpg"
                            data-fancybox="gallery"
                            className="text-white text-sm grid justify-items-end">
                            <p className="hidden">.</p>
                            <span className="bg-[#7963e0] h-8 w-8 flex justify-center items-center rounded-md">
                              <i className="fa-solid fa-arrow-right" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mix design">
                    <div className="portfolio-img truncate rounded-2xl relative">
                      <img
                        src={portfolio2}
                        alt="дизайн"
                        className="w-full transform hover:bg-blue-600 transition duration-500 hover:-rotate-12 hover:scale-125"
                      />
                      <h3 className="top-contain absolute top-[15px] right-[15px]">
                        <span className="bg-black rounded-full font-normal text-white text-[12px] px-2 py-1">
                          Веб-дизайн
                        </span>
                      </h3>
                      <div className="bottom-contain absolute bottom-4 left-4 right-4">
                        <div className="overlay-info px-4 py-2 bg-black bg-opacity-60 rounded-xl grid grid-cols-2 gap-[30px] place-content-between">
                          <a href="#" className="text-white text-sm flex items-center">
                            Борос - Искусственный интеллект
                          </a>
                          <a
                            href="assets/img/portfolio/img-2.jpg"
                            data-fancybox="gallery"
                            className="text-white text-sm grid justify-items-end">
                            <p className="hidden">.</p>
                            <span className="bg-[#7963e0] h-8 w-8 flex justify-center items-center rounded-md">
                              <i className="fa-solid fa-arrow-right" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mix design">
                    <div className="portfolio-img truncate rounded-2xl relative">
                      <img
                        src={portfolio3}
                        alt="дизайн"
                        className="w-full transform hover:bg-blue-600 transition duration-500 hover:-rotate-12 hover:scale-125"
                      />
                      <h3 className="top-contain absolute top-[15px] right-[15px]">
                        <span className="bg-black rounded-full font-normal text-white text-[12px] px-2 py-1">
                          Веб-дизайн
                        </span>
                      </h3>
                      <div className="bottom-contain absolute bottom-4 left-4 right-4">
                        <div className="overlay-info px-4 py-2 bg-black bg-opacity-60 rounded-xl grid grid-cols-2 gap-[30px] place-content-between">
                          <a href="#" className="text-white text-sm flex items-center">
                            Мила - Виртуальная реальность
                          </a>
                          <a
                            href="assets/img/portfolio/img-3.jpg"
                            data-fancybox="gallery"
                            className="text-white text-sm grid justify-items-end">
                            <p className="hidden">.</p>
                            <span className="bg-[#7963e0] h-8 w-8 flex justify-center items-center rounded-md">
                              <i className="fa-solid fa-arrow-right" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mix development">
                    <div className="portfolio-img truncate rounded-2xl relative">
                      <img
                        src={portfolio4}
                        alt="разработка"
                        className="w-full transform hover:bg-blue-600 transition duration-500 hover:-rotate-12 hover:scale-125"
                      />
                      <h3 className="top-contain absolute top-[15px] right-[15px]">
                        <span className="bg-black rounded-full font-normal text-white text-[12px] px-2 py-1">
                          Разработка
                        </span>
                      </h3>
                      <div className="bottom-contain absolute bottom-4 left-4 right-4">
                        <div className="overlay-info px-4 py-2 bg-black bg-opacity-60 rounded-xl grid grid-cols-2 gap-[30px] place-content-between">
                          <a href="#" className="text-white text-sm flex items-center">
                            Sen - Сайт отеля
                          </a>
                          <a
                            href="assets/img/portfolio/img-4.jpg"
                            data-fancybox="gallery"
                            className="text-white text-sm grid justify-items-end">
                            <p className="hidden">.</p>
                            <span className="bg-[#7963e0] h-8 w-8 flex justify-center items-center rounded-md">
                              <i className="fa-solid fa-arrow-right" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mix templates design">
                    <div className="portfolio-img truncate rounded-2xl relative">
                      <img
                        src={portfolio1}
                        alt="шаблоны"
                        className="w-full transform hover:bg-blue-600 transition duration-500 hover:-rotate-12 hover:scale-125"
                      />
                      <h3 className="top-contain absolute top-[15px] right-[15px]">
                        <span className="bg-black rounded-full font-normal text-white text-[12px] px-2 py-1">
                          Шаблоны
                        </span>
                        <span className="bg-black rounded-full font-normal text-white text-[12px] px-2 py-1">
                          Веб-дизайн
                        </span>
                      </h3>
                      <div className="bottom-contain absolute bottom-4 left-4 right-4">
                        <div className="overlay-info px-4 py-2 bg-black bg-opacity-60 rounded-xl grid grid-cols-2 gap-[30px] place-content-between">
                          <a href="#" className="text-white text-sm flex items-center">
                            Ekka - Шаблон интернет-магазина
                          </a>
                          <a
                            href="assets/img/portfolio/img-1.jpg"
                            data-fancybox="gallery"
                            className="text-white text-sm grid justify-items-end">
                            <p className="hidden">.</p>
                            <span className="bg-[#7963e0] h-8 w-8 flex justify-center items-center rounded-md">
                              <i className="fa-solid fa-arrow-right" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mix development graphics">
                    <div className="portfolio-img truncate rounded-2xl relative">
                      <img
                        src={portfolio2}
                        alt="разработка"
                        className="w-full transform hover:bg-blue-600 transition duration-500 hover:-rotate-12 hover:scale-125"
                      />
                      <h3 className="top-contain absolute top-[15px] right-[15px]">
                        <span className="bg-black rounded-full font-normal text-white text-[12px] px-2 py-1">
                          Разработка
                        </span>
                        <span className="bg-black rounded-full font-normal text-white text-[12px] px-2 py-1">
                          3D Графика
                        </span>
                      </h3>
                      <div className="bottom-contain absolute bottom-4 left-4 right-4">
                        <div className="overlay-info px-4 py-2 bg-black bg-opacity-60 rounded-xl grid grid-cols-2 gap-[30px] place-content-between">
                          <a href="#" className="text-white text-sm flex items-center">
                            Bukki - Технические разработки
                          </a>
                          <a
                            href="assets/img/portfolio/img-2.jpg"
                            data-fancybox="gallery"
                            className="text-white text-sm grid justify-items-end">
                            <p className="hidden">.</p>
                            <span className="bg-[#7963e0] h-8 w-8 flex justify-center items-center rounded-md">
                              <i className="fa-solid fa-arrow-right" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default MyPortfolio;
