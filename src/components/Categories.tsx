import React from 'react';

const Categories = () => {
  const categoryList = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'];
  const [activeCategory, setActiveCategory] = React.useState(0);

  const onClickCategory = (index: number) => {
    setActiveCategory(index);
  };

  return (
    <>
      <div className="categories">
        <ul>
          {categoryList.map((el, index) => {
            return (
              <li onClick={() => onClickCategory(index)} className={activeCategory === index ? 'active' : ''} key={index}>
                {el}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Categories;
