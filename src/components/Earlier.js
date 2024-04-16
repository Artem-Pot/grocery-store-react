import React from 'react';
import ProductEarlier from './product/Product-earlier';
import ArrProducts from './product/ArrProducts';

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
                        <ProductEarlier 
                        imgProduct={ArrProducts[5].imgProduct}
                        productPriceCart={ArrProducts[5].productPriceCart}
                        productName={ArrProducts[5].productName}
                        boxRating={ArrProducts[5].boxRating}
                        />

                        <ProductEarlier 
                        imgProduct={ArrProducts[3].imgProduct}
                        productPriceCart={ArrProducts[3].productPriceCart}
                        productName={ArrProducts[3].productName}
                        boxRating={ArrProducts[3].boxRating}
                        />

                        <ProductEarlier 
                        imgProduct={ArrProducts[4].imgProduct}
                        productPriceCart={ArrProducts[4].productPriceCart}
                        productName={ArrProducts[4].productName}
                        boxRating={ArrProducts[4].boxRating}
                        />

                        <ProductEarlier 
                        imgProduct={ArrProducts[1].imgProduct}
                        productPriceCart={ArrProducts[1].productPriceCart}
                        productName={ArrProducts[1].productName}
                        boxRating={ArrProducts[1].boxRating}
                        />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Earlier;