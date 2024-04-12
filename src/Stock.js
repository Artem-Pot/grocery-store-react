import React from 'react';
import ProductStock from './components/Product-stock';
import imgProdict1 from './images/product/product-1.png'
import imgProdict2 from './images/product/product-2.png'
import imgProdict3 from './images/product/product-3.png'
import imgProdict4 from './images/product/product-4.png'

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
                        imgProduct={imgProdict1}
                        productSales='-50%'
                        productPriceCart='44,50'
                        productNoCart='48,00'
                        productName='Г/Ц Блинчики с мясом вес, Россия'
                        boxRating='1'
                        />

                        <ProductStock 
                        imgProduct={imgProdict2}
                        productSales='-50%'
                        productPriceCart='54,50'
                        productNoCart='60,00'
                        productName='Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное 1л'
                        />

                        <ProductStock 
                        imgProduct={imgProdict3}
                        productSales='-50%'
                        productPriceCart='77,50'
                        productNoCart='82,00'
                        productName='Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскано'
                        />

                        <ProductStock 
                        imgProduct={imgProdict4}
                        productSales='-50%'
                        productPriceCart='80,50'
                        productNoCart='87,00'
                        productName='Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и сыром'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stock;