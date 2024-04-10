import React from 'react';
import ProductEarlier from './components/Product-earlier';

function Earlier() {
    return (
        <section className="product-list product-list_stock">
            <div className="container">
                <div className="product-list__wrapper">
                    <div className="product-list__header">
                        <h2 className="title-h2">Покупали ранее</h2>
                        <a className="product-list__all" href="#">Все покупки</a>
                    </div>
                    <div className="product-list__box">
                        <ProductEarlier />
                        <ProductEarlier />
                        <ProductEarlier />
                        <ProductEarlier />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Earlier;