import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import type { RootState } from '../../redux/store';
import { addItem } from '../../redux/slices/cartsSlice';
import { Link } from 'react-router-dom';
import { iCartItem, Pizza } from '../../types';

const typeNames = ['thin', 'traditional'];
const PizzaBlock: React.FC<Pizza> = ({ name, sizes, price, imageUrl, types, id }) => {
  const [isActiveType, setIsActiveType] = React.useState(0);
  const [isActiveSize, setIsActiveSize] = React.useState(0);

  const dispatch = useDispatch();

  const cartItemArray: iCartItem[] = useSelector((state: RootState) => state.cart.items).filter((cartItem) => cartItem.id === id);
  let count = 0;
  cartItemArray.forEach((cartItem) => {
    count += cartItem.count;
  });

  const onClickAdd = () => {
    const item: iCartItem = {
      id,
      name,
      price,
      imageUrl,
      type: typeNames[isActiveType],
      size: sizes[isActiveSize],
      count: 1,
    };

    dispatch(addItem(item));
  };

  return (
    <div className="pizza-block__wrapper">
      <div className="pizza-block">
        <Link to={`/pizza/${id}`}>
          <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
          <h4 className="pizza-block__title">{name}</h4>
        </Link>
        <div className="pizza-block__selector">
          <ul>
            {types.map((type, idx) => {
              return (
                <li onClick={() => setIsActiveType(idx)} className={isActiveType === idx ? 'active' : ''} key={idx}>
                  {type}
                </li>
              );
            })}
          </ul>
          <ul>
            {sizes.map((size, idx) => {
              return (
                <li onClick={() => setIsActiveSize(idx)} className={isActiveSize === idx ? 'active' : ''} key={idx}>
                  {size} cm.
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">from {price} $</div>
          <button onClick={onClickAdd} className="button button--outline button--add">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Add</span>
            {count > 0 && <i>{count}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
