import React, { Component } from 'react'

export class Order extends Component {
  render() {
    return (
      <div>
        <li className='product__card'>
          <img src={this.props.item.imgProduct} className="product__images product__images_card" alt="Изображение продукта"/>
          <p className="product__name product__name_card">{this.props.item.productName}</p>
          <span className="product__price-cart product__price-cart_cart">{this.props.item.productPriceCart} ₽</span>
        </li>

      </div>
    )
  }
}

export default Order
