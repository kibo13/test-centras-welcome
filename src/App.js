import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import OrderList from './pages/OrderList';

import './App.css';

function App() {
    return (
    <Router>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/orders' element={<OrderList />} />
        </Routes>
    </Router>
    );
}

export default App;