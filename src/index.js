import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Slider from './Slider';
import './css/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        <Header />
        <Slider />
    </div>
);
