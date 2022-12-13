import styles from '../../styles/PostPage.module.scss'

import Header from '../../components/post/Header'
import Body from '../../components/post/Body'

const Post = () => {
  return (
    <article className={styles.post}>
      <Header />
      <Body />
    </article>
  )
}

export default Post
