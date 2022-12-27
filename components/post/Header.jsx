import styles from '../../styles/PostPage.module.scss';

// HOOKS
import { useEffect, useState } from 'react';

// FIREBASE
import { auth, db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

// OTHER
import Image from 'next/image';
import Link from 'next/link';

const Header = ({ article }) => {
  const [author, setAuthor] = useState({});

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

  useEffect(() => {
    const getAuthor = async () => {
      const userDoc = collection(db, 'users');
      const response = await getDocs(userDoc);
      const data = response.docs
        .map((doc) => ({ ...doc.data(), _id: doc.id }))
        .map((item) => {
          if (item.id === article?.author) {
            setAuthor(item);
          }
        });
    };

    return () => getAuthor();
  }, [article]);

  return (
    <div className={styles.header}>
      <Link href={`/account/${author?.id}`}>
        <Image
          priority={true}
          src={author?.image}
          width={60}
          height={60}
          alt='user image'
          className={styles.profilePicture}
        />
      </Link>

      <div className={styles.info}>
        <Link href='/'>
          <h5>{author?.name}</h5>
        </Link>

        <p>{toDateTime(article?.date?.seconds)}</p>
      </div>
    </div>
  );
};

export default Header;
