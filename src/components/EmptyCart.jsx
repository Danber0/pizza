import React from 'react';
import EmptyTrash from '../assets/img/empty-cart.png';
import { Link } from 'react-router-dom';

export function EmptyCart() {
  return (
    <div className="content">
      <div className="container container--cart">
        <div className="cart cart--empty">
          <h2>
            Корзина пустая <i>😕</i>
          </h2>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу.
            <br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img src={EmptyTrash} alt="Empty cart" />
          <Link to="/" className="button button--black">
            <span>Вернуться назад</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
