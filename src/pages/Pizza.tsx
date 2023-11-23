import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export interface iPizza {
  id: string;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

const Pizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<iPizza>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`
        https://64f1da430e1e60602d245dfa.mockapi.io/items/${id}
        `);
        setPizza(data);
      } catch (error) {
        alert('pizza getting error');
        navigate('/');
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return 'loading';
  }

  return (
    <div className="pizza-block container">
      <img src={pizza.imageUrl} alt="" className="pizza-block__image" />
      <h4 className="pizza-block__title">{pizza.name}</h4>
      <div className="pizza-block__selector">
        <ul>
          <li className="active">thin</li>
          <li>traditional</li>
        </ul>
        <ul>
          {pizza.sizes.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">from {pizza.price} $</div>
        <button className="button button--outline button--add">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"></path>
          </svg>
          <span>Add</span>
        </button>
      </div>
    </div>
  );
};

export default Pizza;
