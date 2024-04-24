import React, {Component} from 'react';
// import ProductStock from '../components/product/Product-stock';

class Stock extends Component {
    render() {
        return (
            <section className="product-list product-list_stock">
                <div className="container">
                    <div className="product-list__wrapper">
                        <div className="product-list__header">
                            <h2 className="title-h2">Тестовые товары</h2>
                            <a className="product-list__all" href="#">Все товары</a>
                        </div>
                        <div className="product-list__box">
                            
                        {this.props.ArrProducts.map(el => (

                            <div className="product" key={el.id}>
                                <div className="product__box-images">
                                    <a className="product__link" href="#">
                                        <img src={el.imgProduct} className="product__images" alt="Изображение продукта"/>
                                    </a>
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
                                    <a className="product__link" href="#">{el.productName}</a>
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
    
                            ))}

                        


                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Stock;

// <div className="product-list__box">
// {this.props.ArrProducts.map(el => (
//     <h1 key={el.id}>{el.id}</h1>))}
// </div>

