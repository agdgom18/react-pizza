import styles from './NotFoundBlock.module.scss';

console.log(styles);

const NotFound = () => {
  return (
    <>
      <h1 className={styles.root}>Nothing Found</h1>
    </>
  );
};

export default NotFound;
