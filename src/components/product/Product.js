import React, { Component } from 'react';
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";


export class Product extends Component {
  render() {
    return (

      <div className="product">
        <div className="product__box-images">
        <Link to='/' className="product__link">
            <img src={this.props.item.imgProduct} className="product__images" alt="Изображение продукта"/>
        </Link>
            <button className="product__button-favorites" type="button"></button>
            <span className="product__sales">{this.props.item.productSales}</span>
        </div>
        <div className="product__box-price">
            <div className="product__price">
                <span className="product__price-cart">{this.props.item.productPriceCart} ₽</span>
                <span className="product__title">С картой</span>
            </div>
            <div className="product__price">
                <span className="product__price-nocart">{this.props.item.productNoCart} ₽</span>
                <span className="product__title">Обычная</span>
            </div>
        </div>
        <p className="product__name">
            <Link to='/' className="product__link">{this.props.item.productName}</Link>
        </p>
        <div className="product__box-rating">
            <button className="product__star product__star_on" type="button"></button>
            <button className="product__star product__star_on" type="button"></button>
            <button className="product__star product__star_on" type="button"></button>
            <button className="product__star product__star_on" type="button"></button>
            <button className="product__star" type="button"></button>
        </div>
        <button className="product__button-buy" type="button" 
        onClick={() => this.props.onAdd(this.props.item)}>В корзину</button>
    </div>
    )
  }
}

export default Product;
