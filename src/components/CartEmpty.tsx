import React from 'react';
import { Link } from 'react-router-dom';

import cartEmptyImg from '../assets/img/empty-cart.png';

const CartEmpty: React.FC = () => (
  <div className="cart cart--empty">
    <h2>
      Basket empty <span>😕</span>
    </h2>
    <p>
      Chances are you haven't ordered a pizza yet.
      <br />
      To order a pizza, go to the home page.
    </p>
    <img src={cartEmptyImg} alt="Empty cart" />
    <Link to="/" className="button button--black">
      <span>Go back</span>
    </Link>
  </div>
);

export default CartEmpty;
