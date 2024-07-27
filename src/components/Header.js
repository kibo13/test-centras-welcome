import React from 'react';

const Header = () => {
    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">Centras Welcome</a>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">Главная</a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link">Как это работает?</a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">Подать заявку</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;