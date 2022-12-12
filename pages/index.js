import styles from '../styles/Home.module.scss'

import Hero from '../components/home/Hero'
import Post from '../components/home/Post'

export default function Home() {
  return (
    <section className={styles.home}>
      <Hero />

      <div className={styles.postContainer}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </section>
  )
}
