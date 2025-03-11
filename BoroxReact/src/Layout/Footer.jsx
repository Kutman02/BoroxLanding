function Footer() {
  return (
    <>
      {/* футер */}
      <footer className="bg-[#070415]">
        <div className="flex justify-center mx-auto mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] 2xl:flex-row xl:flex-row lg:flex-row flex-col md:max-w-[720px] max-[320px]:px-[12px] sm:max-w-[540px] gap-[30px] px-6 py-8">
          <div className="lg:w-1/2 text-white text-[12px] font-normal 2xl:text-left xl:text-left text-center">
            Авторское право ©
            <a href="index.html" className="hover:text-white font-semibold">
              Borox
            </a>
            все права защищены. Работает на Borox.
          </div>
          <div className="lg:w-1/2 text-white font-normal text-[12px] flex 2xl:justify-end xl:justify-end lg:justify-end justify-between">
            <a href="javascript:void(0)" className="pr-10 hover:text-white">
              Политика конфиденциальности
            </a>
            <a href="javascript:void(0)" className="hover:text-white">
              Условия использования
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
