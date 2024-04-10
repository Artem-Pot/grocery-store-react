import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Slider from './Slider';
import Stock from './Stock';
import NewItems from './New-items';
import Earlier from './Earlier';
import Special from './Special';
import OurStores from './Our-stores';
import Articles from './Articles';
import Footer from './Footer';

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
