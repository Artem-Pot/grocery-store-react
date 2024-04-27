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

import imgProdict1 from '../../images/pages/home/product/product-1.png'
import imgProdict2 from '../../images/pages/home/product/product-2.png'
import imgProdict3 from '../../images/pages/home/product/product-3.png'
import imgProdict4 from '../../images/pages/home/product/product-4.png'
import imgProdict5 from '../../images/pages/home/product/product-5.png'
import imgProdict6 from '../../images/pages/home/product/product-6.png'
import imgProdict7 from '../../images/pages/home/product/product-7.png'
import imgProdict8 from '../../images/pages/home/product/product-8.png'
import imgProdict9 from '../../images/pages/home/product/product-9.png'
import imgProdict10 from '../../images/pages/home/product/product-10.png'
import imgProdict11 from '../../images/pages/home/product/product-11.png'


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items : [    {
                id: 1,
                imgProduct: imgProdict1,
                productSales:'-30%',
                productPriceCart:'44,50',
                productNoCart:'48,00',
                productName: 'Г/Ц Блинчики с мясом вес, Россия',
                boxRating: 3
            },
            {
                id: 2,
                imgProduct: imgProdict2,
                productSales:'-20%',
                productPriceCart:'54,50',
                productNoCart:'60,00',
                productName: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное 1л',
                boxRating: 4
            },
            {
                id: 3,
                imgProduct: imgProdict3,
                productSales:'-10%',
                productPriceCart:'77,50',
                productNoCart:'82,00',
                productName: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскано',
                boxRating: 4
            },
            {
                id: 4,
                imgProduct: imgProdict4,
                productSales:'-50%',
                productPriceCart:'80,50',
                productNoCart:'87,00',
                productName: 'Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и сыром',
                boxRating: 5
            },
            {
                id: 5,
                imgProduct: imgProdict5,
                productSales:'-30%',
                productPriceCart:'560,50',
                productNoCart:'599,00',
                productName: 'Колбаса сырокопченая 0,5 кг',
                boxRating: 4
            },
            {
                id: 6,
                imgProduct: imgProdict6,
                productSales:'-15%',
                productPriceCart:'77,99',
                productNoCart:'90',
                productName: 'Колбаса «ДЕСНА-ПОЛЕСЬЕ 0.4 кг»',
                boxRating: 5
            },
            {
                id: 7,
                imgProduct: imgProdict7,
                productSales:'-15%',
                productPriceCart:'139,99',
                productNoCart:'156,50',
                productName: 'Сыр Dorbly 300гр.',
                boxRating: 5
            },
            {
                id: 8,
                imgProduct: imgProdict8,
                productSales:'-25%',
                productPriceCart:'77,99',
                productNoCart:'90',
                productName: 'Молоко сгущенное РОГАЧЕВ Егорка, цельное с сахаром',
                boxRating: 4
            },
            {
                id: 9,
                imgProduct: imgProdict9,
                productSales:'-18%',
                productPriceCart:'192,99',
                productNoCart:'215',
                productName: 'Масло сливочное 82% Простоквашино',
                boxRating: 5
            },
            {
                id: 10,
                imgProduct: imgProdict10,
                productSales:'-19%',
                productPriceCart:'29,99',
                productNoCart:'34',
                productName: 'Йогурт Fruttis 70гр. Дыня',
                boxRating: 5
            },
            {
                id: 11,
                imgProduct: imgProdict11,
                productSales:'-19%',
                productPriceCart:'29,99',
                productNoCart:'34',
                productName: 'Йогурт Fruttis 70гр. Ягода',
                boxRating: 5
            }, ],
            orders : [],
            // ArrProducts
        }
        this.addToOrder = this.addToOrder.bind(this)
    }
    render() {
        return (
            <div>
                <Header />
                <Slider />
                <Stock items={this.state.items} onAdd={this.addToOrder}/>

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

// <NewItems ArrProducts={this.arr.ArrProducts} onAdd={this.addToOrder}/>
// <Earlier ArrProducts={this.arr.ArrProducts} onAdd={this.addToOrder}/>