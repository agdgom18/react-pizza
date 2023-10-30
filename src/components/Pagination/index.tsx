import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';
import React from 'react';

type MyComponentProps = {
  onChangePage: (pageNumber: number) => void;
};

const Pagination: React.FC<MyComponentProps> = ({ onChangePage }) => {
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
