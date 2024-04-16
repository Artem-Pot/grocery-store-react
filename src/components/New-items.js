import React from 'react';
import ProductStock from '../components/product/Product-stock';
import ArrProducts from './product/ArrProducts';

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
                    
                    <ProductStock 
                    imgProduct={ArrProducts[5].imgProduct}
                    productSales={ArrProducts[5].productSales}
                    productPriceCart={ArrProducts[5].productPriceCart}
                    productNoCart={ArrProducts[5].productNoCart}
                    productName={ArrProducts[5].productName}
                    boxRating={ArrProducts[5].boxRating}
                    />

                    <ProductStock 
                    imgProduct={ArrProducts[3].imgProduct}
                    productSales={ArrProducts[3].productSales}
                    productPriceCart={ArrProducts[3].productPriceCart}
                    productNoCart={ArrProducts[3].productNoCart}
                    productName={ArrProducts[3].productName}
                    boxRating={ArrProducts[3].boxRating}
                    />

                    <ProductStock 
                    imgProduct={ArrProducts[4].imgProduct}
                    productSales={ArrProducts[4].productSales}
                    productPriceCart={ArrProducts[4].productPriceCart}
                    productNoCart={ArrProducts[4].productNoCart}
                    productName={ArrProducts[4].productName}
                    boxRating={ArrProducts[4].boxRating}
                    />

                    <ProductStock 
                    imgProduct={ArrProducts[2].imgProduct}
                    productSales={ArrProducts[2].productSales}
                    productPriceCart={ArrProducts[2].productPriceCart}
                    productNoCart={ArrProducts[2].productNoCart}
                    productName={ArrProducts[2].productName}
                    boxRating={ArrProducts[2].boxRating}
                    />

                </div>
                </div>
            </div>
        </section>
    )
}

export default NewItems;