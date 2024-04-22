import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
 
const Catalog = () => {
    return (
        <div>
        <Header />

        <section className="catalog">
            <div className="container">
                <div className="catalog__wrapper">
                    <nav className="catalog__navigation" class>
                        <Link to='/'>Главая</Link>
                        <span className="catalog__arrow"></span>
                        <Link to='/catalog'>Каталог</Link>
                    </nav>
                </div>
            </div>
        </section>
        
        <Footer />
        </div>
    );
};
 
export default Catalog ;