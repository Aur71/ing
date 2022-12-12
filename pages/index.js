import styles from '../styles/Home.module.scss'

import Hero from '../components/home/Hero'

export default function Home() {
  return (
    <section className={styles.home}>
      <Hero />
    </section>
  )
}
