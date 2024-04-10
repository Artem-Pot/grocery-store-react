import React from 'react';
import Articl from './components/Articl';

function Articles() {
    return (
        <section className="articles">
            <div className="container">
                <div className="articles__wrapper">
                    <div className="product-list__header">
                        <h2 className="title-h2">Статьи</h2><a className="product-list__all" href="#">Все статьи</a>
                    </div>
                    <div className="articles__box-articles">
                        <Articl />
                        <Articl />
                        <Articl />
                    </div>
                </div>
            </div>
      </section>
    )
}

export default Articles;