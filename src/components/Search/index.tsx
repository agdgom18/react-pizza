import searchIcon from '../../assets/img/search.svg';
import cancelIcon from '../../assets/img/cancel.svg';
import styles from './Search.module.scss';
import React, { RefObject, createRef, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/searchSlice';

const Search = (): JSX.Element => {
  const [value, setValue] = React.useState('');

  const dispatch = useDispatch();

  const inputRef: RefObject<HTMLInputElement> = createRef();
  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };

  // debounce helps us delayed function execution...   rewrite state with value because of usecontext does not work with debounce correctly. Also we should use useCallback hook so that the function saves the data and does not call the component's render

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 250),
    [],
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className={styles.root}>
      <img className={styles.searchIcon} src={searchIcon} alt="searchIcon" />
      <input ref={inputRef} value={value} onChange={onChangeInput} className={styles.input} type="text" placeholder="Search tasty pizza" />

      {value && <img onClick={onClickClear} className={styles.cancelIcon} src={cancelIcon} alt="cancel" />}
    </div>
  );
};

export default Search;
