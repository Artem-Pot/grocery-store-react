import React, {Component} from 'react';
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

class NewItems extends Component {
    render() {
        return (
            <section className="product-list product-list_stock">
                <div className="container">
                    <div className="product-list__wrapper">
                        <div className="product-list__header">
                            <h2 className="title-h2">Новинки</h2>
                            <Link to='/' className="product-list__all">Все новинки</Link>
                        </div>
                        <div className="product-list__box">
                        
                        {this.props.ArrProducts.slice(0,4).map(el => ( // вывод 4 товаров на страницу

                                <div className="product" key={el.id} onAdd={this.props.onAdd}>
                                    <div className="product__box-images">
                                    <Link to='/' className="product__link">
                                        <img src={el.imgProduct} className="product__images" alt="Изображение продукта"/>
                                    </Link>
                                        <button className="product__button-favorites" type="button"></button>
                                        <span className="product__sales">{el.productSales}</span>
                                    </div>
                                    <div className="product__box-price">
                                        <div className="product__price">
                                            <span className="product__price-cart">{el.productPriceCart} ₽</span>
                                            <span className="product__title">С картой</span>
                                        </div>
                                        <div className="product__price">
                                            <span className="product__price-nocart">{el.productNoCart} ₽</span>
                                            <span className="product__title">Обычная</span>
                                        </div>
                                    </div>
                                    <p className="product__name">
                                        <Link to='/' className="product__link">{el.productName}</Link>
                                    </p>
                                    <div className="product__box-rating">
                                        <button className="product__star product__star_on" type="button"></button>
                                        <button className="product__star product__star_on" type="button"></button>
                                        <button className="product__star product__star_on" type="button"></button>
                                        <button className="product__star product__star_on" type="button"></button>
                                        <button className="product__star" type="button"></button>
                                    </div>
                                    <button className="product__button-buy" type="button" onClick={() => this.props.onAdd(this.props.ArrProducts)}>В корзину</button>
                                </div>
                            
                                ))}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default NewItems;