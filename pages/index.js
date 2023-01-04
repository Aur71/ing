import styles from '../styles/home/Home.module.scss';

// HOOKS
import { useEffect, useState } from 'react';

// COMPONENTS
import SectionTitle from '../components/home/SectionTitle';
import Slider from '../components/home/Slider';
import MostViewed from '../components/home/MostViewed';
import AllArticles from '../components/home/AllArticles';
// import Post from '../components/Post';

// FIREBASE
import { db } from '../firebase-config';
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  limit,
  doc,
} from 'firebase/firestore';

export default function Home() {
  const [latestArticles, setLatestArticles] = useState([]);
  const [mostViewedArticles, setMostViewedArticles] = useState([]);
  const [articles, setArticles] = useState([]);

  // GETTING THE ARTICLES
  useEffect(() => {
    const articlesCollectionRef = collection(db, 'articles');
    const q = query(articlesCollectionRef, orderBy('date', 'desc'));
    const latestArticlesQuery = query(
      articlesCollectionRef,
      orderBy('date', 'desc'),
      limit(5)
    );

    const firstFive = onSnapshot(latestArticlesQuery, (snapshot) => {
      setLatestArticles(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });

    const allArt = onSnapshot(q, (snapshot) => {
      setArticles(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  return (
    <section className={styles.home}>
      <SectionTitle title='Latest Articles' />
      <Slider latestArticles={latestArticles} />

      <SectionTitle title='Most Viewed' />
      <MostViewed />

      <SectionTitle title='All Articles' />
      <AllArticles articles={articles} />
    </section>
  );
}
