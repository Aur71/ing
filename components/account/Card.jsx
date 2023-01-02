import styles from '../../styles/account/Card.module.scss';

// FIREBASE
import { db } from '../../firebase-config';
import { doc, deleteDoc } from 'firebase/firestore';
import { auth } from '../../firebase-config';

// OTHER
import Image from 'next/image';
import Link from 'next/link';

// MEDIA
import { FaTrashAlt } from 'react-icons/fa';

const Card = ({ article }) => {
  // DELETING POST
  const deletePost = async (e, id) => {
    if (article?.author !== auth?.currentUser?.uid) {
      return;
    }

    e.preventDefault();
    const articleDoc = doc(db, 'articles', id);
    await deleteDoc(articleDoc);
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
    <article className={styles.card}>
      {article?.author === auth?.currentUser?.uid && (
        <button
          className={styles.deleteBtn}
          onClick={(e) => deletePost(e, article?.id)}
        >
          <FaTrashAlt />
        </button>
      )}

      {article.thumbnail && (
        <Image
          priority={true}
          width={450}
          height={450}
          src={article?.thumbnail}
          alt='image'
        />
      )}
      <Link href={`/post/${article?.id}`}>
        <div className={styles.textContainer}>
          <h5>{toDateTime(article?.date?.seconds)}</h5>
          <h4>{article?.title}</h4>
          <p>{article?.brief}</p>
        </div>
      </Link>
    </article>
  );
};

export default Card;
