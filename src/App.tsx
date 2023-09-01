import React from 'react';

import './scss/app.scss';
import Header from './components/Header.jsx';
import Categories from './components/Categories.js';
import Sort from './components/Sort.js';
import PizzaBlock from './components/PizzaBlock.js';

function App() {
  // https://64f1da430e1e60602d245dfa.mockapi.io/items

  interface Pizza {
    id: number;
    imageUrl: string;
    name: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating?: number;
  }
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://64f1da430e1e60602d245dfa.mockapi.io/items')
      .then((res) => res.json())
      .then((arr: Pizza[]) => setItems(arr));
  }, []);
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">All pizzes</h2>
            <div className="content__items">
              {items.map((el) => {
                return <PizzaBlock key={el.id} {...el}></PizzaBlock>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
