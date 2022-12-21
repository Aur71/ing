import styles from '../styles/Home.module.scss';

import Post from '../components/Post';

export default function Home() {
  return (
    <section className={styles.home}>
      <h1>Recent posts:</h1>

      <div className={styles.postContainer}>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </section>
  );
}
