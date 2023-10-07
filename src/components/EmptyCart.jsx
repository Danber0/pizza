import React from 'react';
import EmptyTrash from '../assets/img/empty-cart.png';
import { Link } from 'react-router-dom';

export function EmptyCart() {
  return (
    <div className="content">
      <div className="container container--cart">
        <div className="cart cart--empty">
          <h2>
            Cart is empty <i>😕</i>
          </h2>
          <p>
            Please add more pizzas
            <br />
            Go to the home page
          </p>
          <img src={EmptyTrash} alt="Empty cart" />
          <Link to="/" className="button button--black">
            <span>Back</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
