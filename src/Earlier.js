import React from 'react';
import ProductEarlier from './components/Product-earlier';
import imgProdict2 from './images/product/product-2.png'
import imgProdict4 from './images/product/product-4.png'
import imgProdict5 from './images/product/product-5.png'
import imgProdict6 from './images/product/product-6.png'



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
                            imgProduct={imgProdict6}
                            productPriceCart='77,99'
                            productName='Колбаса «ДЕСНА-ПОЛЕСЬЕ 0.4 кг»'
                        />

                        <ProductEarlier 
                            imgProduct={imgProdict4}
                            productPriceCart='80,50'
                            productName='Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и сыром'
                        />

                        <ProductEarlier 
                            imgProduct={imgProdict5}
                            productPriceCart='560,50'
                            productName='Колбаса сырокопченая 0,5 кг»'
                        />

                        <ProductEarlier 
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

export default Earlier;