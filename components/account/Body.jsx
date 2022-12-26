import styles from '../../styles/Account.module.scss';
// COMPONENTS
import Post from '../Post';

const Body = () => {
  return (
    <div className={styles.body}>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Body;
