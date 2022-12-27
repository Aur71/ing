import styles from '../../styles/Account.module.scss';
// HOOKS
import { useGlobalContext } from '../../context/context';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// FIREBASE
import { db } from '../../firebase-config';
import { collection, query, onSnapshot, where } from 'firebase/firestore';

// COMPONENETS
import Header from '../../components/account/Header';
import Body from '../../components/account/Body';
import GoogleButton from 'react-google-button';

const Account = () => {
  const { googleSignIn, user, users } = useGlobalContext();
  const router = useRouter();
  const [articles, setArticles] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem('currentUser'));
    const storageArticles = JSON.parse(localStorage.getItem('currentArticles'));

    if (articles.length === 0 || currentUser.displayName === null) {
      if (storageUser !== undefined || storageArticles !== undefined) {
        setArticles(storageArticles);
        setCurrentUser(storageUser);
      }
    }
  }, []);

  useEffect(() => {
    // GETTING THE ARTICLES
    if (router.query.name === 'myaccount') {
      if (user?.uid === undefined) {
        return;
      } else {
        setCurrentUser(user);
        const articlesCollectionRef = collection(db, 'articles');
        const q = query(
          articlesCollectionRef,
          where('author', '==', user?.uid)
        );

        const data = onSnapshot(q, (snapshot) => {
          setArticles(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        });
      }
    } else {
      users.map((user) => {
        // ADDED TO LOCAL STORAGE
        if (user.id === router.query.name) {
          setCurrentUser(user);
          localStorage.setItem('currentUser', JSON.stringify(user));

          const articlesCollectionRef = collection(db, 'articles');
          const q = query(
            articlesCollectionRef,
            where('author', '==', router.query.name)
          );

          const data = onSnapshot(q, (snapshot) => {
            const formatedData = JSON.stringify(
              snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
              }))
            );

            localStorage.setItem('currentArticles', formatedData);

            setArticles(
              snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
          });
        }
      });
    }
  }, [router.query.name, user]);

  // SIGNIN
  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      alert(`ERROR: ${error}`);
    }
  };

  if (user === null) {
    return (
      <section className={styles.signIn}>
        <GoogleButton onClick={handleSignIn} />
      </section>
    );
  }

  return (
    <section className={styles.account}>
      <Header currentUser={currentUser} />
      <Body articles={articles} />
    </section>
  );
};

export default Account;
