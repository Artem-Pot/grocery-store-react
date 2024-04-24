import React, {Component} from 'react';
// import ProductStock from '../components/product/Product-stock';

class Stock extends Component {
    render() {
        return (
            <section className="product-list product-list_stock">
                <div className="container">
                    <div className="product-list__wrapper">
                        <div className="product-list__header">
                            <h2 className="title-h2">Тестовые товары</h2>
                            <a className="product-list__all" href="#">Все товары</a>
                        </div>
                        <div className="product-list__box">
                            {this.props.ArrProducts.map(el => (
                                <h1 key={el.id}>{el.id}</h1>))}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Stock;



