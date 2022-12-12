import styles from '../../styles/Hero.module.scss'

import Link from 'next/link'
import Image from 'next/image'

import javascript from '../../public/temp/javascript.png'
import coding from '../../public/temp/coding.jpg'
import computer from '../../public/temp/computer.jpg'
import user from '../../public/temp/user.jpg'

const Hero1 = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.center}>
        <Link href='/' className={styles.postShowcase}>
          <div className={styles.imgContainer}>
            <Image priority={true} src={coding} alt='temp' />
          </div>

          <div className={styles.textContainer}>
            <h2>How to become a more eficient programmer</h2>

            <div className={styles.info}>
              <Image src={user} alt='user image' />

              <h4>
                Jhon Doe <span>·</span> December 29, 2020
              </h4>
            </div>
          </div>
        </Link>

        <Link href='/' className={styles.postShowcase}>
          <div className={styles.imgContainer}>
            <Image src={javascript} alt='temp' />
          </div>

          <div className={styles.textContainer}>
            <h2>7 Javascript Tips</h2>

            <h4>
              Jhon Doe <span>·</span> December 29, 2020
            </h4>
          </div>
        </Link>

        <Link href='/' className={styles.postShowcase}>
          <div className={styles.imgContainer}>
            <Image src={computer} alt='temp' />
          </div>

          <div className={styles.textContainer}>
            <h2>What computer do you need as a software engeneier?</h2>

            <h4>
              Jhon Doe <span>·</span> December 29, 2020
            </h4>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Hero1
