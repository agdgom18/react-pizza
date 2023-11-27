import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';
import React from 'react';
import { PagitationProps } from '../../types';

const Pagination: React.FC<PagitationProps> = ({ onChangePage }) => {
  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={6}
        pageCount={3}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
