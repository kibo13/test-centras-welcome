import React from 'react';

const Main = () => {
    return (
        <main className="main">
            <section className="home section" id="home">
                <div className="home__container container grid">
                    <img className="home__img" src={'assets/images/intro.svg'} alt="Intro" />
                    <div className="home__data">
                        <h1 className="home__title">Centras Welcome</h1>
                        <p className="home__description">
                            Это уникальная платформа, созданная для поддержки и развития инновационных идей и партнерств.
                            Мы стремимся помочь талантливым людям и амбициозным стартапам воплотить их мечты в реальность.
                            Это то место, где можно найти поддержку и ресурсы для вашего проекта.
                        </p>
                    </div>
                </div>
            </section>
            <section className="services section container" id="services">
                <h2 className="section__title">
                    Как это работает?
                </h2>
                <div className="services__container grid">
                    <div className="services__data">
                        <h3 className="services__subtitle">Подайте заявку</h3>
                        <img src={'assets/images/request.svg'} alt="Request" />
                        <p className="services__description">Расскажите нам о своей идее или предложите партнерство, заполнив форму на сайте.</p>
                    </div>

                    <div className="services__data">
                        <h3 className="services__subtitle">Получите обратную связь</h3>
                        <img src={'assets/images/contact.svg'} alt="Contact" />
                        <p className="services__description">Мы внимательно изучим каждую заявку и свяжемся с вами для дальнейшего обсуждения.</p>
                    </div>

                    <div className="services__data">
                        <h3 className="services__subtitle">Реализуйте свою мечту</h3>
                        <img src={'assets/images/collaboration.svg'} alt="Collaboration" />
                        <p className="services__description">Совместно мы сможем найти пути для успешной реализации вашего проекта.</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Main;