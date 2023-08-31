import './scss/app.scss';
import Header from './components/Header.jsx';
import Categories from './components/Categories.js';
import Sort from './components/Sort.js';
import PizzaBlock from './components/PizzaBlock.js';
import pizzasItems from './utils/db.json';

console.log(pizzasItems);

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              {/* <Categories /> */}
              <Sort />
            </div>
            <h2 className="content__title">All pizzes</h2>
            <div className="content__items">
              {pizzasItems.map((el) => {
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
