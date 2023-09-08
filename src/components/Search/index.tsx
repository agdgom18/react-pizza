import searchIcon from '../../assets/img/search.svg';
import styles from './Search.module.scss';

interface MyInterface {
  searchValue: string;
  setSearchValue(): string;
}

const Search: React.FC<MyInterface> = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.root}>
      <img className={styles.searchIcon} src={searchIcon} alt="searchIcon" />
      <input className={styles.input} type="text" placeholder="Search tasty pizza" />
    </div>
  );
};

export default Search;
