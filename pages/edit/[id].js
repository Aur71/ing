import styles from '../../styles/Edit.module.scss';
// HOOKS
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useGlobalContext } from '../../context/context';

// COMPONENTS
import Tools from '../../components/edit/Tools';

// FIREBASE
import { db } from '../../firebase-config';
import { doc, getDoc } from 'firebase/firestore';

// OTHER
import Image from 'next/image';

// MEDIA
import { AiOutlineClose } from 'react-icons/ai';

const Edit = () => {
  const router = useRouter();
  const { user } = useGlobalContext();
  const [article, setArticle] = useState({});

  // const updatePost = async (e, id) => {
  //   if (article?.author !== auth?.currentUser?.uid) {
  //     return;
  //   }

  //   e.preventDefault();
  //   const articleDoc = doc(db, 'articles', id);
  //   // const newPost = {};
  //   // await updateDoc(articleDoc, newPost);
  // };

  useEffect(() => {
    // GETTING THE ARTICLE
    if (router.query.id === undefined) {
      return;
    } else {
      const getArticle = async () => {
        const docRef = doc(db, 'articles', router?.query?.id);
        const docSnap = await getDoc(docRef);
        // RETURN IF THIS ARTICLE WAS NOT CREATED BY THE CURRENT USER

        if (docSnap.data().author !== user?.uid) {
          return;
        }

        if (docSnap.exists()) {
          setArticle(docSnap.data());
        } else {
          return;
        }
      };

      getArticle();
    }
  }, [router.isReady, router.query.id, user]);

  return (
    <>
      <Tools />

      <section className={styles.edit}>
        <label htmlFor='title'>Title:</label>
        <input type='text' name='title' value={article?.title} />

        <label htmlFor='brief'>Brief:</label>
        <input type='text' name='brief' value={article?.brief} />

        <label htmlFor='thumbnail'>Thumbnail:</label>
        {article?.thumbnail ? (
          <div className={styles.thumbnailContainer}>
            <Image
              className={styles.thumbnail}
              src={article?.thumbnail}
              alt={article?.thumbnailName}
              width={900}
              height={900}
            />

            <button>
              <AiOutlineClose />
            </button>
          </div>
        ) : (
          <input type='file' name='thumbnail' accept='image/png, image/jpeg' />
        )}

        <div className={styles.data}>
          {article?.data?.map((item) => {
            console.log(item);
          })}
        </div>
      </section>
    </>
  );
};

export default Edit;
