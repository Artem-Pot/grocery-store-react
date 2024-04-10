import React from 'react';
import Image from './Image';
import imgArticles from '../images/articles/articl-3.jpeg';

function Articl() {
    return (
        <article className="articl">
            <Image image={imgArticles} className="rticl__img" alt="Изображение статьи"/>
            <div className="articl__box"><span className="articl__date">05.03.2024</span>
                <h3 className="articl__title">ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!</h3>
                <p className="articl__text">Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!</p>
                <button className="button__articl">Подробнее</button>
            </div>
        </article>
        )
}

export default Articl;