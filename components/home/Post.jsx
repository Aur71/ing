import styles from '../../styles/Post.module.scss'
import { useRouter } from 'next/router'

import Image from 'next/image'
import Link from 'next/link'

import { FaTrashAlt } from 'react-icons/fa'
import coding from '../../public/temp/coding.jpg'

const Post = () => {
  const router = useRouter().route

  return (
    <article className={styles.post}>
      {router !== '/' && (
        <button className={styles.deleteBtn}>
          <FaTrashAlt />
        </button>
      )}

      <Image priority={true} src={coding} alt='image' />

      <Link href='/post/1'>
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
    </article>
  )
}

export default Post
