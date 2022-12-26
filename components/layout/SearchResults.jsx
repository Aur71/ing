import styles from '../../styles/SearchResults.module.scss';
// HOOKS
import { useGlobalContext } from '../../context/context';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// FIREBASE
import { db } from '../../firebase-config';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

// OTHER
import Link from 'next/link';

const SearchResults = () => {
  const router = useRouter();
  const { search, setSearch, setShowSearch } = useGlobalContext();
  const [articles, setArticles] = useState([]);

  // GETTING THE ARTICLES
  useEffect(() => {
    const articlesCollectionRef = collection(db, 'articles');

    const q = query(articlesCollectionRef, orderBy('date', 'desc'));

    const data = onSnapshot(q, (snapshot) => {
      setArticles(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    return data;
  }, [search]);

  const closeSearch = () => {
    setSearch('');
    setShowSearch(false);
  };

  // CONVERTING DATE
  function toDateTime(secs) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);

    return t.toLocaleDateString('en', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  return (
    <div className={`${styles.posts} ${search && styles.active}`}>
      <div className={styles.center}>
        {articles
          .filter((article) => {
            if (search === '') {
              return article;
            } else if (
              article.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return article;
            }
          })
          .map((article) => {
            const { id, title, author, date } = article;

            return (
              <Link
                href={`/post/${id}`}
                className={styles.post}
                key={id}
                onClick={closeSearch}
              >
                <h3>{title}</h3>
                <h4>
                  {author} <span>·</span> {toDateTime(date?.seconds)}
                </h4>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default SearchResults;
