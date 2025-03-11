import shape1 from '../assets/img/shape/shape-1.png';
import shape2 from '../assets/img/shape/shape-2.png';
import shape3 from '../assets/img/shape/shape-3.png';
import shape4 from '../assets/img/shape/shape-4.png';
import shape5 from '../assets/img/shape/shape-5.png';
import shape6 from '../assets/img/shape/shape-6.png';

import heroShape from '../assets/img/shape/hero-shape.png';
import icon1 from '../assets/img/service/icon-1.png';
import icon2 from '../assets/img/service/icon-2.png';
import icon3 from '../assets/img/service/icon-3.png';
import homeGirl from '../assets/img/home/girl.png';
// Объявляем компонент как обычно, просто меняем текстовый контент на русский

{
  /* Тексты для перевода в return:
"Hello, My name is" -> "Здравствуйте, меня зовут"
"lsabelle Ryal" -> "Изабель Райал"
"i'm A web Devloper" -> "Я веб-разработчик"
"Lorem ipsum..." -> "Добро пожаловать на мой сайт-портфолио, где я могу продемонстрировать свои навыки"
"Hire me" -> "Нанять меня"
"BEST IT SERVICE" -> "ЛУЧШИЙ IT СЕРВИС"
"It Industries We're Offering" -> "IT-услуги, которые мы предлагаем"
"Graphics design" -> "Графический дизайн"
"Devlopment" -> "Разработка"
"SEO Friendly" -> "SEO оптимизация"
"There are many variations..." -> "У нас есть большой опыт в этой области, и мы гарантируем высокое качество выполнения работ."
*/
}
function HeroSection() {
  return (
    <>
      {/* hero section */}
      <section id="home" className="section-hero bg-[#f6f8ff] relative">
        <img
          className="shape1 absolute w-12 left-72 bottom-36 parallax sm:block hidden"
          src={shape1}
          alt="shape-1"
        />
        <img
          className="shape2 absolute w-12 top-72 right-32 parallax top sm:block hidden"
          src={shape2}
          alt="shape2"
        />
        <img
          className="shape3 absolute w-12 top-48	left-96 parallax left top sm:block hidden"
          src={shape3}
          alt="shape3"
        />
        <img
          className="shape4 absolute w-6 bottom-72 left-24 parallax left sm:block hidden"
          src={shape4}
          alt="shape-4"
        />
        <img
          className="shape5 absolute w-12 bottom-48 right-12 parallax bottom sm:block hidden"
          src={shape5}
          alt="shape5"
        />
        <div className="flex flex-wrap justify-between items-center mx-auto mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] py-[80px] px-4">
          <div
            className="w-full 2xl:h-[90vh] lg:h-[80vh] h-[70vh] max-[320px]:h-[50vh] flex items-center px-2 2xl:max-w-lg xl:max-w-lg lg:max-w-lg lg:w-1/2 lg:mx-0 md:max-w-lg md:w-1/2 md:mx-0 2xl:w-1/2 xl:w-1/2 sm:items-center"
            data-aos="fade-up"
            data-aos-duration={2000}>
            <div className="text-center 2xl:text-left xl:text-left lg:text-left md:text-left h-72">
              <span className="text-[#7963e0] text-[18px] font-bold">Здравствуйте, меня зовут</span>
              <h1 className="text-dark-800 2xl:text-[60px] xl:text-[55px] lg:text-[50px] md:text-[45px] text-[40px] font-bold">
                Кутманбек
              </h1>
              <h2 className="py-4 text-dark-800 text-[20px] font-bold">Я веб-разработчик</h2>
              <p className="pt-2 text-gray-500 text-base">
                Добро пожаловать на мой сайт-портфолио, где я могу продемонстрировать свои навыки
              </p>
              <button
                type="button"
                className="text-white mt-8 bg-[#7963e0] hover:bg-opacity-80 no-underline font-medium rounded-full text-sm px-8 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700">
                Нанять меня
              </button>
            </div>
          </div>
          <div className="w-1/2 hidden px-2 2xl:block xl:block lg:block md:block z-10">
            <img src={homeGirl} alt="girl" className="max-h-full" />
          </div>
        </div>
        <div className="relative">
          <img
            src={heroShape}
            alt="hero-shape"
            className="absolute bottom-0 left-0 right-0 w-full z-10 bg-center bg-cover"
          />
        </div>
      </section>
      {/* service */}
      <section id="service" className="2xl:py-[80px] py-[70px] bg-white relative">
        <div data-aos="fade-up" data-aos-duration={2000} data-aos-delay={300}>
          <img src={shape6} alt="shape6" className="absolute w-12 h-12 top-28 right-40" />
        </div>
        <div
          className="banner text-center mb-[30px] px-6"
          data-aos="fade-up"
          data-aos-duration={2000}
          data-aos-delay={300}>
          <span className="text-[14px] text-[#777]">ЛУЧШИЙ IT СЕРВИС</span>
          <h2 className="text-center mt-[5px] 2xl:text-[35px] xl:text-[33px] lg:text-[30px] md:text-[26px] sm:text-[24px] text-[22px] font-bold">
            IT-услуги, которые мы <span className="text-[#7963e0]">предлагаем</span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-between items-center mx-auto mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-[320px]:px-[12px] px-6">
          <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-[30px]">
            <div
              className="transition-all rounded flex justify-start items-start"
              data-aos="fade-up"
              data-aos-duration={2000}
              data-aos-delay={300}>
              <div className="pr-6 border-r border-[#7963e0] max-[480px]:hidden">
                <h6 className="2xl:text-[50px] lg:text-[40px] text-[35px] font-bold text-[#7963e0] 2xl:w-[60px] xl:w-[60px] lg:w-[50px] w-[40px] opacity-50">
                  01
                </h6>
              </div>
              <div className="pl-6 border-l">
                <div className="flex">
                  <img src={icon1} alt="service-1" />
                </div>
                <h4 className="text-[20px] pt-6 font-bold">Графический дизайн</h4>
                <p className="pt-2 text-[#777] text-[15px] leading-[28px]">
                  Существует множество вариантов отрывков Lorem Ipsum, но большинство из них
                  подверглись тем или иным изменениям.
                </p>
              </div>
            </div>
            <div
              className="transition-all rounded flex justify-start items-start"
              data-aos="fade-up"
              data-aos-duration={2000}
              data-aos-delay={300}>
              <div className="pr-6 border-r border-[#7963e0] max-[480px]:hidden">
                <h6 className="2xl:text-[50px] lg:text-[40px] text-[35px] font-bold text-[#7963e0] 2xl:w-[60px] xl:w-[60px] lg:w-[50px] w-[40px] opacity-50">
                  02
                </h6>
              </div>
              <div className="pl-6 border-l">
                <div className="flex">
                  <img src={icon2} alt="service-2" />
                </div>
                <h4 className="text-[20px] pt-6 font-bold">Разработка</h4>
                <p className="pt-2 text-[#777] text-[15px] leading-[28px]">
                  Существует множество вариантов отрывков Lorem Ipsum, но большинство из них
                  подверглись тем или иным изменениям.
                </p>
              </div>
            </div>
            <div
              className="transition-all rounded flex justify-start items-start"
              data-aos="fade-up"
              data-aos-duration={2000}
              data-aos-delay={300}>
              <div className="pr-6 border-r border-[#7963e0] max-[480px]:hidden">
                <h6 className="2xl:text-[50px] lg:text-[40px] text-[35px] font-bold text-[#7963e0] 2xl:w-[60px] xl:w-[60px] lg:w-[50px] w-[40px] opacity-50">
                  03
                </h6>
              </div>
              <div className="pl-6 border-l">
                <div className="flex">
                  <img src={icon3} alt="service-3" />
                </div>
                <h4 className="text-[20px] pt-6 font-bold">SEO оптимизация</h4>
                <p className="pt-2 text-[#777] text-[15px] leading-[28px]">
                  Существует множество вариантов отрывков Lorem Ipsum, но большинство из них
                  подверглись тем или иным изменениям.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="2xl:border-b 2xl:pt-24 lg:border-b lg:pt-12 pt-0 flex flex-wrap justify-between items-center mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] px-6"
          data-aos="fade-up"
          data-aos-duration={2000}
          data-aos-delay={300}
        />
      </section>
    </>
  );
}
export default HeroSection;
