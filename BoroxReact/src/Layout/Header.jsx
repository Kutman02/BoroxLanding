import Logo from '../assets/img/logo/logo.png';

function Header() {
return (
    <>
        {/* header */}
        <header className="bg-[#f6f8ff] w-full bx-static">
            <nav className="border-gray-200 py-2">
                <div className="flex flex-wrap justify-between items-center px-6 mx-auto 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-[320px]:px-[12px]">
                    <a href="index.html" className="flex items-center">
                        <img src={Logo} className="w-[90px]" alt="Логотип" />
                    </a>
                    <div className="flex items-center lg:order-2">
                        <button
                            type="button"
                            className="text-white bg-[#7963e0] hover:bg-opacity-80 no-underline font-medium rounded-full text-sm px-8 py-2.5 mr-2 hidden 2xl:block xl:block lg:block">
                            Получить цитату
                        </button>
                        <button
                            data-collapse-toggle="mobile-menu"
                            type="button"
                            id="dropdown-toggle"
                            className="inline-flex items-center border p-2 text-lg text-gray-500 rounded-lg lg:hidden"
                            aria-controls="mobile-menu"
                            aria-expanded="false">
                            <span className="sr-only">Открыть главное меню</span>
                            <i className="fa-solid fa-bars" />
                        </button>
                    </div>
                    <div
                        className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu">
                        <ul
                            className="flex flex-col font-medium lg:flex-row lg:space-x-8 2xl:border-0 lg:border-0 border lg:mt-0 lg-mb-4 lg:p-[0] lg:border-none lg:rounded-[0] lg:text-[15px] mt-4 p-[15px] 2xl:mb-0 xl:mb-0 lg:mb-0 mb-2 border-[#eee] rounded-[30px] text-[13px]"
                            id="top-menu">
                            <li className="nav-item active">
                                <a href="#home" className="block py-2 pr-4 pl-3 text-[#000] lg:p-0">
                                    Главная
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="block py-2 pr-4 pl-3 text-[#000] lg:p-0">
                                    О нас
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#experience" className="block py-2 pr-4 pl-3 text-[#000] lg:p-0">
                                    Опыт
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#portfolio" className="block py-2 pr-4 pl-3 text-[#000] lg:p-0">
                                    Портфолио
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#news" className="block py-2 pr-4 pl-3 text-[#000] lg:p-0">
                                    Новости
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="block py-2 pr-4 pl-3 text-[#000] lg:p-0">
                                    Связаться с нами
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </>
);
}

export default Header;
