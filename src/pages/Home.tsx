import React from 'react';
import Categories from '../components/Categories.js';
import Sort from '../components/Sort.js';
import PizzaBlock from '../components/PizzaBLock/';
import Skeleton from '../components/PizzaBLock/Skeleton.js';
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

interface SortItem {
  name: string;
  sortProperty: string;
}

const Home: React.FC = () => {
  const initialSortItem: SortItem = { name: 'popularity [ascending]', sortProperty: 'rating' };
  const [items, setItems] = React.useState<Pizza[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  // props drilling
  const [category, setCategory] = React.useState<number>(0);
  const [sortItems, setSortItems] = React.useState<SortItem>(initialSortItem);

  React.useEffect(() => {
    setIsLoading(true);

    // simplify logic
    const categoryOrder = category > 0 ? `category=${category}` : '';
    const sortOrder = sortItems.sortProperty.includes('-') ? 'asc' : 'desc';

    const sortBy = sortItems.sortProperty.includes('-') ? sortItems.sortProperty.replace('-', '') : sortItems.sortProperty;

    fetch(`https://64f1da430e1e60602d245dfa.mockapi.io/items?${categoryOrder}&sortBy=${sortBy}&order=${sortOrder}`)
      .then((res) => res.json())
      .then((arr: Pizza[]) => {
        setItems(arr);

        setIsLoading(false);
      });
    window.scrollTo(0, 0); // scroling to Top alwasys after rendering page
  }, [category, sortItems]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories category={category} onClickCategory={(index: number) => setCategory(index)} />
        <Sort sortItems={sortItems} setSortItems={(newSortItem: SortItem) => setSortItems(newSortItem)} />
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
    </div>
  );
};

export default Home;
