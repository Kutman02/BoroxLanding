import bgShape from '../assets/img/shape/bg-shape.png';

import news1 from '../assets/img/news/img-1.jpg';
import news2 from '../assets/img/news/img-2.jpg';
import news3 from '../assets/img/news/img-3.jpg';

function LeterNews() {
return (
    <>
        {/* Новости */}
        <section id="news" className="section-news bg-[#f6f8ff]">
            <div className="relative pt-[60px]">
                <img
                    src={bgShape}
                    alt="фоновая-форма"
                    className="absolute top-0 left-0 right-0 w-full bg-center bg-cover"
                />
            </div>
            <div className="2xl:pb-[80px] pb-[70px] 2xl:pt-[80px] lg:pt-[80px] pt-[20px]">
                <div
                    className="banner text-center mb-[30px]"
                    data-aos="fade-up"
                    data-aos-duration={2000}
                    data-aos-delay={300}>
                    <span className="text-[14px] text-[#777]">БЛОГ</span>
                    <h2 className="text-center mt-[5px] 2xl:text-[35px] xl:text-[33px] lg:text-[30px] md:text-[26px] sm:text-[24px] text-[22px] font-bold">
                        Последние <span className="text-[#7963e0]">НОВОСТИ</span>
                    </h2>
                </div>
                <div
                    className="flex flex-wrap justify-between items-center mx-auto mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-[320px]:px-[12px] relative px-6"
                    data-aos="fade-up"
                    data-aos-duration={2000}
                    data-aos-delay={300}>
                    <div className="relative" />
                    <div className="2xl:absolute 2xl:max-[1140px] xl:absolute xl:max-w-[720px] lg:absolute lg:max-w-[620px] max-w-[100%] relative">
                        <div className="transition-all justify-start items-start">
                            <div className="news-slider">
                                <div className="carousel-wrap">
                                    <div className="owl-carousel news-carousel owl-loaded owl-drag">
                                        <div className="owl-stage-outer">
                                            <div className="owl-stage">
                                                <div className="owl-item">
                                                    <div className="card bg-white border rounded-2xl p-6">
                                                        <img src={news2} alt="новости-3" />
                                                        <div className="news-card-details mt-[16px]">
                                                            <p className="text-[13px] leading-[30px] mb-[5px] text-[#7963e0]">
                                                                От Админа <span className="text-gray-400">- 04 Комментария</span>
                                                            </p>
                                                            <h5 className="pb-[15px] text-[17px] font-bold border-b border-[#dbdada]">
                                                                Здесь размещается заголовок новости.
                                                            </h5>
                                                            <div className="pt-[15px] text-sm text-[#7963e0]">
                                                                Подробнее{' '}
                                                                <a className="hover:text-[#7963e0]">
                                                                    <i className="fa-solid fa-arrow-right" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="owl-item">
                                                    <div className="card bg-white border rounded-2xl p-6">
                                                        <img src={news3} alt="новости-3" />
                                                        <div className="news-card-details mt-[16px]">
                                                            <p className="text-[13px] leading-[30px] mb-[5px] text-[#7963e0]">
                                                                От Админа <span className="text-gray-400">- 04 Комментария</span>
                                                            </p>
                                                            <h5 className="pb-[15px] text-[17px] font-bold border-b border-[#dbdada]">
                                                                Здесь размещается заголовок новости.
                                                            </h5>
                                                            <div className="pt-[15px] text-sm text-[#7963e0]">
                                                                Подробнее{' '}
                                                                <a className="hover:text-[#7963e0]">
                                                                    <i className="fa-solid fa-arrow-right" />
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
                        </div>
                    </div>
                    <div className="transition-all flex-row 2xl:block xl:block lg:block hidden">
                        <img src={news1} alt="новости" className="w-auto rounded-[15px]" />
                    </div>
                </div>
            </div>
        </section>
    </>
);
}
export default LeterNews;
