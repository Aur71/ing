import styles from '../../styles/Write.module.scss';

import { useRef, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

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
        const { type, id } = item;

        if (type === 'image') {
          return (
            <div key={id} className={styles.wrapper}>
              <input type='file' accept='image/png, image/jpeg' />

              <button
                className={styles.deleteBtn}
                onClick={() => handleDelete(id)}
              >
                <AiOutlineClose />
              </button>
            </div>
          );
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
