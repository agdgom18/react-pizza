import React from 'react';

interface MyProps {
  category: number;
  onClickCategory: (arg: number) => void;
}
const Categories: React.FC<MyProps> = ({ category, onClickCategory }) => {
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
