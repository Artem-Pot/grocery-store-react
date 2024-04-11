import React from 'react';
import Image from './components/Image';
import heart from './images/header/heart.svg';
import order from './images/header/order.svg';
import shoppingCart from './images/header/shopping-cart.svg';
import avatar from './images/header/avatar.png';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
              <div className="container">
                <div className="header__wrapper"><a className="header__link-img" href="index.html">
                    <div className="header__img-logo"></div></a>
                    <div className="header__menu">
                      <div className="button__menu"> <span>Каталог</span></div>
                      <ul className="header__list">
                        <li className="header__items">
                          <a className="header__link-product" href="#">Молоко, сыр, яйцо</a>
                        </li>
                        <li className="header__items">
                          <a className="header__link-product" href="#">Хлеб</a>
                        </li>
                        <li className="header__items">
                          <a className="header__link-product" href="#">Фрукты и овощи</a>
                        </li>
                        <li className="header__items">
                          <a className="header__link-product" href="#">Напитки</a>
                        </li>
                        <li className="header__items">
                          <a className="header__link-product" href="#">Кондитерские изделия</a>
                        </li>
                        <li className="header__items">
                          <a className="header__link-product" href="#">Чай, кофе</a>
                        </li>
                      </ul>
                  </div>
                  <div className="header__box-search">
                    <input className="header__search" type="text" placeholder="Найти товар" />
                    <button className="button__search"></button>
                  </div>
                  <div className="header__box-icons">

                      <a href="#">
                        <div className="header__wrapper-icons">
                            <Image image={heart} className="header__img-icons"/>
                            <span className="header__title">Избранное</span>
                        </div>
                      </a>

                    <a href="#">
                      <div className="header__wrapper-icons">
                          <Image image={order} className="header__img-icons"/>
                          <span className="header__title">Заказы</span>
                        </div>
                    </a>

                    <a href="#">
                      <div className="header__wrapper-icons">
                            <Image image={shoppingCart} className="header__img-icons"/>
                            <span className="header__title">Корзина</span>
                            <span className="header__number-orders">12</span>
                      </div>
                    </a>
                        
                  </div>
                  <div className="header__box-profile">
                    <Image image={avatar} className="header__img-ava" alt="Аватар"/>
                    <span className="header__name-user">Алексей</span>
                    <button className="button__arrow"></button>
                  </div>
                </div>
              </div>
          </header>
        )
    }
}

export default Header;