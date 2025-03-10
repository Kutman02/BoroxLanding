import './App.css';

function App() {
  return (
    <div>
  <div id="bx-overlay">
      <span className="loader"></span>
    </div>
    <header className="bg-[#f6f8ff] w-full bx-static">
      <nav class="border-gray-200 py-2">
        <div
          class="flex flex-wrap justify-between items-center px-6 mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-[320px]:px-[12px]">
          <a href="index.html" class="flex items-center">
            <img src="assets/img/logo/logo.png" class="w-[90px]" alt="Logo" />
          </a>
          <div class="flex items-center lg:order-2">
            <button type="button"
              class="text-white bg-[#7963e0] hover:bg-opacity-80 no-underline font-medium rounded-full text-sm px-8 py-2.5 mr-2 hidden 2xl:block xl:block lg:block">
              Get a quote</button>
            <button data-collapse-toggle="mobile-menu" type="button" id="dropdown-toggle"
              class="inline-flex items-center border p-2 text-lg text-gray-500 rounded-lg lg:hidden"
              aria-controls="mobile-menu" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
          <div class="justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu">
            <ul class="flex flex-col font-medium lg:flex-row lg:space-x-8 2xl:border-0 lg:border-0 border lg:mt-0 lg-mb-4 lg:p-[0] lg:border-none lg:rounded-[0] lg:text-[15px] mt-4 p-[15px] 2xl:mb-0 xl:mb-0 lg:mb-0 mb-2 border-[#eee] rounded-[30px] text-[13px]"
              id="top-menu">
              <li class="nav-item active">
                <a href="#home" class="block py-2 pr-4 pl-3 text-[#000] lg:p-0">Home</a>
              </li>
              <li class="nav-item">
                <a href="#about" class="block py-2 pr-4 pl-3 text-[#000] lg:p-0">About</a>
              </li>
              <li class="nav-item">
                <a href="#experience" class="block py-2 pr-4 pl-3 text-[#000] lg:p-0">Experience</a>
              </li>
              <li class="nav-item">
                <a href="#portfolio" class="block py-2 pr-4 pl-3 text-[#000] lg:p-0">Portfolio</a>
              </li>
              <li class="nav-item">
                <a href="#news" class="block py-2 pr-4 pl-3 text-[#000] lg:p-0">News</a>
              </li>
              <li class="nav-item">
                <a href="#contact" class="block py-2 pr-4 pl-3 text-[#000] lg:p-0">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header><section id="home" class="section-hero bg-[#f6f8ff] relative">
      <img class="shape1 absolute w-12 left-72 bottom-36 parallax sm:block hidden" src="assets/img/shape/shape-1.png" alt="shape-1" />
      <img class="shape2 absolute w-12 top-72 right-32 parallax top sm:block hidden" src="assets/img/shape/shape-2.png" alt="shape-2" />
      <img class="shape3 absolute w-12 top-48	left-96 parallax left top sm:block hidden" src="assets/img/shape/shape-3.png"
        alt="shape-3" />
      <img class="shape4 absolute w-6 bottom-72 left-24 parallax left sm:block hidden" src="assets/img/shape/shape-4.png"
        alt="shape-4" />
      <img class="shape5 absolute w-12 bottom-48 right-12 parallax bottom sm:block hidden" src="assets/img/shape/shape-5.png"
        alt="shape-5" />
      <div
        class="flex flex-wrap justify-between items-center mx-auto mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] py-[80px] px-4">
        <div class="w-full 2xl:h-[90vh] lg:h-[80vh] h-[70vh] max-[320px]:h-[50vh] flex items-center px-2 2xl:max-w-lg xl:max-w-lg lg:max-w-lg lg:w-1/2 lg:mx-0 md:max-w-lg md:w-1/2 md:mx-0 2xl:w-1/2 xl:w-1/2 sm:items-center"
          data-aos="fade-up" data-aos-duration="2000">
          <div class="text-center 2xl:text-left xl:text-left lg:text-left md:text-left h-72">
            <span class="text-[#7963e0] text-[18px] font-bold">Hello, My name is</span>
            <h1
              class="text-dark-800 2xl:text-[60px] xl:text-[55px] lg:text-[50px] md:text-[45px] text-[40px] font-bold">
              lsabelle Ryal</h1>
            <h2 class="py-4 text-dark-800 text-[20px] font-bold">i'm A web Devloper</h2>
            <p class="pt-2 text-gray-500 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              enim ratione eligendi expedita!</p>
            <button type="button"
              class="text-white mt-8 bg-[#7963e0] hover:bg-opacity-80 no-underline font-medium rounded-full text-sm px-8 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700">
              Hire me</button>
          </div>
        </div>
        <div class="w-1/2 hidden px-2 2xl:block xl:block lg:block md:block z-10">
          <img src="assets/img/home/girl.png" alt="girl" class="max-h-full" />
        </div>
      </div>
      <div class="relative">
        <img src="assets/img/shape/hero-shape.png" alt="hero-shape"
          class="absolute bottom-0 left-0 right-0 w-full z-10 bg-center bg-cover" />
      </div>
    </section><section id="service" class="2xl:py-[80px] py-[70px] bg-white relative">
      <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
        <img src="assets/img/shape/shape-6.png" alt="shape" class="absolute w-12 h-12 top-28 right-40" />
      </div>
      <div class="banner text-center mb-[30px] px-6" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
        <span class="text-[14px] text-[#777]">BEST IT SERVICE</span>
        <h2
          class="text-center mt-[5px] 2xl:text-[35px] xl:text-[33px] lg:text-[30px] md:text-[26px] sm:text-[24px] text-[22px] font-bold">
          It Industries We’re<span class="text-[#7963e0]">
            Offering</span></h2>
      </div>
      <div
        class="flex flex-wrap justify-between items-center mx-auto mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-[320px]:px-[12px] px-6">
        <div class="grid lg:grid-cols-3 md:grid-cols-1 gap-[30px]">
          <div class="transition-all rounded flex justify-start items-start" data-aos="fade-up"
            data-aos-duration="2000" data-aos-delay="300">
            <div class="pr-6 border-r border-[#7963e0] max-[480px]:hidden">
              <h6 class="2xl:text-[50px] lg:text-[40px] text-[35px] font-bold text-[#7963e0] 2xl:w-[60px] xl:w-[60px] lg:w-[50px] w-[40px] opacity-50">01</h6>
            </div>
            <div class="pl-6 border-l">
              <div class="flex">
                <img src="assets/img/service/icon-1.png" alt="service-1" />
              </div>
              <h4 class="text-[20px] pt-6 font-bold">Graphics design</h4>
              <p class="pt-2 text-[#777] text-[15px] leading-[28px]">There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some form.</p>
            </div>
          </div>
          <div class="transition-all rounded flex justify-start items-start" data-aos="fade-up"
            data-aos-duration="2000" data-aos-delay="300">
            <div class="pr-6 border-r border-[#7963e0] max-[480px]:hidden">
              <h6 class="2xl:text-[50px] lg:text-[40px] text-[35px] font-bold text-[#7963e0] 2xl:w-[60px] xl:w-[60px] lg:w-[50px] w-[40px] opacity-50">02</h6>
            </div>
            <div class="pl-6 border-l">
              <div class="flex">
                <img src="assets/img/service/icon-2.png" alt="service-2" />
              </div>
              <h4 class="text-[20px] pt-6 font-bold">Devlopment</h4>
              <p class="pt-2 text-[#777] text-[15px] leading-[28px]">There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some form.</p>
            </div>
          </div>
          <div class="transition-all rounded flex justify-start items-start" data-aos="fade-up"
            data-aos-duration="2000" data-aos-delay="300">
            <div class="pr-6 border-r border-[#7963e0] max-[480px]:hidden">
              <h6 class="2xl:text-[50px] lg:text-[40px] text-[35px] font-bold text-[#7963e0] 2xl:w-[60px] xl:w-[60px] lg:w-[50px] w-[40px] opacity-50">03</h6>
            </div>
            <div class="pl-6 border-l">
              <div class="flex">
                <img src="assets/img/service/icon-3.png" alt="service-3" />
              </div>
              <h4 class="text-[20px] pt-6 font-bold">SEO Friendly</h4>
              <p class="pt-2 text-[#777] text-[15px] leading-[28px]">There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some form.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="2xl:border-b 2xl:pt-24 lg:border-b lg:pt-12 pt-0 flex flex-wrap justify-between items-center mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] px-6"
        data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300"></div>
    </section>
    <section id="about" class="bg-white 2xl:pb-[80px] pb-[70px]">
      <div
        class="flex flex-wrap justify-between items-center mx-auto mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-[320px]:px-[12px]">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-[30px] px-6 max-[320px]:px-[0px]">
          <div class="transition-all relative" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
            <img src="assets/img/shape/shape-6.png" alt="shape-6" class="absolute w-12 top-2.5 left-2.5" />
            <img src="assets/img/about/img-1.jpg" alt="about-img-1" class="w-full rounded-lg" />
            <img src="assets/img/shape/shape-7.png" alt="shape-7" class="absolute w-12 bottom-5 right-2.5" />
          </div>
          <div class="transition-all" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
            <div class="banner mb-[30px]">
              <span class="text-[14px] text-[#777]">ABOUT US</span>
              <h2
                class="mt-[5px] 2xl:text-[35px] xl:text-[33px] lg:text-[30px] md:text-[26px] sm:text-[24px] text-[22px] font-bold">
                Creativity bleeds from the pen of <span class="text-[#7963e0]">inspiration</span></h2>
            </div>
            <p class="text-[16px] text-[#777] mb-[30px]">Lorem ipsum
              dolor sit amet consectetur adipisicing
              elit. Ducimus praesentium
              totam error consequatur aperiam iusto neque fuga velit.</p>
            <div class="border p-[24px] rounded-lg">
              <div class="box-border flex justify-between max-[400px]:block">
                <div class="left">
                  <div class="name">
                    <span class="text-[16px] leading-[28px] font-bold">Full Name :</span>
                      <br />
                      <span class="detail text-[14px] leading-[28px] text-[#777]">Richard Lord</span>
                    </div>
                  <div class="age pt-[20px]">
                    <span class="text-[16px] leading-[28px] font-bold">Age :</span>
                      <br />
                      <span class="detail text-[14px] leading-[28px] text-[#777]">30 Years</span>
                    </div>
                </div>
                <div class="right">
                  <div class="ph">
                      <span class="text-[16px] leading-[28px] font-bold">Phone No :</span>
                      <br />
                      <span class="detail text-[14px] leading-[28px] text-[#777]">+00 987654321</span>
                    </div>
                      <span class="text-[16px] leading-[28px] font-bold">Email :</span>
                      <br />
                      <span class="detail text-[14px] leading-[28px] text-[#777]">example@example.com</span>
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
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div class="bottom pt-[20px]">
              <div class="bottom pt-[20px]">
                <span class="text-[16px] leading-[28px] font-bold">Address :</span>
                <span class="detail text-[14px] leading-[28px] text-[#777]">Ruami mellow moraes,- Salvador,
                  Brazil</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <><div className="main-content">
        <section id="experience" class="section-experience bg-[#f6f8ff] relative">
          <div class="relative pt-[60px]">
            <img src="assets/img/shape/bg-shape.png" alt="bg-shape"
              class="absolute top-0 left-0 right-0 w-full bg-center bg-cover" />
          </div>
          <div class="2xl:pb-[80px] pb-[70px] 2xl:pt-[80px] md:pt-[70px] pt-[20px]">
            <div class="banner text-center mb-[30px]" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
              <span class="text-[14px] text-[#777]">QUALIFICATION</span>
              <h2
                class="text-center mt-[5px] 2xl:text-[35px] xl:text-[33px] lg:text-[30px] md:text-[26px] sm:text-[24px] text-[22px] font-bold">
                My <span class="text-[#7963e0]"> ACHIEVEMENTS</span></h2>
            </div>
            <div
              class="flex flex-wrap justify-between items-center mx-auto mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-[320px]:px-[12px] px-6 relative">
              <img src="assets/img/shape/shape-8.png" alt="shape-8" class="absolute w-12 -top-10 right-10" />
              <div class="absolute -top-10 left-10 h-12 w-12 bg-[#f1c7a1] rounded-full"></div>
              <div class="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
                <div class="transition-all justify-start items-start">
                  <h2 class="text-[20px] font-bold leading-[24px]">Education</h2>
                  <div class="border-l-2 border-gray-300 pl-6">
                    <div class="p-[30px] bg-white rounded-3xl mt-8 relative" data-aos="fade-up"
                      data-aos-duration="2000" data-aos-delay="400">
                      <div class="absolute top-0 bottom-0 -left-6 w-4">
                        <span
                          class="w-4 h-4 border-2 border-[#7963e0] rounded-full block bg-[#f6f8ff] absolute top-28 -left-2.5"></span>
                        <span
                          class="w-5 border border-[#7963e0] block bg-[#f6f8ff] absolute top-28 my-1.5 left-1.5"></span>
                      </div>
                      <span class="text-[#777] text-[12px] font-medium">June 15, 2013 - 2016</span>
                      <h4 class="text-[16px] leading-[22px] font-semibold mt-[15px] mb-[6px] text-[#7963e0]">
                        Master in Computer Engineering <span class="ml-[15px] text-[#999] text-[14px]">-
                          First
                          Class</span></h4>
                      <p class="text-[13px] text-[#777] mb-0 leading-[28px]">Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit. Mollitia
                        sequi doloremque ullam placeat quos provident ex fuga. Ratione ab explicabo
                        doloribus error odio veritatis tenetur.</p>
                    </div>
                    <div class="p-[30px] bg-white rounded-3xl mt-8 relative" data-aos="fade-up"
                      data-aos-duration="2000" data-aos-delay="600">
                      <div class="absolute top-0 bottom-0 -left-6 w-4">
                        <span
                          class="w-4 h-4 border-2 border-[#7963e0] rounded-full block bg-[#f6f8ff] absolute top-28 -left-2.5"></span>
                        <span
                          class="w-5 border border-[#7963e0] block bg-[#f6f8ff] absolute top-28 my-1.5 left-1.5"></span>
                      </div>
                      <span class="text-[#777] text-[12px] font-medium">June 12, 2010 - 2013</span>
                      <h4 class="text-[16px] leading-[22px] font-semibold mt-[15px] mb-[6px] text-[#7963e0]">
                        Bachelor
                        in Computer Engineering <span class="ml-[15px] text-[#999] text-[14px]">- First
                          Class</span></h4>
                      <p class="text-[13px] text-[#777] mb-0 leading-[28px]">Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Mollitia sequi doloremque ullam placeat quos provident ex fuga. Ratione ab explicabo
                        doloribus error odio veritatis tenetur.</p>
                    </div>
                    <div class="p-[30px] bg-white rounded-3xl mt-8 relative" data-aos="fade-up"
                      data-aos-duration="2000" data-aos-delay="800">
                      <div class="absolute top-0 bottom-0 -left-6 w-4">
                        <span
                          class="w-4 h-4 border-2 border-[#7963e0] rounded-full block bg-[#f6f8ff] absolute top-28 -left-2.5"></span>
                        <span
                          class="w-5 border border-[#7963e0] block bg-[#f6f8ff] absolute top-28 my-1.5 left-1.5"></span>
                      </div>
                      <span class="text-[#777] text-[12px] font-medium">June 1, 2009 - 2010</span>
                      <h4 class="text-[16px] leading-[22px] font-semibold mt-[15px] mb-[6px] text-[#7963e0]">
                        Higher Secondary <span class="ml-[15px] text-[#999] text-[14px]">- (A+)</span></h4>
                      <p class="text-[13px] text-[#777] mb-0 leading-[28px]">Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Mollitia sequi doloremque ullam placeat quos provident ex fuga. Ratione ab explicabo
                        doloribus error odio veritatis tenetur.</p>
                    </div>
                  </div>
                </div>
                <div class="transition-all 2xl:mt-0 lg:mt-0 xl:mt-0 mt-[15px] justify-start items-start" data-aos="fade-up" data-aos-duration="2000"
                  data-aos-delay="300">
                  <h2 class="text-[20px] font-bold leading-[24px]">Experience</h2>
                  <div class="border-l-2 border-gray-300 pl-6">
                    <div class="p-[30px] bg-white rounded-3xl mt-8 relative" data-aos="fade-up"
                      data-aos-duration="2000" data-aos-delay="400">
                      <div class="absolute top-0 bottom-0 -left-6 w-4">
                        <span
                          class="w-4 h-4 border-2 border-[#7963e0] rounded-full block bg-[#f6f8ff] absolute top-28 -left-2.5"></span>
                        <span
                          class="w-5 border border-[#7963e0] block bg-[#f6f8ff] absolute top-28 my-1.5 left-1.5"></span>
                      </div>
                      <span class="text-[#777] text-[12px] font-medium">March 12, 2020</span>
                      <h4 class="text-[16px] leading-[22px] font-semibold mt-[15px] mb-[6px] text-[#7963e0]">
                        Envato
                        <span class="ml-[15px] text-[#999] text-[14px]">- Team Leader</span>
                      </h4>
                      <p class="text-[13px] text-[#777] mb-0 leading-[28px]">Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Mollitia
                        sequi doloremque ullam placeat quos provident ex fuga. Ratione ab explicabo
                        doloribus
                        error
                        odio veritatis tenetur.</p>
                    </div>
                    <div class="p-[30px] bg-white rounded-3xl mt-8 relative" data-aos="fade-up"
                      data-aos-duration="2000" data-aos-delay="600">
                      <div class="absolute top-0 bottom-0 -left-6 w-4">
                        <span
                          class="w-4 h-4 border-2 border-[#7963e0] rounded-full block bg-[#f6f8ff] absolute top-28 -left-2.5"></span>
                        <span
                          class="w-5 border border-[#7963e0] block bg-[#f6f8ff] absolute top-28 my-1.5 left-1.5"></span>
                      </div>
                      <span class="text-[#777] text-[12px] font-medium">January 23, 2018 - 2020</span>
                      <h4 class="text-[16px] leading-[22px] font-semibold mt-[15px] mb-[6px] text-[#7963e0]">
                        Facebook Company <span class="ml-[15px] text-[#999] text-[14px]">- Sr.
                          Developer</span></h4>
                      <p class="text-[13px] text-[#777] mb-0 leading-[28px]">Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Mollitia sequi doloremque ullam placeat quos provident ex fuga. Ratione ab explicabo
                        doloribus error odio veritatis tenetur.</p>
                    </div>
                    <div class="p-[30px] bg-white rounded-3xl mt-8 relative" data-aos="fade-up"
                      data-aos-duration="2000" data-aos-delay="800">
                      <div class="absolute top-0 bottom-0 -left-6 w-4">
                        <span
                          class="w-4 h-4 border-2 border-[#7963e0] rounded-full block bg-[#f6f8ff] absolute top-28 -left-2.5"></span>
                        <span
                          class="w-5 border border-[#7963e0] block bg-[#f6f8ff] absolute top-28 my-1.5 left-1.5"></span>
                      </div>
                      <span class="text-gray-500 text-sm">July 23, 2016 - 2018 </span>
                      <h4 class="text-[16px] leading-[22px] font-semibold mt-[15px] mb-[6px] text-[#7963e0]">
                        Twitter Company <span class="ml-[15px] text-[#999] text-[14px]">- Jr.
                          Developer</span></h4>
                      <p class="text-[13px] text-[#777] mb-0 leading-[28px]">Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Mollitia sequi doloremque ullam placeat quos provident ex fuga. Ratione ab explicabo
                        doloribus error odio veritatis tenetur.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section><section id="portfolio" class="section-Portfolio 2xl:py-[80px] py-[70px]">
          <div class="banner text-center mb-[30px]" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
            <span class="text-[14px] text-[#777]">PORTFOLIO</span>
            <h2
              class="text-center mt-[5px] 2xl:text-[35px] xl:text-[33px] lg:text-[30px] md:text-[26px] sm:text-[24px] text-[22px] font-bold">
              My <span class="text-[#7963e0]"> PORTFOLIO</span></h2>
          </div>
          <div
            class="flex flex-wrap justify-between items-center mx-auto mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-[320px]:px-[12px] px-6">
            <div class="m-b-minus-24px w-full">
              <div class="portfolio-content" id="MixItUpDA2FB7" data-aos="fade-up" data-aos-duration="2000"
                data-aos-delay="600">
                <div class="portfolio-tabs mb-[30px]">
                  <ul
                    class="2xl:flex xl:flex md:flex sm:block place-content-center text-center">
                    <li class="text-[14px] text-[#17181c] 2xl:mx-[10px] sm:mx-[0px] px-[10px] leading-[11px] font-semibold hover:text-[#7963e0] cursor-pointer inline-block active"
                      data-filter="all">
                      ALL</li>
                    <li class="text-[14px] text-[#17181c] 2xl:mx-[10px] sm:mx-[0px] px-[10px] leading-[11px] font-semibold hover:text-[#7963e0] cursor-pointer inline-block"
                      data-filter=".design">DESIGN</li>
                    <li class="text-[14px] text-[#17181c] 2xl:mx-[10px] sm:mx-[0px] px-[10px] leading-[11px] font-semibold hover:text-[#7963e0] cursor-pointer inline-block"
                      data-filter=".development">DEVELOPMENT</li>
                    <li class="text-[14px] text-[#17181c] 2xl:mx-[10px] sm:mx-[0px] px-[10px] leading-[11px] font-semibold hover:text-[#7963e0] cursor-pointer inline-block"
                      data-filter=".graphics">GRAPHICS</li>
                    <li class="text-[14px] text-[#17181c] 2xl:mx-[10px] sm:mx-[0px] px-[10px] leading-[11px] font-semibold hover:text-[#7963e0] cursor-pointer inline-block"
                      data-filter=".templates">Templates</li>
                  </ul>
                </div>
                <div class="portfolio-content-items">
                  <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
                    <div class="mix graphics templates">
                      <div class="portfolio-img truncate rounded-2xl relative">
                        <img src="assets/img/portfolio/img-1.jpg" alt="graphics"
                          class="w-full transform hover:bg-blue-600 transition duration-500 hover:-rotate-12 hover:scale-125" />
                        <h3 class="top-contain absolute top-[15px] right-[15px]">
                          <span
                            class="bg-black rounded-full text-white font-normal text-[12px] px-2 py-1">3D
                            Graphics</span>
                          <span
                            class="bg-black rounded-full text-white font-normal text-[12px] px-2 py-1">Templates</span>
                        </h3>
                        <div class="bottom-contain absolute bottom-4 left-4 right-4">
                          <div
                            class="overlay-info px-4 py-2 bg-black bg-opacity-60 rounded-xl grid grid-cols-2 gap-[30px] place-content-between">
                            <a href="#" class="text-white text-sm flex items-center">Nitro - Car
                              Service</a>
                            <a href="assets/img/portfolio/img-1.jpg" data-fancybox="gallery"
                              class="text-white text-sm grid justify-items-end">
                              <p class="hidden">.</p>
                              <span
                                class="bg-[#7963e0] h-8 w-8 flex justify-center items-center rounded-md">
                                <i class="fa-solid fa-arrow-right"></i>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mix design">
                      <div class="portfolio-img truncate rounded-2xl relative">
                        <img src="assets/img/portfolio/img-2.jpg" alt="design"
                          class="w-full transform hover:bg-blue-600 transition duration-500 hover:-rotate-12 hover:scale-125" />
                        <h3 class="top-contain absolute top-[15px] right-[15px]">
                          <span
                            class="bg-black rounded-full font-normal text-white text-[12px] px-2 py-1">Web
                            Design</span>
                        </h3>
                        <div class="bottom-contain absolute bottom-4 left-4 right-4">
                          <div
                            class="overlay-info px-4 py-2 bg-black bg-opacity-60 rounded-xl grid grid-cols-2 gap-[30px] place-content-between">
                            <a href="#" class="text-white text-sm flex items-center">Boros -
                              Artificial Intelligence</a>
                            <a href="assets/img/portfolio/img-2.jpg" data-fancybox="gallery"
                              class="text-white text-sm grid justify-items-end">
                              <p class="hidden">.</p>
                              <span
                                class="bg-[#7963e0] h-8 w-8 flex justify-center items-center rounded-md">
                                <i class="fa-solid fa-arrow-right"></i>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mix design">
                      <div class="portfolio-img truncate rounded-2xl relative">
                        <img src="assets/img/portfolio/img-3.jpg" alt="design"
                          class="w-full transform hover:bg-blue-600 transition duration-500 hover:-rotate-12 hover:scale-125" />
                        <h3 class="top-contain absolute top-[15px] right-[15px]">
                          <span
                            class="bg-black rounded-full font-normal text-white text-[12px] px-2 py-1">Web
                            Design</span>
                        </h3>
                        <div class="bottom-contain absolute bottom-4 left-4 right-4">
                          <div
                            class="overlay-info px-4 py-2 bg-black bg-opacity-60 rounded-xl grid grid-cols-2 gap-[30px] place-content-between">
                            <a href="#" class="text-white text-sm flex items-center">Mila - Virtual
                              Reality</a>
                            <a href="assets/img/portfolio/img-3.jpg" data-fancybox="gallery"
                              class="text-white text-sm grid justify-items-end">
                              <p class="hidden">.</p>
                              <span
                                class="bg-[#7963e0] h-8 w-8 flex justify-center items-center rounded-md">
                                <i class="fa-solid fa-arrow-right"></i>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mix development">
                      <div class="portfolio-img truncate rounded-2xl relative">
                        <img src="assets/img/portfolio/img-4.jpg" alt="development"
                          class="w-full transform hover:bg-blue-600 transition duration-500 hover:-rotate-12 hover:scale-125" />
                        <h3 class="top-contain absolute top-[15px] right-[15px]">
                          <span
                            class="bg-black rounded-full font-normal text-white text-[12px] px-2 py-1">Development</span>
                        </h3>
                        <div class="bottom-contain absolute bottom-4 left-4 right-4">
                          <div
                            class="overlay-info px-4 py-2 bg-black bg-opacity-60 rounded-xl grid grid-cols-2 gap-[30px] place-content-between">
                            <a href="#" class="text-white text-sm flex items-center">Sen - Hotel
                              Website</a>
                            <a href="assets/img/portfolio/img-4.jpg" data-fancybox="gallery"
                              class="text-white text-sm grid justify-items-end">
                              <p class="hidden">.</p>
                              <span
                                class="bg-[#7963e0] h-8 w-8 flex justify-center items-center rounded-md">
                                <i class="fa-solid fa-arrow-right"></i>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mix templates design">
                      <div class="portfolio-img truncate rounded-2xl relative">
                        <img src="assets/img/portfolio/img-1.jpg" alt="templates"
                          class="w-full transform hover:bg-blue-600 transition duration-500 hover:-rotate-12 hover:scale-125" />
                        <h3 class="top-contain absolute top-[15px] right-[15px]">
                          <span
                            class="bg-black rounded-full font-normal text-white text-[12px] px-2 py-1">Templates</span>
                          <span
                            class="bg-black rounded-full font-normal text-white text-[12px] px-2 py-1">Web
                            Design</span>
                        </h3>
                        <div class="bottom-contain absolute bottom-4 left-4 right-4">
                          <div
                            class="overlay-info px-4 py-2 bg-black bg-opacity-60 rounded-xl grid grid-cols-2 gap-[30px] place-content-between">
                            <a href="#" class="text-white text-sm flex items-center">Ekka -
                              eCommerce template</a>
                            <a href="assets/img/portfolio/img-1.jpg" data-fancybox="gallery"
                              class="text-white text-sm grid justify-items-end">
                              <p class="hidden">.</p>
                              <span
                                class="bg-[#7963e0] h-8 w-8 flex justify-center items-center rounded-md">
                                <i class="fa-solid fa-arrow-right"></i>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mix development graphics">
                      <div class="portfolio-img truncate rounded-2xl relative">
                        <img src="assets/img/portfolio/img-2.jpg" alt="development"
                          class="w-full transform hover:bg-blue-600 transition duration-500 hover:-rotate-12 hover:scale-125" />
                        <h3 class="top-contain absolute top-[15px] right-[15px]">
                          <span
                            class="bg-black rounded-full font-normal text-white text-[12px] px-2 py-1">Development</span>
                          <span
                            class="bg-black rounded-full font-normal text-white text-[12px] px-2 py-1">3D
                            Graphics</span>
                        </h3>
                        <div class="bottom-contain absolute bottom-4 left-4 right-4">
                          <div
                            class="overlay-info px-4 py-2 bg-black bg-opacity-60 rounded-xl grid grid-cols-2 gap-[30px] place-content-between">
                            <a href="#" class="text-white text-sm flex items-center">Bukki - Teck
                              crafts</a>
                            <a href="assets/img/portfolio/img-2.jpg" data-fancybox="gallery"
                              class="text-white text-sm grid justify-items-end">
                              <p class="hidden">.</p>
                              <span
                                class="bg-[#7963e0] h-8 w-8 flex justify-center items-center rounded-md">
                                <i class="fa-solid fa-arrow-right"></i>
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
        </section><section id="news" class="section-news bg-[#f6f8ff]">
          <div class="relative pt-[60px]">
            <img src="assets/img/shape/bg-shape.png" alt="bg-shape"
              class="absolute top-0 left-0 right-0 w-full bg-center bg-cover" />
          </div>
          <div class="2xl:pb-[80px] pb-[70px] 2xl:pt-[80px] lg:pt-[80px] pt-[20px]">
            <div class="banner text-center mb-[30px]" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
              <span class="text-[14px] text-[#777]">BLOGS</span>
              <h2
                class="text-center mt-[5px] 2xl:text-[35px] xl:text-[33px] lg:text-[30px] md:text-[26px] sm:text-[24px] text-[22px] font-bold">
                Latest <span class="text-[#7963e0]"> NEWS</span></h2>
            </div>
            <div class="flex flex-wrap justify-between items-center mx-auto mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-[320px]:px-[12px] relative px-6"
              data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
              <div class="relative"></div>
              <div class="2xl:absolute 2xl:max-[1140px] xl:absolute xl:max-w-[720px] lg:absolute lg:max-w-[620px] max-w-[100%] relative">
                <div class="transition-all justify-start items-start">
                  <div class="news-slider">
                    <div class="carousel-wrap">
                      <div class="owl-carousel news-carousel owl-loaded owl-drag">
                        <div class="owl-stage-outer">
                          <div class="owl-stage">
                            <div class="owl-item">
                              <div class="card bg-white border rounded-2xl p-6">
                                <img src="assets/img/news/img-2.jpg" alt="news-3" />
                                <div class="news-card-details mt-[16px]">
                                  <p class="text-[13px] leading-[30px] mb-[5px] text-[#7963e0]">By
                                    Admin <span class="text-gray-400">- 04 Comments</span></p>
                                  <h5
                                    class="pb-[15px] text-[17px] font-bold border-b border-[#dbdada]">
                                    Lorem ipsum dolor sit amet.</h5>
                                  <div class="pt-[15px] text-sm text-[#7963e0]">Read More <a
                                    class="hover:text-[#7963e0]">
                                    <i class="fa-solid fa-arrow-right"></i></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="owl-item">
                              <div class="card bg-white border rounded-2xl p-6">
                                <img src="assets/img/news/img-3.jpg" alt="news-3" />
                                <div class="news-card-details mt-[16px]">
                                  <p class="text-[13px] leading-[30px] mb-[5px] text-[#7963e0]">By
                                    Admin <span class="text-gray-400">- 04 Comments</span></p>
                                  <h5
                                    class="pb-[15px] text-[17px] font-bold border-b border-[#dbdada]">
                                    Lorem ipsum dolor sit amet.</h5>
                                  <div class="pt-[15px] text-sm text-[#7963e0]">Read More <a
                                    class="hover:text-[#7963e0]">
                                    <i class="fa-solid fa-arrow-right"></i>
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
              <div class="transition-all flex-row 2xl:block xl:block lg:block hidden">
                <img src="assets/img/news/img-1.jpg" alt="news" class="w-auto rounded-[15px]" />
              </div>
            </div>
          </div>
        </section><section id="contact" class="section-contact 2xl:py-[80px] py-[70px]">
          <div class="banner text-center mb-[30px]" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
            <span class="text-[14px] text-[#777]">FORM</span>
            <h2
              class="text-center mt-[5px] 2xl:text-[35px] xl:text-[33px] lg:text-[30px] md:text-[26px] sm:text-[24px] text-[22px] font-bold">
              Get In <span class="text-[#7963e0]">TOUCH</span></h2>
          </div>
          <form>
            <div
              class="flex flex-wrap justify-between items-center mx-auto mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-[320px]:px-[12px] px-6">
              <div class="m-b-minus-24px w-full">
                <div class="grid lg:grid-cols-2 grid-cols-1 gap-[30px]" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
                  <div class="border rounded-lg">
                    <div class="border-b">
                      <input type="text"
                        class="appearance-none w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none rounded-t-lg"
                        id="fname" placeholder="Full Name" />
                    </div>
                    <div class="border-b">
                      <input type="email"
                        class="appearance-none w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none"
                        id="umail" placeholder="Email" />
                    </div>
                    <div class="border-b">
                      <input type="text"
                        class="appearance-none w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none"
                        id="phone" placeholder="Phone" />
                    </div>
                    <div>
                      <input type="text"
                        class="appearance-none w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none rounded-b-lg"
                        id="subject" placeholder="Subject" />
                    </div>
                  </div>
                  <div class="mb-0">
                    <div class="mb-4">
                      <textarea class="w-full border rounded-xl pl-4 pt-2 focus:outline-none"
                        id="exampleFormControlTextarea1" rows="8" placeholder="Message"></textarea>
                    </div>
                    <button type="button"
                      class="text-white bg-[#7963e0] hover:bg-opacity-80 no-underline font-medium rounded-full text-sm px-8 py-2.5 mr-2">
                      Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section><footer class="bg-[#070415]">
          <div
            class="flex justify-center mx-auto mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] 2xl:flex-row xl:flex-row lg:flex-row flex-col md:max-w-[720px] max-[320px]:px-[12px] sm:max-w-[540px] gap-[30px] px-6 py-8">
            <div class="lg:w-1/2 text-white text-[12px] font-normal 2xl:text-left xl:text-left text-center">
              Copyright ©
              <a href="index.html" class="hover:text-white font-semibold">Borox</a>
              all rights reserved. Powered by Borox.
            </div>
            <div
              class="lg:w-1/2 text-white font-normal text-[12px] flex 2xl:justify-end xl:justify-end lg:justify-end justify-between">
              <a href="javascript:void(0)" class="pr-10 hover:text-white">Privacy Policy</a>
              <a href="javascript:void(0)" class="hover:text-white">Terms and Conditions</a>
            </div>
          </div>
        </footer>
    </div>
    <i className="fa fa-arrow-up" aria-hidden="true"></i>
    </div>
  );
}
}

export default App;
