import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import { fetchData } from '../services/firebase/firebase.utils';

import './OrderList.css';

function OrderList() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const { data } = await fetchData('orders');
                setOrders(data);
            } catch (error) {
                console.error('Error fetching orders: ', error);
            } finally {
                setLoading(false);
            }
        };

        getOrders();
    }, []);

    return (
        <section className="orders section container" id="orders">
            <h2 className="section__title">Список заявок</h2>
            {loading ? <Loader /> : (
                <div className="orders__grid">
                    {orders.map((order) => (
                        <div key={order.id} className="order">
                            <div className="order__item">
                                <span className="order__label">Автор:</span>
                                <h3 className="order__title">{order.name}</h3>
                            </div>
                            <div className="order__item">
                                <span className="order__label">Почта:</span>
                                <p className="order__email">{order.email}</p>
                            </div>
                            <div className="order__item">
                                <span className="order__label">Цель:</span>
                                <p className="order__topic">{order.topic === 'idea' ? 'Идея' : 'Партнерство'}</p>
                            </div>
                            <div className="order__item">
                                <span className="order__label">Описание:</span>
                                <p className="order__description">{order.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default OrderList;