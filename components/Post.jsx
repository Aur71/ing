import styles from '../styles/Post.module.scss';

// FIREBASE
import { db } from '../firebase-config';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { auth } from '../firebase-config';

// OTHER
import Image from 'next/image';
import Link from 'next/link';

// MEDIA
import { FaTrashAlt } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';

const Post = ({ article }) => {
  // NEED TO ADD AUTHORIZATION
  const deletePost = async (e, id) => {
    if (article?.author !== auth?.currentUser?.uid) {
      return;
    }

    e.preventDefault();
    const articleDoc = doc(db, 'articles', id);
    await deleteDoc(articleDoc);
  };

  // NEED TO ADD AUTHORIZATION
  const updatePost = async (e, id) => {
    if (article?.author !== auth?.currentUser?.uid) {
      return;
    }

    e.preventDefault();
    const articleDoc = doc(db, 'articles', id);
    // const newPost = {};
    // await updateDoc(articleDoc, newPost);
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
    <article className={styles.post}>
      {article?.author === auth?.currentUser?.uid && (
        <div className={styles.btnContainer}>
          <button
            className={styles.deleteBtn}
            onClick={(e) => deletePost(e, article?.id)}
          >
            <FaTrashAlt />
          </button>

          <button
            className={styles.updateBtn}
            onClick={(e) => updatePost(e, article?.id)}
          >
            <AiFillEdit />
          </button>
        </div>
      )}

      <Image
        priority={true}
        width={450}
        height={450}
        src={article?.thumbnail}
        alt='image'
      />
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

export default Post;
