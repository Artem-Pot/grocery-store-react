import React from "react";

import Header from '../Header';
import Slider from '../Slider';
import Stock from '../Stock';
import NewItems from '../New-items';
import Earlier from '../Earlier';
import Special from '../Special';
import OurStores from '../Our-stores';
import Articles from '../Articles';
import Footer from '../Footer';

const Home = () => {
    return (
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
};

export default Home;