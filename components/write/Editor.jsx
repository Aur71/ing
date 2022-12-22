import styles from '../../styles/Write.module.scss';

// HOOKS
import { useRef, useEffect, useState } from 'react';

import Image from 'next/image';

// FIREBASe
import { storage } from '../../firebase-config';
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';

import { v4 as uuid } from 'uuid';

// MEDIA
import { FaHeading, FaParagraph } from 'react-icons/fa';
import { BsImages } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

const Editor = () => {
  const toolsRef = useRef(null);
  const [distance, setDistance] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setDistance(toolsRef.current.getBoundingClientRect().top);

    const checkScroll = () => {
      const offSet = window.scrollY;

      if (offSet >= distance) {
        toolsRef.current.style.position = 'fixed';
        toolsRef.current.style.top = 0;
        toolsRef.current.style.left = 0;
      } else {
        toolsRef.current.style.position = 'relative';
        toolsRef.current.style.top = 'auto';
      }
    };

    window.addEventListener('scroll', checkScroll);

    return () => window.removeEventListener('scroll', checkScroll);
  }, [distance]);

  const handleHeading = (level) => {
    const unique_id = uuid();
    const small_id = unique_id.slice(0, 8);

    setItems([
      ...items,
      {
        id: small_id,
        level: level,
        type: 'heading',
        value: '',
      },
    ]);
  };

  const handleParagraph = () => {
    const unique_id = uuid();
    const small_id = unique_id.slice(0, 8);

    setItems([
      ...items,
      {
        id: small_id,
        type: 'paragraph',
        value: '',
      },
    ]);
  };

  const handleImage = () => {
    const unique_id = uuid();
    const small_id = unique_id.slice(0, 8);

    setItems([
      ...items,
      {
        id: small_id,
        type: 'image',
        value: '',
        name: '',
      },
    ]);
  };

  const handleChange = (e, i, type) => {
    const value = e.target.value;

    const tempItems = items.map((item, index) => {
      if (index === i) {
        item.value = value;
        return item;
      }

      return item;
    });

    setItems(tempItems);

    // AUTO GROW BELOW

    if (type === 'heading' || type === 'paragraph') {
      e.target.style.height = 'auto';
      e.target.style.height = `${e.target.scrollHeight}px`;
    }
  };

  const handleDelete = (id) => {
    const tempItems = items.filter((item) => item.id !== id);

    setItems(tempItems);
  };

  // IMAGE UPLODING

  const handleImageChange = (e, id) => {
    const image = e.target.files[0];
    const unique_id = uuid();
    const small_id = unique_id.slice(0, 8);
    const name = image?.name + small_id;

    if (image === null) {
      return;
    }

    const imageRef = ref(storage, `media/${name}`);
    uploadBytes(imageRef, image).then(() => {
      const listRef = ref(storage, 'media/');

      listAll(listRef).then((res) => {
        res.items.forEach((item) => {
          if (item.name === name) {
            getDownloadURL(item).then((url) => {
              const tempItems = items.map((item) => {
                if (item.id === id) {
                  item.value = url;
                  item.name = name;
                  return item;
                }

                return item;
              });

              setItems(tempItems);
            });
          }
        });
      });
    });
  };

  const deleteImage = (id, name) => {
    const tempItems = items.filter((item) => item.id !== id);

    setItems(tempItems);

    const mediaRef = ref(storage, `media/${name}`);

    deleteObject(mediaRef)
      .then(() => {
        console.log('Deleted');
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  };

  return (
    <div className={styles.editor}>
      <div className={styles.tools} ref={toolsRef}>
        <div className={styles.headingBtn}>
          <span>
            <span>Heading</span>
            <FaHeading className={styles.icon} />
          </span>
          <div>
            <button onClick={() => handleHeading(1)}>H1</button>
            <button onClick={() => handleHeading(2)}>H2</button>
            <button onClick={() => handleHeading(3)}>H3</button>
            <button onClick={() => handleHeading(4)}>H4</button>
            <button onClick={() => handleHeading(5)}>H5</button>
            <button onClick={() => handleHeading(6)}>H6</button>
          </div>
        </div>

        <button onClick={handleParagraph}>
          <span>Paragraph</span>
          <FaParagraph className={styles.icon} />
        </button>

        <button onClick={handleImage}>
          <span>Image</span>
          <BsImages className={styles.icon} />
        </button>
      </div>

      {items.map((item, index) => {
        const { type, id, value } = item;

        if (type === 'image') {
          if (value === '') {
            return (
              <div key={id} className={styles.wrapper}>
                <input type='file' onChange={(e) => handleImageChange(e, id)} />

                <button
                  className={styles.deleteBtn}
                  onClick={() => handleDelete(id)}
                >
                  <AiOutlineClose />
                </button>
              </div>
            );
          } else {
            return (
              <div className={styles.imgContainer} key={item.id}>
                <Image src={value} alt={item.name} width={500} height={500} />

                <button
                  className={styles.deleteBtn}
                  onClick={() => deleteImage(id, item.name)}
                >
                  <AiOutlineClose />
                </button>
              </div>
            );
          }
        }

        return (
          <div key={id} className={styles.wrapper}>
            <textarea onChange={(e) => handleChange(e, index, type)}></textarea>

            <button
              className={styles.deleteBtn}
              onClick={() => handleDelete(id)}
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
