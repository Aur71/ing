import styles from '../styles/Write.module.scss';
// REDUCER
import { Reducer } from '../components/write/Reducer';
// HOOKS
import { useReducer, useEffect } from 'react';
// FIREBASE
import { storage } from '../firebase-config';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { db } from '../firebase-config';
import {
  addDoc,
  collection,
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';

// COMPONENTS
import Editor from '../components/write/Editor';

// OTHER
import Image from 'next/image';
import { v4 as uuid } from 'uuid';

// MEDIA
import { AiOutlineClose } from 'react-icons/ai';

const write = () => {
  const [state, dispatch] = useReducer(Reducer, {
    author: '',
    title: '',
    brief: '',
    thumbnail: '',
    thumbnailName: '',
    data: [],
    date: '',
  });

  // SAVING TO LOCAL STORAGE
  useEffect(() => {
    if (
      state.author !== '' ||
      state.title !== '' ||
      state.brief !== '' ||
      state.thumbnail !== '' ||
      state.thumbnailName !== '' ||
      state.data.length !== 0
    ) {
      localStorage.setItem('article', JSON.stringify(state));
    }
  }, [state]);

  // GETTING FROM LOCAL STORAGE
  useEffect(() => {
    const article = JSON.parse(localStorage.getItem('article'));

    console.log(article);

    if (
      article !== null &&
      (state.author !== '' ||
        article.title !== '' ||
        article.brief !== '' ||
        article.thumbnail !== '' ||
        article.thumbnailName !== '' ||
        article.data.length !== 0)
    ) {
      dispatch({ type: 'SET_ARTICLE', payload: article });
    } else {
      localStorage.removeItem('article');
    }
  }, []);

  const setTitle = (e) => {
    dispatch({ type: 'SET_TITLE', payload: e.target.value });
  };

  const setBrief = (e) => {
    dispatch({ type: 'SET_BRIEF', payload: e.target.value });
  };

  const setThumbnail = (e) => {
    const image = e.target.files[0];
    const unique_id = uuid();
    const small_id = unique_id.slice(0, 8);
    const name = image?.name + small_id;
    const imageRef = ref(storage, `media/${name}`);

    uploadBytes(imageRef, image).then(() => {
      const listRef = ref(storage, 'media/');

      listAll(listRef)
        .then((res) => {
          res.items.forEach((item) => {
            if (item.name === name) {
              getDownloadURL(item).then((url) => {
                dispatch({ type: 'SET_THUMBNAIL', payload: { url, name } });
              });
            }

            return;
          });
        })
        .catch((error) => window.alert(`Error: ${error}`));
    });
  };

  const removeThumbnail = () => {
    dispatch({ type: 'REMOVE_THUMBNAIL' });
  };

  const createPost = async (e) => {
    e.preventDefault();
    const articlesCollectionRef = collection(db, 'articles');
    dispatch({ type: 'SET_DATE' });
    await addDoc(articlesCollectionRef, state);
    dispatch({ type: 'CLEAR_STATE' });
  };

  // UPDATE POST EXEMPLE
  const updatePost = async (e, id) => {
    e.preventDefault();
    const articleDoc = doc(db, 'articles', id);
    const newPost = {};
    await updateDoc(articleDoc, newPost);
  };

  // DELETE EXEMPLE
  const deletePost = async (e, id) => {
    e.preventDefault();
    const articleDoc = doc(db, 'articles', id);
    await deleteDoc(articleDoc);
  };

  return (
    <form className={styles.write}>
      <label htmlFor='title'>Title:</label>
      <input
        type='text'
        id='title'
        name='title'
        value={state.title}
        onChange={setTitle}
      />

      <label htmlFor='title'>Brief:</label>
      <input
        type='text'
        id='title'
        name='title'
        value={state.brief}
        onChange={setBrief}
      />

      <label htmlFor='thumbnail'>Thumbnail:</label>
      {state.thumbnail === '' ? (
        <input
          type='file'
          id='thumbnail'
          name='thumbnail'
          accept='image/png, image/jpeg'
          onChange={setThumbnail}
        />
      ) : (
        <div className={styles.thumbnailContainer}>
          <Image
            src={state.thumbnail}
            alt={state.thumbnailName}
            width={900}
            height={900}
          />

          <button onClick={removeThumbnail}>
            <AiOutlineClose />
          </button>
        </div>
      )}

      <label htmlFor='content'>Content:</label>
      <Editor state={state} dispatch={dispatch} />

      {/* NEED TO ADD AUTHORIZATION */}
      <button
        type='submit'
        className={styles.submitBtn}
        onClick={(e) => createPost(e)}
      >
        POST
      </button>
    </form>
  );
};

export default write;
