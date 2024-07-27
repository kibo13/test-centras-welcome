import React from 'react';

const ContactForm = () => {
    return (
        <section className="contact section container" id="contact">
            <h2 className="section__title">
                Подать заявку
            </h2>
            <form action="#" className="contact__form">
                <div className="contact__form-group">
                    <label htmlFor="name" className="contact__form-label">Представьтесь, пожалуйста!</label>
                    <input type="text" id="name" className="contact__form-input" required />
                </div>
                <div className="contact__form-group">
                    <label htmlFor="email" className="contact__form-label">Ваш email для связи</label>
                    <input type="email" id="email" className="contact__form-input" required />
                </div>
                <div className="contact__form-group">
                    <label htmlFor="topic" className="contact__form-label">Какова ваша цель?</label>
                    <select id="topic" className="contact__form-input" required>
                        <option value="idea">Я новатор, у меня есть идея</option>
                        <option value="partnership">Меня интересует партнерство</option>
                    </select>
                </div>
                <div className="contact__form-group">
                    <label htmlFor="description" className="contact__form-label">Расскажите о вашей идее</label>
                    <textarea id="description" className="contact__form-textarea" required></textarea>
                </div>
                <button type="submit" className="contact__form-button">Отправить</button>
            </form>
        </section>
    );
};

export default ContactForm;