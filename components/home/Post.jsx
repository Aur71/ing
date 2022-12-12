import styles from '../../styles/Post.module.scss'

import Image from 'next/image'
import Link from 'next/link'

import coding from '../../public/temp/coding.jpg'

const Post = () => {
  return (
    <Link href='/post/1' className={styles.post}>
      <Image priority={true} src={coding} alt='image' />

      <div className={styles.textContainer}>
        <h5>December 29, 2020</h5>

        <h4>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
          provident numquam recusandae rerum eius, non beatae optio possimus
          nostrum illum?
        </h4>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          ipsa reiciendis adipisci minima repellat molestias aperiam harum
          atque, voluptas dolorem consequuntur iusto tempora, eos sint veniam
          similique ratione quisquam ab.
        </p>
      </div>
    </Link>
  )
}

export default Post
