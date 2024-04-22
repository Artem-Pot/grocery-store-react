import React, { useState, useRef, useEffect } from "react";
import Image from './Image';
import avatar from '../images/header/profile.svg';
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";

import { ReactComponent as Heart } from "../images/header/heart.svg";
import { ReactComponent as Order} from "../images/header/order.svg";
import { ReactComponent as ShoppingCart} from "../images/header/shopping-cart.svg";
import { ReactComponent as ArrowDown} from "../images/header/arrow-down.svg";

function Header(){
    const [isActive, setIsActive] = useState(false);
      const container = useRef();
      const container2 = useRef();
      const container3 = useRef();
      const [dropdownState, setDropdownState] = useState({ open: false }); // выпадающее меню каталога
      const [dropdownStateUser, setDropdownStateUser] = useState({ open: false }); //выпающее меню профиля
      const [dropDownCart, setdropDownCart] = useState({ open: false }); //выпадающее меню корзины

      const handleDropdownClick = () =>
      setDropdownState({ open: !dropdownState.open });

      const UserDropdownClick = () =>
      setDropdownStateUser({ open: !dropdownStateUser.open });

      const UserdropDownCart = () =>
      setdropDownCart({ open: !dropDownCart.open });

     //событие меню 
      const ClickOutsid = (e) => {
        if (container.current && !container.current.contains(e.target)) {
          setDropdownState({ open: false }); }
      }

      const ClickOutsid2 = (e) => {
        if (container2.current && !container2.current.contains(e.target)) {
          setDropdownStateUser({ open: false }); }
      }

      const ClickOutsid3 = (e) => {
        if (container3.current && !container3.current.contains(e.target)) {
          setdropDownCart({ open: false }); }
      }

      //закрытие меню при клике вне меню
      useEffect(() => {document.addEventListener("mousedown", ClickOutsid);
        return () => document.removeEventListener("mousedown", ClickOutsid);}
      );

      useEffect(() => {document.addEventListener("mousedown", ClickOutsid2);
      return () => document.removeEventListener("mousedown", ClickOutsid2);}
    );

      useEffect(() => {document.addEventListener("mouseout", ClickOutsid3);
      return () => document.removeEventListener("mouseout", ClickOutsid3);}
    );

        return (
            <header className="header">
              <div className="container">
                <div className="header__wrapper">
                    <Link to='/'>
                      <div className="header__img-logo"></div>
                    </Link>
                    <div className="header__menu" ref={container}>
                    <Link to='/catalog'>
                      <div className="button__menu" onMouseOver={handleDropdownClick}>
                          <span>Каталог</span>
                      </div>
                      </Link>

                        {dropdownState.open && (
                        <ul className="header__list">
                          <li className="header__items">
                            <a href="#">Молоко, сыр, яйцо</a>
                          </li>
                          <li className="header__items">
                            <a href="#">Хлеб</a>
                          </li>
                          <li className="header__items">
                            <a href="#">Замороженные продукты</a>
                          </li>
                          <li className="header__items">
                            <a href="#">Напитки</a>
                          </li>
                          <li className="header__items">
                            <a href="#">Кондитерские изделия</a>
                          </li>
                          <li className="header__items">
                            <a href="#">Чай, кофе</a>
                          </li>
                          <li className="header__items">
                            <a href="#">Бакалея</a>
                          </li>
                          <li className="header__items">
                            <a href="#">Здоровое питание</a>
                          </li>
                          <li className="header__items">
                            <a href="#">Зоотовары</a>
                          </li>
                          <li className="header__items">
                            <a href="#">Детское питание</a>
                          </li>
                          <li className="header__items">
                            <a href="#">Мясо, птица, колбаса</a>
                          </li>
                          <li className="header__items">
                            <a href="#">Непродовольственные товары</a>
                          </li>
                        </ul>
                      )}
                    </div>
                  <div className="header__box-search">
                    <input className="header__search" type="text" placeholder="Найти товар" />
                    <button className="button__search"></button>
                  </div>
                  <div className="header__box-icons">

                      <a href="#">
                        <div className="header__wrapper-icons">
                            <Heart />
                            <span className="header__title">Избранное</span>
                        </div>
                      </a>

                    <a href="#">
                      <div className="header__wrapper-icons">
                          <Order />
                          <span className="header__title">Заказы</span>
                        </div>
                    </a>

                    <a href="#">
                      <div className="header__wrapper-icons" ref={container3} onMouseOver={UserdropDownCart}>
                      <ShoppingCart />
                            <span className="header__title">Корзина</span>
                            <span className="header__number-orders">12</span>
                      </div>
                      {dropDownCart.open && (
                        <ol className='header__list-items'>
                          <li >
                            Товар 1 fqwfqwf  fqwfqwf
                          </li>
                          <li >
                            Товар 2 fqwfqwfqw fqwfqwfqwf fqwfqwfqwfqwf
                          </li> 
                          <li>
                            Товар 3 fqwfqwfqwf fqwfqwfqwf
                          </li>
                        </ol>
                      )}
                    </a>
                        
                  </div>
                  <div className="header__box-profile" ref={container2} onClick={UserDropdownClick}>
                    <Image image={avatar} className="header__img-ava" alt="Аватар"/>
                    <span className="header__name-user">Артём</span>
                    <button>
                      <ArrowDown />
                    </button>
                    {dropdownStateUser.open && (
                    <ul className="header__list-profile">
                      <li className="header__items_profile">
                        <a href="#">Мой кабинет</a>
                      </li>
                      <li className="header__items_profile">
                        <a href="#">Личные данные</a>
                      </li>
                      <li className="header__items_profile">
                        <a href="#">Мои заказы</a>
                      </li>
                      <li className="header__items_profile">
                        <a href="#">Избранное</a>
                      </li>
                      <li className="header__items_profile">
                        <a href="#">Выход</a>
                      </li>
                    </ul>
                    )}
                  </div>
                </div>
              </div>

          </header>

        )
    }

export default Header;

// onMouseEnter={UserdropDownCart}