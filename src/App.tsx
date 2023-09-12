import './scss/app.scss';
import Header from './components/Header.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import NotFound from './pages/NotFoundPage.js';
import Cart from './pages/Cart.js';
import React from 'react';
export const SearchContext = React.createContext('');
function App() {
  // https://64f1da430e1e60602d245dfa.mockapi.io/items

  const [searchValue, setSearchValue] = React.useState<string>('');

  return (
    <>
      <div className="wrapper">
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
        </SearchContext.Provider>
      </div>
    </>
  );
}

export default App;
