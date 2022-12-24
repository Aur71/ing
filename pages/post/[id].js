import styles from '../../styles/PostPage.module.scss';
// HOOKS
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// COMPONENTS
import Header from '../../components/post/Header';
import Body from '../../components/post/Body';

// FIREBASE
import { db } from '../../firebase-config';
import { getDoc, doc } from 'firebase/firestore';

const Post = () => {
  const router = useRouter();
  const [article, setArticle] = useState({});

  useEffect(() => {
    if (router.query.id === undefined) {
      return;
    }
    const postRef = doc(db, 'articles', router?.query?.id);

    getDoc(postRef).then((doc) => {
      localStorage.setItem(
        'currentArticle',
        JSON.stringify({ ...doc.data(), id: doc.id })
      );
      setArticle({ ...doc.data(), id: doc.id });
    });
  }, [router.query.id]);

  useEffect(() => {
    const currentArticle = JSON.parse(localStorage.getItem('currentArticle'));
    if (!article.title) {
      setArticle(currentArticle);
    }
  }, []);

  return (
    <article className={styles.post}>
      <Header article={article} />
      <Body article={article} />
    </article>
  );
};

export default Post;
