import React from 'react';
import axios from 'axios';
import Categories from '../components/Categories.js';
import Sort from '../components/Sort.js';
import PizzaBlock from '../components/PizzaBLock/';
import Skeleton from '../components/PizzaBLock/Skeleton.js';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../redux/store.js';
import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice.js';
import Pagination from '../components/Pagination/index.js';

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

const Home: React.FC = () => {
  //usuing redux
  const { categoryId, sort, currentPage } = useSelector((state: RootState) => state.filter);
  const sortItems = sort.sortProperty;
  const dispatch = useDispatch();
  const onChangeCategory = (index: number) => {
    dispatch(setCategoryId(index));
  };
  const onChangePage = (number: number) => {
    dispatch(setCurrentPage(number));
  };

  const searchValue = useSelector((state: RootState) => state.search.searchValue);

  const [items, setItems] = React.useState<Pizza[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);

    // simplify logic
    const categoryOrder = categoryId > 0 ? `category=${categoryId}` : '';
    const sortOrder = sortItems.includes('-') ? 'asc' : 'desc';

    const sortBy = sortItems.includes('-') ? sortItems.replace('-', '') : sortItems;
    const search = searchValue ? `search=${searchValue}` : '';

    axios
      .get(
        `https://64f1da430e1e60602d245dfa.mockapi.io/items?page=${currentPage}&limit=4&${categoryOrder}&sortBy=${sortBy}&order=${sortOrder}&${search}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });

    window.scrollTo(0, 0); // scroling to Top alwasys after rendering page
  }, [categoryId, sortItems, searchValue, currentPage]);

  // if searchValue is empty , fileter does not work and rendering all items
  const pizzas = items
    .filter((item) => {
      return item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
    })

    .map((item) => <PizzaBlock key={item.id} {...item} />);
  const skeleton = [...new Array(6)].map((_, idx) => <Skeleton key={idx} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories category={categoryId} onClickCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">All pizzes</h2>
      <div className="content__items">{isLoading ? skeleton : pizzas}</div>

      <Pagination onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
