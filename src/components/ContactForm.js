import React, { useState } from 'react';
import { addData } from '../services/firebase/firebase.utils';
import Loader from './Loader';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        topic: '',
        email: '',
        description: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showLoader, setShowLoader] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setShowLoader(true);

        try {
            await addData('orders', formData);
            alert('Заявка успешно отправлена!');
            setFormData({
                name: '',
                topic: '',
                email: '',
                description: '',
            });
        } catch (error) {
            console.error('Error submitting form: ', error);
            alert('Ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.');
        } finally {
            setIsSubmitting(false);
            setShowLoader(false);
        }
    };

    return (
        <section className="contact section container" id="contact">
            <h2 className="section__title">Подать заявку</h2>
            {showLoader && <Loader />}
            <form onSubmit={handleSubmit} className="contact__form">
                <div className="contact__form-group">
                    <label htmlFor="name" className="contact__form-label">Представьтесь, пожалуйста!</label>
                    <input
                        type="text"
                        id="name"
                        className="contact__form-input"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="contact__form-group">
                    <label htmlFor="email" className="contact__form-label">Ваш email для связи</label>
                    <input
                        type="email"
                        id="email"
                        className="contact__form-input"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="contact__form-group">
                    <label htmlFor="topic" className="contact__form-label">Какова ваша цель?</label>
                    <select
                        id="topic"
                        className="contact__form-input"
                        value={formData.topic}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Выберите</option>
                        <option value="idea">Я новатор, у меня есть идея</option>
                        <option value="partnership">Меня интересует партнерство</option>
                    </select>
                </div>
                <div className="contact__form-group">
                    <label htmlFor="description" className="contact__form-label">Расскажите о вашей идее</label>
                    <textarea
                        id="description"
                        className="contact__form-textarea"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="contact__form-button"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Отправка...' : 'Отправить'}
                </button>
            </form>
        </section>
    );
};

export default ContactForm;