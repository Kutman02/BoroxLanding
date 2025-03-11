import shape8 from '../assets/img/shape/shape-8.png';
import bgShape from '../assets/img/shape/bg-shape.png';

function MyACHIEVEMENTS() {
return (
    <>
        {/* Опыт и Образование */}
        <section id="experience" className="section-experience bg-[#f6f8ff] relative">
            <div className="relative pt-[60px]">
                <img
                    src={bgShape}
                    alt="фоновая-форма"
                    className="absolute top-0 left-0 right-0 w-full bg-center bg-cover"
                />
            </div>
            <div className="2xl:pb-[80px] pb-[70px] 2xl:pt-[80px] md:pt-[70px] pt-[20px]">
                <div
                    className="banner text-center mb-[30px]"
                    data-aos="fade-up"
                    data-aos-duration={2000}
                    data-aos-delay={300}>
                    <span className="text-[14px] text-[#777]">КВАЛИФИКАЦИЯ</span>
                    <h2 className="text-center mt-[5px] 2xl:text-[35px] xl:text-[33px] lg:text-[30px] md:text-[26px] sm:text-[24px] text-[22px] font-bold">
                        Мои <span className="text-[#7963e0]">ДОСТИЖЕНИЯ</span>
                    </h2>
                </div>
                <div className="flex flex-wrap justify-between items-center mx-auto mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-[320px]:px-[12px] px-6 relative">
                    <img src={shape8} alt="форма-8" className="absolute w-12 -top-10 right-10" />
                    <div className="absolute -top-10 left-10 h-12 w-12 bg-[#f1c7a1] rounded-full" />
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
                        <div className="transition-all justify-start items-start">
                            <h2 className="text-[20px] font-bold leading-[24px]">Образование</h2>
                            <div className="border-l-2 border-gray-300 pl-6">
                                <div
                                    className="p-[30px] bg-white rounded-3xl mt-8 relative"
                                    data-aos="fade-up"
                                    data-aos-duration={2000}
                                    data-aos-delay={400}>
                                    <div className="absolute top-0 bottom-0 -left-6 w-4">
                                        <span className="w-4 h-4 border-2 border-[#7963e0] rounded-full block bg-[#f6f8ff] absolute top-28 -left-2.5" />
                                        <span className="w-5 border border-[#7963e0] block bg-[#f6f8ff] absolute top-28 my-1.5 left-1.5" />
                                    </div>
                                    <span className="text-[#777] text-[12px] font-medium">
                                        15 июня 2013 - 2016
                                    </span>
                                    <h4 className="text-[16px] leading-[22px] font-semibold mt-[15px] mb-[6px] text-[#7963e0]">
                                        Магистр компьютерной инженерии{' '}
                                        <span className="ml-[15px] text-[#999] text-[14px]">- Первый класс</span>
                                    </h4>
                                    <p className="text-[13px] text-[#777] mb-0 leading-[28px]">
                                        Здесь должно быть описание вашего образования и полученных навыков во время
                                        обучения в магистратуре по компьютерной инженерии.
                                    </p>
                                </div>
                                <div
                                    className="p-[30px] bg-white rounded-3xl mt-8 relative"
                                    data-aos="fade-up"
                                    data-aos-duration={2000}
                                    data-aos-delay={600}>
                                    <div className="absolute top-0 bottom-0 -left-6 w-4">
                                        <span className="w-4 h-4 border-2 border-[#7963e0] rounded-full block bg-[#f6f8ff] absolute top-28 -left-2.5" />
                                        <span className="w-5 border border-[#7963e0] block bg-[#f6f8ff] absolute top-28 my-1.5 left-1.5" />
                                    </div>
                                    <span className="text-[#777] text-[12px] font-medium">
                                        12 июня 2010 - 2013
                                    </span>
                                    <h4 className="text-[16px] leading-[22px] font-semibold mt-[15px] mb-[6px] text-[#7963e0]">
                                        Бакалавр компьютерной инженерии{' '}
                                        <span className="ml-[15px] text-[#999] text-[14px]">- Первый класс</span>
                                    </h4>
                                    <p className="text-[13px] text-[#777] mb-0 leading-[28px]">
                                        Здесь должно быть описание вашего образования и полученных навыков во время
                                        обучения в бакалавриате по компьютерной инженерии.
                                    </p>
                                </div>
                                <div
                                    className="p-[30px] bg-white rounded-3xl mt-8 relative"
                                    data-aos="fade-up"
                                    data-aos-duration={2000}
                                    data-aos-delay={800}>
                                    <div className="absolute top-0 bottom-0 -left-6 w-4">
                                        <span className="w-4 h-4 border-2 border-[#7963e0] rounded-full block bg-[#f6f8ff] absolute top-28 -left-2.5" />
                                        <span className="w-5 border border-[#7963e0] block bg-[#f6f8ff] absolute top-28 my-1.5 left-1.5" />
                                    </div>
                                    <span className="text-[#777] text-[12px] font-medium">1 июня 2009 - 2010</span>
                                    <h4 className="text-[16px] leading-[22px] font-semibold mt-[15px] mb-[6px] text-[#7963e0]">
                                        Среднее образование{' '}
                                        <span className="ml-[15px] text-[#999] text-[14px]">- (A+)</span>
                                    </h4>
                                    <p className="text-[13px] text-[#777] mb-0 leading-[28px]">
                                        Здесь должно быть описание вашего среднего образования и основных достижений
                                        в школе.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="transition-all 2xl:mt-0 lg:mt-0 xl:mt-0 mt-[15px] justify-start items-start"
                            data-aos="fade-up"
                            data-aos-duration={2000}
                            data-aos-delay={300}>
                            <h2 className="text-[20px] font-bold leading-[24px]">Опыт работы</h2>
                            <div className="border-l-2 border-gray-300 pl-6">
                                <div
                                    className="p-[30px] bg-white rounded-3xl mt-8 relative"
                                    data-aos="fade-up"
                                    data-aos-duration={2000}
                                    data-aos-delay={400}>
                                    <div className="absolute top-0 bottom-0 -left-6 w-4">
                                        <span className="w-4 h-4 border-2 border-[#7963e0] rounded-full block bg-[#f6f8ff] absolute top-28 -left-2.5" />
                                        <span className="w-5 border border-[#7963e0] block bg-[#f6f8ff] absolute top-28 my-1.5 left-1.5" />
                                    </div>
                                    <span className="text-[#777] text-[12px] font-medium">12 марта 2020</span>
                                    <h4 className="text-[16px] leading-[22px] font-semibold mt-[15px] mb-[6px] text-[#7963e0]">
                                        Envato
                                        <span className="ml-[15px] text-[#999] text-[14px]">- Руководитель команды</span>
                                    </h4>
                                    <p className="text-[13px] text-[#777] mb-0 leading-[28px]">
                                        Здесь должно быть описание вашего опыта работы и достижений в качестве
                                        руководителя команды.
                                    </p>
                                </div>
                                <div
                                    className="p-[30px] bg-white rounded-3xl mt-8 relative"
                                    data-aos="fade-up"
                                    data-aos-duration={2000}
                                    data-aos-delay={600}>
                                    <div className="absolute top-0 bottom-0 -left-6 w-4">
                                        <span className="w-4 h-4 border-2 border-[#7963e0] rounded-full block bg-[#f6f8ff] absolute top-28 -left-2.5" />
                                        <span className="w-5 border border-[#7963e0] block bg-[#f6f8ff] absolute top-28 my-1.5 left-1.5" />
                                    </div>
                                    <span className="text-[#777] text-[12px] font-medium">
                                        23 января 2018 - 2020
                                    </span>
                                    <h4 className="text-[16px] leading-[22px] font-semibold mt-[15px] mb-[6px] text-[#7963e0]">
                                        Facebook{' '}
                                        <span className="ml-[15px] text-[#999] text-[14px]">- Старший разработчик</span>
                                    </h4>
                                    <p className="text-[13px] text-[#777] mb-0 leading-[28px]">
                                        Здесь должно быть описание вашего опыта работы и достижений в качестве
                                        старшего разработчика.
                                    </p>
                                </div>
                                <div
                                    className="p-[30px] bg-white rounded-3xl mt-8 relative"
                                    data-aos="fade-up"
                                    data-aos-duration={2000}
                                    data-aos-delay={800}>
                                    <div className="absolute top-0 bottom-0 -left-6 w-4">
                                        <span className="w-4 h-4 border-2 border-[#7963e0] rounded-full block bg-[#f6f8ff] absolute top-28 -left-2.5" />
                                        <span className="w-5 border border-[#7963e0] block bg-[#f6f8ff] absolute top-28 my-1.5 left-1.5" />
                                    </div>
                                    <span className="text-gray-500 text-sm">23 июля 2016 - 2018</span>
                                    <h4 className="text-[16px] leading-[22px] font-semibold mt-[15px] mb-[6px] text-[#7963e0]">
                                        Twitter{' '}
                                        <span className="ml-[15px] text-[#999] text-[14px]">- Младший разработчик</span>
                                    </h4>
                                    <p className="text-[13px] text-[#777] mb-0 leading-[28px]">
                                        Здесь должно быть описание вашего опыта работы и достижений в качестве
                                        младшего разработчика.
                                    </p>
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
export default MyACHIEVEMENTS;
