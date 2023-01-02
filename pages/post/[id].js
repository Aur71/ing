import styles from '../../styles/post/Post.module.scss';
// HOOKS
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// COMPONENTS
import Header from '../../components/post/Header';
import Body from '../../components/post/Body';

// FIREBASE
import { db } from '../../firebase-config';
import {
  getDoc,
  doc,
  query,
  where,
  collection,
  getDocs,
} from 'firebase/firestore';

const Post = () => {
  const router = useRouter();
  const [article, setArticle] = useState({});
  const [author, setAuthor] = useState({});

  // GETTING THE ARTICLE
  useEffect(() => {
    if (!router.query.id) {
      return;
    }

    const getArticle = async () => {
      const postRef = doc(db, 'articles', router.query.id);
      const data = await getDoc(postRef);
      setArticle({ ...data.data() });
    };

    getArticle();
  }, [router.isReady, router.query.id]);

  // GETTING THE AUTHOR
  useEffect(() => {
    if (!article.author) {
      return;
    }

    const getAuthor = async () => {
      const authorRef = collection(db, 'users');
      const q = query(authorRef, where('id', '==', article?.author));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        setAuthor({ ...doc.data(), _id: doc.id });
      });
    };

    getAuthor();
  }, [article]);

  return (
    <article className={styles.post}>
      <Header article={article} author={author} />
      <Body article={article} />
    </article>
  );
};

export default Post;
