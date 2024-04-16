import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Slider from './components/Slider';
import Stock from './components/Stock';
import NewItems from './components/New-items';
import Earlier from './components/Earlier';
import Special from './components/Special';
import OurStores from './components/Our-stores';
import Articles from './components/Articles';
import Footer from './components/Footer';

import './css/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        <Header />
        <Slider />
        <Stock />
        <NewItems />
        <Earlier />
        <Special />
        <OurStores />
        <Articles />
        <Footer />
    </div>
);
