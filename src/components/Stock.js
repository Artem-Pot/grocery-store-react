import React from 'react';
import ProductStock from '../components/product/Product-stock';
import ArrProducts from './product/ArrProducts';

function Stock() {
    return (
        <section className="product-list product-list_stock">
            <div className="container">
                <div className="product-list__wrapper">
                    <div className="product-list__header">
                        <h2 className="title-h2">Акции</h2>
                        <a className="product-list__all" href="#">Все акции</a>
                    </div>
                    <div className="product-list__box">

                    <ProductStock 
                    imgProduct={ArrProducts[0].imgProduct}
                    productSales={ArrProducts[0].productSales}
                    productPriceCart={ArrProducts[0].productPriceCart}
                    productNoCart={ArrProducts[0].productNoCart}
                    productName={ArrProducts[0].productName}
                    boxRating={ArrProducts[0].boxRating}
                    />
                    
                    <ProductStock 
                    imgProduct={ArrProducts[1].imgProduct}
                    productSales={ArrProducts[1].productSales}
                    productPriceCart={ArrProducts[1].productPriceCart}
                    productNoCart={ArrProducts[1].productNoCart}
                    productName={ArrProducts[1].productName}
                    boxRating={ArrProducts[1].boxRating}
                    />
                    
                    <ProductStock 
                    imgProduct={ArrProducts[2].imgProduct}
                    productSales={ArrProducts[2].productSales}
                    productPriceCart={ArrProducts[2].productPriceCart}
                    productNoCart={ArrProducts[2].productNoCart}
                    productName={ArrProducts[2].productName}
                    boxRating={ArrProducts[2].boxRating}
                    />
                    
                    <ProductStock 
                    imgProduct={ArrProducts[3].imgProduct}
                    productSales={ArrProducts[3].productSales}
                    productPriceCart={ArrProducts[3].productPriceCart}
                    productNoCart={ArrProducts[3].productNoCart}
                    productName={ArrProducts[3].productName}
                    boxRating={ArrProducts[3].boxRating}
                    />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stock;



