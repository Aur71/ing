import styles from '../../styles/Account.module.scss';
// HOOKS
import { useGlobalContext } from '../../context/context';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// FIREBASE
import { db } from '../../firebase-config';
import {
  collection,
  query,
  onSnapshot,
  where,
  getDocs,
} from 'firebase/firestore';

// COMPONENETS
import Header from '../../components/account/Header';
import Body from '../../components/account/Body';
import GoogleButton from 'react-google-button';

const Account = () => {
  const { googleSignIn, user } = useGlobalContext();
  const router = useRouter();
  const [articles, setArticles] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    if (router.query.name === 'myaccount' && user !== null) {
      const getInfo = async () => {
        // GETTING THE USER
        const userRef = collection(db, 'users');
        const usersQuery = query(userRef, where('id', '==', user.uid));
        const userSnapshot = await getDocs(usersQuery);
        userSnapshot.forEach((doc) => {
          setCurrentUser({ ...doc.data(), _id: doc.id });
        });

        // GETTING THE ARTICLES THAT CORESPOND TO THE USER
        const articlesRef = collection(db, 'articles');
        const articlesQuery = query(
          articlesRef,
          where('author', '==', user.uid)
        );

        const data = onSnapshot(articlesQuery, (snapshot) => {
          setArticles(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        });
      };

      getInfo();
    } else if (!router.query.name) {
      return;
    } else {
      const getInfo = async () => {
        // GETTING THE USER
        const userRef = collection(db, 'users');
        const usersQuery = query(
          userRef,
          where('id', '==', router?.query?.name)
        );
        const userSnapshot = await getDocs(usersQuery);
        userSnapshot.forEach((doc) => {
          setCurrentUser({ ...doc.data(), _id: doc.id });
        });

        // GETTING THE ARTICLES CORESPONDING TO THE USER
        const articlesRef = collection(db, 'articles');
        const articlesQuery = query(
          articlesRef,
          where('author', '==', router?.query?.name)
        );
        const data = onSnapshot(articlesQuery, (snapshot) => {
          setArticles(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        });
      };

      getInfo();
    }
  }, [router.isReady, user, router.query.name]);

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
