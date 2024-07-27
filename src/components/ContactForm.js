import React from 'react';

const ContactForm = () => {
    return (
        <section className="contact section container" id="contact">
            <h2 className="section__title">
                Подать заявку
            </h2>
            <form action="#" className="contact__form">
                <div className="contact__form-group">
                    <label htmlFor="name" className="contact__form-label">Имя и Фамилия</label>
                    <input type="text" id="name" className="contact__form-input" required />
                </div>
                <div className="contact__form-group">
                    <label htmlFor="email" className="contact__form-label">Email</label>
                    <input type="email" id="email" className="contact__form-input" required />
                </div>
                <div className="contact__form-group">
                    <label htmlFor="topic" className="contact__form-label">Тематика</label>
                    <select id="topic" className="contact__form-input" required>
                        <option value="idea">Идея</option>
                        <option value="partnership">Партнерство</option>
                    </select>
                </div>
                <div className="contact__form-group">
                    <label htmlFor="description" className="contact__form-label">Описание идеи</label>
                    <textarea id="description" className="contact__form-textarea" required></textarea>
                </div>
                <button type="submit" className="contact__form-button">Отправить</button>
            </form>
        </section>
    );
};

export default ContactForm;