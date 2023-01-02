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
      <SectionTitle title='Latest Articles' />
      <Slider />

      <SectionTitle title='Most Viewed' />
      <MostViewed />

      <SectionTitle title='All Articles' />
      <AllArticles articles={articles} />
    </section>
  );
}
