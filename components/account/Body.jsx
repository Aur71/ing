import styles from '../../styles/Account.module.scss';

import Post from '../Post';
const Body = () => {
  return (
    <div className={styles.body}>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Body;
