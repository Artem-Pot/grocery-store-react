import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

import Image from '../Image';
import imgCategory1 from '../../images/pages/catalog/category1.jpeg';
import imgCategory2 from '../../images/pages/catalog/category2.jpeg';
import imgCategory3 from '../../images/pages/catalog/category3.jpeg';
import imgCategory4 from '../../images/pages/catalog/category4.jpeg';
import imgCategory5 from '../../images/pages/catalog/category5.jpeg';
import imgCategory6 from '../../images/pages/catalog/category6.jpeg';
import imgCategory7 from '../../images/pages/catalog/category7.jpeg';
import imgCategory8 from '../../images/pages/catalog/category8.jpeg';
import imgCategory9 from '../../images/pages/catalog/category9.jpeg';
import imgCategory10 from '../../images/pages/catalog/category10.jpeg';
import imgCategory11 from '../../images/pages/catalog/category11.jpeg';
import imgCategory12 from '../../images/pages/catalog/category12.jpeg';
import imgCategory13 from '../../images/pages/catalog/category13.jpeg';

import { ReactComponent as ArrowRight} from "../../images/pages/catalog/arrow-right.svg";
 
const Catalog = () => {
    return (
        <div>
        <Header />

        <section className="catalog">
            <div className="container">
                <div className="catalog__wrapper">
                    <nav className="catalog__navigation" class>
                        <Link to='/'>Главая</Link>
                        <ArrowRight />
                        <Link to='/catalog'>Каталог</Link>
                    </nav>
                    <h2 className="title-h2">Каталог</h2>
                    <div className="catalog__box">
                    
                        <div className="catalog__category">
                            <Image image={imgCategory1} className="catalog__img"/>
                            <div className="catalog__gradient">
                                <span>Молоко, сыр, яйцо</span>
                            </div>

                        </div>

                        <div className="catalog__category">
                            <Image image={imgCategory2} className="catalog__img"/>
                            <div className="catalog__gradient">
                                <span>Хлеб</span>
                            </div>
                        </div>

                        <div className="catalog__category">
                            <Image image={imgCategory3} className="catalog__img"/>
                            <div className="catalog__gradient">
                                <span>Фрукты и овощи</span>
                            </div>
                        </div>

                        <div className="catalog__category">
                            <Image image={imgCategory4} className="catalog__img"/>
                            <div className="catalog__gradient">
                                <span>Замороженные продукты</span>
                            </div>
                        </div>

                        <div className="catalog__category">
                            <Image image={imgCategory5} className="catalog__img"/>
                            <div className="catalog__gradient">
                                <span>Напитки</span>
                            </div>
                        </div>

                        <div className="catalog__category">
                            <Image image={imgCategory6} className="catalog__img"/>
                            <div className="catalog__gradient">
                                <span>Кондитерские изделия</span>
                            </div>
                        </div>

                        <div className="catalog__category">
                            <Image image={imgCategory7} className="catalog__img"/>
                            <div className="catalog__gradient">
                                <span>Чай, кофе</span>
                            </div>
                        </div>

                        <div className="catalog__category">
                            <Image image={imgCategory8} className="catalog__img"/>
                            <div className="catalog__gradient">
                                <span>Бакалея</span>
                            </div>
                        </div>

                        <div className="catalog__category">
                            <Image image={imgCategory9} className="catalog__img"/>
                            <div className="catalog__gradient">
                                <span>Здоровое питание</span>
                            </div>
                        </div>

                        <div className="catalog__category">
                            <Image image={imgCategory10} className="catalog__img"/>
                            <div className="catalog__gradient">
                                <span>Зоотовары</span>
                            </div>
                        </div>

                        <div className="catalog__category">
                            <Image image={imgCategory11} className="catalog__img"/>
                            <div className="catalog__gradient">
                                <span>Детское питание</span>
                            </div>
                        </div>

                        <div className="catalog__category">
                            <Image image={imgCategory12} className="catalog__img"/>
                            <div className="catalog__gradient">
                                <span>Мясо, птица, колбаса</span>
                            </div>
                        </div>

                        <div className="catalog__category">
                            <Image image={imgCategory13} className="catalog__img"/>
                            <div className="catalog__gradient">
                                <span>Непродовольственные товары</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <Footer />
        </div>
    );
};
 
export default Catalog ;