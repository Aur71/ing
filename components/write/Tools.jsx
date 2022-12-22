import styles from '../../styles/Write.module.scss';
// HOOKS
import { useRef, useEffect } from 'react';

// MEDIA
import { FaHeading, FaParagraph } from 'react-icons/fa';
import { BsImages } from 'react-icons/bs';

const Tools = ({ dispatch }) => {
  const toolsRef = useRef(null);

  useEffect(() => {
    const checkScroll = () => {
      const offSet = window.scrollY;

      if (offSet >= 450) {
        toolsRef.current.style.position = 'fixed';
        toolsRef.current.style.top = 0;
        toolsRef.current.style.left = 0;
      } else {
        toolsRef.current.style.position = 'relative';
        toolsRef.current.style.top = 'auto';
        toolsRef.current.style.left = 'auto';
      }
    };

    window.addEventListener('scroll', checkScroll);

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const addHeading = (e, level) => {
    e.preventDefault();
    dispatch({ type: 'ADD_HEADING', payload: level });
  };

  const addParagraph = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_PARAGRAPH' });
  };

  const addImage = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_IMAGE' });
  };

  return (
    <div className={styles.tools} ref={toolsRef}>
      <div className={styles.headingBtn}>
        <span>
          <span>Heading</span>
          <FaHeading className={styles.icon} />
        </span>
        <div>
          <button onClick={(e) => addHeading(e, 1)}>H1</button>
          <button onClick={(e) => addHeading(e, 2)}>H2</button>
          <button onClick={(e) => addHeading(e, 3)}>H3</button>
          <button onClick={(e) => addHeading(e, 4)}>H4</button>
          <button onClick={(e) => addHeading(e, 5)}>H5</button>
          <button onClick={(e) => addHeading(e, 6)}>H6</button>
        </div>
      </div>

      <button onClick={addParagraph}>
        <span>Paragraph</span>
        <FaParagraph className={styles.icon} />
      </button>

      <button onClick={(e) => addImage(e)}>
        <span>Image</span>
        <BsImages className={styles.icon} />
      </button>
    </div>
  );
};

export default Tools;
