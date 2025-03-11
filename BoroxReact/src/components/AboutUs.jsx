import shape6 from '../assets/img/shape/shape-6.png';
import shape7 from '../assets/img/shape/shape-7.png';
import img1 from '../assets/img/about/img-1.jpg';

function AboutUs() {
return (
    <>
        {/* О нас */}
        <section id="about" className="bg-white 2xl:pb-[80px] pb-[70px]">
            <div className="flex flex-wrap justify-between items-center mx-auto mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-[320px]:px-[12px]">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px] px-6 max-[320px]:px-[0px]">
                    <div
                        className="transition-all relative"
                        data-aos="fade-up"
                        data-aos-duration={2000}
                        data-aos-delay={300}>
                        <img src={shape6} alt="shape-6" className="absolute w-12 top-2.5 left-2.5" />
                        <img src={img1} alt="about-img-1" className="w-full rounded-lg" />
                        <img src={shape7} alt="shape-7" className="absolute w-12 bottom-5 right-2.5" />
                    </div>
                    <div
                        className="transition-all"
                        data-aos="fade-up"
                        data-aos-duration={2000}
                        data-aos-delay={300}>
                        <div className="banner mb-[30px]">
                            <span className="text-[14px] text-[#777]">О НАС</span>
                            <h2 className="mt-[5px] 2xl:text-[35px] xl:text-[33px] lg:text-[30px] md:text-[26px] sm:text-[24px] text-[22px] font-bold">
                                Творчество истекает из пера{' '}
                                <span className="text-[#7963e0]">вдохновения</span>
                            </h2>
                        </div>
                        <p className="text-[16px] text-[#777] mb-[30px]">
                            Это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem ipsum является стандартной "рыбой" 
                            для текстов на латинице с начала XVI века.
                        </p>
                        <div className="border p-[24px] rounded-lg">
                            <div className="box-border flex justify-between max-[400px]:block">
                                <div className="left">
                                    <div className="name">
                                        <span className="text-[16px] leading-[28px] font-bold">Полное имя:</span>
                                        <br />
                                        <span className="detail text-[14px] leading-[28px] text-[#777]">
                                            Ричард Лорд{' '}
                                        </span>
                                    </div>
                                    <div className="age pt-[20px]">
                                        <span className="text-[16px] leading-[28px] font-bold">Возраст:</span>
                                        <br />
                                        <span className="detail text-[14px] leading-[28px] text-[#777]">
                                            30 лет
                                        </span>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="ph">
                                        <span className="text-[16px] leading-[28px] font-bold">Телефон:</span>
                                        <br />
                                        <span className="detail text-[14px] leading-[28px] text-[#777]">
                                            +00 987654321
                                        </span>
                                    </div>
                                    <div className="email pt-[20px]">
                                        <span className="text-[16px] leading-[28px] font-bold">Email:</span>
                                        <br />
                                        <span className="detail text-[14px] leading-[28px] text-[#777]">
                                            example@example.com
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom pt-[20px]">
                                <span className="text-[16px] leading-[28px] font-bold">Адрес:</span>
                                <span className="detail text-[14px] leading-[28px] text-[#777]">
                                    Руами меллоу мораес - Сальвадор, Бразилия
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>{' '}
    </>
);
}
export default AboutUs;
