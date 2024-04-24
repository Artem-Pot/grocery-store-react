import React from "react";
import ArrProducts from '../../components/product/ArrProducts';

import Header from '../Header';
import Slider from '../Slider';
import Stock from '../Stock';
import NewItems from '../New-items';
import Earlier from '../Earlier';
import Special from '../Special';
import OurStores from '../Our-stores';
import Articles from '../Articles';
import Footer from '../Footer';

import Test from '../Test';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.arr = {
            ArrProducts
        }
    }
    render() {
        return (
            <div>
                <Header />
                <Slider />
                <Stock />
                <Test ArrProducts={this.arr.ArrProducts}/>
                <NewItems />
                <Earlier />
                <Special />
                <OurStores />
                <Articles />
                <Footer />
            </div>
        );
    }
};


// const Home = () => {
//     return (
//     <div>
//         <Header />
//         <Slider />
//         <Stock />
//         <NewItems />
//         <Earlier />
//         <Special />
//         <OurStores />
//         <Articles />
//         <Footer />
//     </div>
// );
// };

export default Home;