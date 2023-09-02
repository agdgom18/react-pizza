import React from 'react';
import Categories from '../components/Categories.js';
import Sort from '../components/Sort.js';
import PizzaBlock from '../components/PizzaBLock/';
import Skeleton from '../components/PizzaBLock/Skeleton.js';
const Home = () => {
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
  const [items, setItems] = React.useState<Pizza[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch('https://64f1da430e1e60602d245dfa.mockapi.io/items')
      .then((res) => res.json())
      .then((arr: Pizza[]) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">All pizzes</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, idx) => {
              return <Skeleton key={idx}></Skeleton>;
            })
          : items.map((el) => {
              return <PizzaBlock key={el.id} {...el}></PizzaBlock>;
            })}

        {}
      </div>
    </>
  );
};

export default Home;
