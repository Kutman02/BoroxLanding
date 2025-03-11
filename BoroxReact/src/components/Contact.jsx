function Contact() {
  return (
    <>
      {/* контакты */}
      <section id="contact" className="section-contact 2xl:py-[80px] py-[70px]">
        <div
          className="banner text-center mb-[30px]"
          data-aos="fade-up"
          data-aos-duration={2000}
          data-aos-delay={300}>
          <span className="text-[14px] text-[#777]">ФОРМА</span>
          <h2 className="text-center mt-[5px] 2xl:text-[35px] xl:text-[33px] lg:text-[30px] md:text-[26px] sm:text-[24px] text-[22px] font-bold">
            Связаться с <span className="text-[#7963e0]">НАМИ</span>
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
                      placeholder="Полное имя"
                    />
                  </div>
                  <div className="border-b">
                    <input
                      type="email"
                      className="appearance-none w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none"
                      id="umail"
                      placeholder="Электронная почта"
                    />
                  </div>
                  <div className="border-b">
                    <input
                      type="text"
                      className="appearance-none w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none"
                      id="phone"
                      placeholder="Телефон"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="appearance-none w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none rounded-b-lg"
                      id="subject"
                      placeholder="Тема"
                    />
                  </div>
                </div>
                <div className="mb-0">
                  <div className="mb-4">
                    <textarea
                      className="w-full border rounded-xl pl-4 pt-2 focus:outline-none"
                      id="exampleFormControlTextarea1"
                      rows={8}
                      placeholder="Сообщение"
                      defaultValue={''}
                    />
                  </div>
                  <button
                    type="button"
                    className="text-white bg-[#7963e0] hover:bg-opacity-80 no-underline font-medium rounded-full text-sm px-8 py-2.5 mr-2">
                    Отправить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
export default Contact;
