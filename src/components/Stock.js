import React, {Component} from 'react';
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Product from './product/Product';

class Stock extends Component {
    render() {
        return (
            <section className="product-list product-list_stock">
                <div className="container">
                    <div className="product-list__wrapper">
                        <div className="product-list__header">
                            <h2 className="title-h2">Акции</h2>
                            <Link to='/' className="product-list__all">Все товары</Link>
                        </div>
                        <div className="product-list__box">

                        {this.props.items.slice(0,4).map(el => ( // вывод 4 товаров на страницу

                            <Product key={el.id} item={el} onAdd={this.props.onAdd}/>
                        
                            ))}
                            
                            
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Stock;




