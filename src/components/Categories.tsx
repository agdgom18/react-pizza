import React from 'react';
import { CategoriesProps } from '../types';

const Categories: React.FC<CategoriesProps> = ({ category, onClickCategory }) => {
  const categoryList = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'];

  return (
    <>
      <div className="categories">
        <ul>
          {categoryList.map((categoryName, index) => {
            return (
              <li onClick={() => onClickCategory(index)} className={category === index ? 'active' : ''} key={index}>
                {categoryName}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Categories;
