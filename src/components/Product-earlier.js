import React from 'react';

function ProductStock(props) {
    return (
        <div className="product">
            <div className="product__box-images">
                <a className="product__link" href="#">
                    <img src={props.imgProduct} className="product__images" alt="Изображение продукта"/>
                </a>
                <button className="product__button-favorites" type="button"></button>
            </div>
            <div className="product__box-price">
                <div className="product__price">
                    <span className="product__price-cart">{props.productPriceCart} ₽</span>
                </div>
            </div>
            <p className="product__name">
                <a className="product__link" href="#">{props.productName}</a>
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