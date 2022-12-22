import styles from '../../styles/Write.module.scss';

// COMPONENTS
import Tools from './Tools';

// OTHER
import Image from 'next/image';

// FIREBASE
import { storage } from '../../firebase-config';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';

import { v4 as uuid } from 'uuid';

// MEDIA
import { AiOutlineClose } from 'react-icons/ai';

const Editor = ({ state, dispatch }) => {
  const deleteItem = (e, id) => {
    e.preventDefault();
    dispatch({ type: 'DELETE_ITEM', payload: id });
  };

  const changeValue = (e, id) => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
    dispatch({ type: 'CHANGE_VALUE', payload: { e, id } });
  };

  const handleImage = (e, id) => {
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
                dispatch({ type: 'HANDLE_IMAGE', payload: { url, name, id } });
              });
            }
          });
        })
        .catch((error) => window.alert(`Error: ${error}`));
    });
  };

  const deleteImage = (e, id, name) => {
    e.preventDefault();
    dispatch({ type: 'DELETE_IMAGE', payload: { id, name } });
  };

  //
  //
  //
  //
  //

  return (
    <div className={styles.editor}>
      <Tools state={state} dispatch={dispatch} />

      {state.data.map((item) => {
        const { type, id, url, name } = item;

        if (type === 'image') {
          if (url === '') {
            return (
              <div key={id} className={styles.wrapper}>
                <input type='file' onChange={(e) => handleImage(e, id)} />

                <button
                  className={styles.deleteBtn}
                  onClick={(e) => deleteItem(e, id)}
                >
                  <AiOutlineClose />
                </button>
              </div>
            );
          } else {
            return (
              <div className={styles.imgContainer} key={item.id}>
                <Image src={url} alt={name} width={500} height={500} />

                <button
                  className={styles.deleteBtn}
                  onClick={(e) => deleteImage(e, id, name)}
                >
                  <AiOutlineClose />
                </button>
              </div>
            );
          }
        }

        return (
          <div key={id} className={styles.wrapper}>
            <textarea onChange={(e) => changeValue(e, id, type)} />

            <button
              className={styles.deleteBtn}
              onClick={(e) => deleteItem(e, id)}
            >
              <AiOutlineClose />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Editor;
