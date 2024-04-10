import React from 'react';
import Image from './Image';
import imgProduct from '../images/product/product-1.png';

function ProductStock() {
    return (
        <div className="product">
            <div className="product__box-images">
                <a className="product__link" href="#">
                    <Image image={imgProduct} className="product__images" alt="Изображение продукта"/>
                </a>
                <button className="product__button-favorites" type="button"></button>
                <span className="product__sales">-50%</span>
            </div>
            <div className="product__box-price">
                <div className="product__price">
                    <span className="product__price-cart">44,50 ₽</span>
                    <span className="product__title">С картой</span>
                </div>
                <div className="product__price">
                    <span className="product__price-nocart">50,50 ₽</span>
                    <span className="product__title">Обычная</span>
                </div>
            </div>
            <p className="product__name">
                <a className="product__link" href="#">Г/Ц Блинчики с мясом вес, Россия</a>
            </p>
            <div className="product__box-rating">
                <button className="product__star product__star_on" type="button"></button>
                <button className="product__star product__star_on" type="button"></button>
                <button className="product__star product__star_on" type="button"></button>
                <button className="product__star product__star_on" type="button"></button>
                <button className="product__star" type="button"></button>
            </div>
            <button className="product__button-buy" type="button">В корзину</button>
        </div>
)
}
                        
export default ProductStock;