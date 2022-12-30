import styles from '../styles/Home.module.scss';

// HOOKS
import { useEffect, useState } from 'react';

// COMPONENTS
import Hero from '../components/home/Hero';
import Post from '../components/Post';

// FIREBASE
import { db } from '../firebase-config';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

export default function Home() {
  const [articles, setArticles] = useState([]);

  // GETTING THE ARTICLES
  useEffect(() => {
    const articlesCollectionRef = collection(db, 'articles');
    const q = query(articlesCollectionRef, orderBy('date', 'desc'));

    const data = onSnapshot(q, (snapshot) => {
      setArticles(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    return data;
  }, []);

  return (
    <section className={styles.home}>
      <Hero />

      <h1>Recent posts:</h1>

      <div className={styles.postContainer}>
        {articles.map((article) => {
          return <Post key={article.id} article={article} />;
        })}
      </div>
    </section>
  );
}
