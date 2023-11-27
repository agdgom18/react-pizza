import styles from './NotFoundBlock.module.scss';
import React from 'react';
const NotFound: React.FC = () => {
  return (
    <>
      <h1 className={styles.root}>Nothing Found</h1>
    </>
  );
};

export default NotFound;
