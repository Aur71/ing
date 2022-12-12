import styles from '../../styles/Hero2.module.scss'

import Link from 'next/link'

const Hero2 = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.center}>
        <Link href='/' className={styles.post}>
          <h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
            consequatur voluptate eos repellendus soluta molestias dolores
            laudantium ullam? Enim voluptates at doloremque autem repudiandae
            tempora qui corrupti nesciunt quam corporis.
          </h3>

          <h4>
            Jhon Doe <span>·</span> December 29, 2020
          </h4>
        </Link>
      </div>
    </div>
  )
}

export default Hero2
