import React from 'react';
import ProductStock from './components/Product-stock';
import imgProdict2 from './images/product/product-2.png'
import imgProdict3 from './images/product/product-3.png'
import imgProdict4 from './images/product/product-4.png'
import imgProdict5 from './images/product/product-5.png'

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
                        imgProduct={imgProdict5}
                        productSales='-50%'
                        productPriceCart='560,50'
                        productNoCart='599,00'
                        productName='Колбаса сырокопченая 0,5 кг»'
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

                    <ProductStock 
                        imgProduct={imgProdict2}
                        productSales='-50%'
                        productPriceCart='54,50'
                        productNoCart='60,00'
                        productName='Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное 1л'
                    />

                </div>
                </div>
            </div>
        </section>
    )
}

export default NewItems;