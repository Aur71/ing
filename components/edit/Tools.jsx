import styles from '../../styles/Edit.module.scss';

// MEDIA
import { FaHeading, FaParagraph } from 'react-icons/fa';
import { BsImages } from 'react-icons/bs';

const Tools = () => {
  return (
    <div className={styles.tools}>
      <div className={styles.headingsWrapper}>
        <FaHeading className={styles.icon} />

        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
        </div>
      </div>
      <button>
        <FaParagraph className={styles.icon} />
      </button>

      <button>
        <BsImages className={styles.icon} />
      </button>
    </div>
  );
};

export default Tools;
