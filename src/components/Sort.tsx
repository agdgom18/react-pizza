import React from 'react';
interface SortItem {
  name: string;
  sortProperty: string;
}
interface MyProps {
  sortItems: SortItem;
  setSortItems: (newSortItem: SortItem) => void;
}
const Sort: React.FC<MyProps> = ({ sortItems, setSortItems }) => {
  const [open, setOpen] = React.useState(false);

  ///

  const sortType: { name: string; sortProperty: string }[] = [
    { name: 'popularity A-Z', sortProperty: 'rating' },
    { name: 'popularity Z-A', sortProperty: '-rating' },
    { name: 'price A-Z', sortProperty: 'price' },
    { name: 'price Z-A', sortProperty: '-price' },
    { name: 'alphabetically A-Z', sortProperty: 'name' },
    { name: 'alphabetically Z-A', sortProperty: '-name' },
  ];

  return (
    <>
      <div className="sort">
        <div className="sort__label">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
          <b>Sort by:</b>
          <span onClick={() => setOpen(!open)}>{sortItems.name}</span>
        </div>
        {open && (
          <div className="sort__popup">
            <ul>
              {sortType.map((el, idx) => {
                return (
                  <li onClick={() => setSortItems(el)} key={idx} className={sortItems.sortProperty === el.sortProperty ? 'active' : ''}>
                    {el.name}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Sort;
