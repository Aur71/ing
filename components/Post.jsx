import styles from '../styles/Post.module.scss';
// HOOKS
import { useRouter } from 'next/router';

// FIREBASE
import { db } from '../firebase-config';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';

// OTHER
import Image from 'next/image';
import Link from 'next/link';

// MEDIA
import { FaTrashAlt } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import coding from '../public/temp/coding.jpg';

const Post = () => {
  const router = useRouter().route;

  // NEED TO ADD AUTHORIZATION
  const deletePost = async (e, id) => {
    e.preventDefault();
    const articleDoc = doc(db, 'articles', id);
    await deleteDoc(articleDoc);
  };

  // NEED TO ADD AUTHORIZATION
  const updatePost = async (e, id) => {
    e.preventDefault();
    const articleDoc = doc(db, 'articles', id);
    const newPost = {};
    await updateDoc(articleDoc, newPost);
  };

  return (
    <article className={styles.post}>
      {router !== '/' && (
        <div className={styles.btnContainer}>
          <button className={styles.deleteBtn} onClick={(e) => deletePost(e)}>
            <FaTrashAlt />
          </button>

          <button className={styles.updateBtn} onClick={(e) => updatePost(e)}>
            <AiFillEdit />
          </button>
        </div>
      )}

      <Image priority={true} src={coding} alt='image' />

      <Link href='/post/1'>
        <div className={styles.textContainer}>
          <h5>December 29, 2020</h5>

          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
            provident numquam recusandae rerum eius, non beatae optio possimus
            nostrum illum?
          </h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            ipsa reiciendis adipisci minima repellat molestias aperiam harum
            atque, voluptas dolorem consequuntur iusto tempora, eos sint veniam
            similique ratione quisquam ab.
          </p>
        </div>
      </Link>
    </article>
  );
};

export default Post;
