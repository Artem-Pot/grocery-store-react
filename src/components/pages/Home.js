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

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.arr = {
            orders : [],
            ArrProducts
        }
        this.addToOrder = this.addToOrder.bind(this)
    }
    render() {
        return (
            <div>
                <Header />
                <Slider />
                <Stock ArrProducts={this.arr.ArrProducts} onAdd={this.addToOrder}/>
                <NewItems ArrProducts={this.arr.ArrProducts} onAdd={this.addToOrder}/>
                <Earlier ArrProducts={this.arr.ArrProducts} onAdd={this.addToOrder}/>
                <Special />
                <OurStores />
                <Articles />
                <Footer />
            </div>
        );
    }

    addToOrder(item) {
        this.setState({orders: [...this.state.orders, item]}, () => {
            console.log(this.state.orders);
            
        })
    }

};

export default Home;