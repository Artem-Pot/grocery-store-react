import React from 'react';
import ProductStock from './components/Product-stock';

function NewItems() {
    return (
        <section className="product-list product-list_stock">
            <div className="container">
                <div className="product-list__wrapper">
                    <div className="product-list__header">
                        <h2 className="title-h2">Новинки</h2>
                        <a className="product-list__all" href="#">Все новинки</a>
                    </div>
                    <div className="product-list__box">
                        <ProductStock />
                        <ProductStock />
                        <ProductStock />
                        <ProductStock />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewItems;