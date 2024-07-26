import React, { useState } from 'react';
import { addData } from './services/firebase/firebase.utils';
import './App.css';

function App() {
    const [form, setForm] = useState({
        name: '',
        type: 'Идея',
        contactMethod: 'Телефон',
        contactDetail: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await addData('orders', {
            name: '',
            type: 'Идея',
            contactMethod: 'Телефон',
            contactDetail: '',
            description: '',
        });
    };

    return (
        <div className='container'>
            <main>
                <div className='pt-5 py-2 text-center'>
                    <h2 className='headline'>Centras Welcome</h2>
                    <p className='lead'>
                        Это уникальная платформа, созданная для поддержки и развития инновационных идей и партнерств. Мы
                        стремимся помочь талантливым людям и амбициозным стартапам воплотить их мечты в реальность. Если
                        у вас есть креативная идея или вы ищете новые возможности для сотрудничества, наш портал — это
                        то место, где можно найти поддержку и ресурсы для вашего проекта.
                    </p>
                </div>
                <div class='container px-4 py-2' id='featured-3'>
                    <h2 class='pb-2 border-bottom'>Почему Centras Welcome?</h2>
                    <div class='row g-4 py-5 row-cols-1 row-cols-lg-3'>
                        <div class='feature col'>
                            <h2>Поддержка инноваций</h2>
                            <p>Мы верим в силу новых идей и готовы помочь вам на каждом этапе их реализации.</p>
                        </div>
                        <div class='feature col'>
                            <h2>Простота подачи заявки</h2>
                            <p>
                                Все, что нужно, — это заполнить простую форму обратной связи и отправить нам ваше
                                мини-эссе или описание партнерства.
                            </p>
                        </div>
                        <div class='feature col'>
                            <h2>Реальные возможности</h2>
                            <p>
                                Ваши идеи могут стать частью нашей программы и получить доступ к нашим ресурсам и опыту.
                            </p>
                        </div>
                    </div>
                </div>
                <div class='container px-4 py-2' id='hanging-icons'>
                    <h2 class='pb-2 border-bottom'>Как это работает?</h2>
                    <div class='row g-4 py-5 row-cols-1 row-cols-lg-3'>
                        <div class='col d-flex align-items-start'>
                            <div>
                                <h2>Подайте заявку</h2>
                                <p>Расскажите нам о своей идее или предложите партнерство, заполнив форму на сайте.</p>
                            </div>
                        </div>
                        <div class='col d-flex align-items-start'>
                            <div>
                                <h2>Получите обратную связь</h2>
                                <p>Мы внимательно изучим каждую заявку и свяжемся с вами для дальнейшего обсуждения.</p>
                            </div>
                        </div>
                        <div class='col d-flex align-items-start'>
                            <div>
                                <h2>Реализуйте свою мечту</h2>
                                <p>Совместно мы сможем найти пути для успешной реализации вашего проекта.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
