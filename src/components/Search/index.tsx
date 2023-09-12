import searchIcon from '../../assets/img/search.svg';
import cancelIcon from '../../assets/img/cancel.svg';
import styles from './Search.module.scss';
import React from 'react';
interface IsearchValue {
  searchValue: string;
  setSearchValue?: (value: string) => string;
}
import { SearchContext } from '../../App';

const Search = (): JSX.Element => {
  const { searchValue, setSearchValue } = React.useContext<IsearchValue>(SearchContext);

  return (
    <div className={styles.root}>
      <img className={styles.searchIcon} src={searchIcon} alt="searchIcon" />
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={styles.input}
        type="text"
        placeholder="Search tasty pizza"
      />

      {searchValue && <img onClick={() => setSearchValue('')} className={styles.cancelIcon} src={cancelIcon} alt="cancel" />}
    </div>
  );
};

export default Search;
