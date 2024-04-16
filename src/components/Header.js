import React, { useState, useRef, useEffect } from "react";
import Image from './Image';
import avatar from '../images/header/profile.svg';
import { ReactComponent as Heart } from "../images/header/heart.svg";
import { ReactComponent as Order} from "../images/header/order.svg";
import { ReactComponent as ShoppingCart} from "../images/header/shopping-cart.svg";
import { ReactComponent as ArrowDown} from "../images/header/arrow-down.svg";

function Header(){
    const [isActive, setIsActive] = useState(false);
      const container = useRef();
      const container2 = useRef();
      const [dropdownState, setDropdownState] = useState({ open: false });
      const [dropdownStateUser, setDropdownStateUser] = useState({ open: false });

      const handleDropdownClick = () =>
      setDropdownState({ open: !dropdownState.open });

      const UserDropdownClick = () =>
      setDropdownStateUser({ open: !dropdownStateUser.open });
     
      const ClickOutsid = (e) => {
        if (container.current && !container.current.contains(e.target)) {
          setDropdownState({ open: false }); }

        if (container2.current && !container2.current.contains(e.target)) {
          setDropdownStateUser({ open: false }); }   
      }

      useEffect(() => {document.addEventListener("mousedown", ClickOutsid);

      return () => document.removeEventListener("mousedown", ClickOutsid);}, []);

        return (
            <header className="header">
              <div className="container">
                <div className="header__wrapper"><a className="header__link-img" href="index.html">
                    <div className="header__img-logo"></div></a>
                    <div className="header__menu" ref={container}>
                      <div className="button__menu" onClick={handleDropdownClick}>
                        <a href="#">Каталог</a></div>

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
                      <div className="header__wrapper-icons">
                      <ShoppingCart />
                            <span className="header__title">Корзина</span>
                            <span className="header__number-orders">12</span>
                      </div>
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