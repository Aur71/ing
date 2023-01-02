import styles from '../../styles/home/Slider.module.scss';
// HOOKS
import { useRef } from 'react';

// OTHER
import Image from 'next/image';
import Link from 'next/link';

// MEDIA
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';

// TEMP
import img from '../../public/temp/coding.jpg';

const Slider = ({ latestArticles }) => {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollLeft -= 290;
  };

  const slideRight = () => {
    sliderRef.current.scrollLeft += 290;
  };

  return (
    <div className={styles.slider}>
      <button className={styles.leftBtn} onClick={slideLeft}>
        <GoArrowLeft />
      </button>

      <button className={styles.rightBtn} onClick={slideRight}>
        <GoArrowRight />
      </button>

      <div className={styles.cardsContainer} ref={sliderRef}>
        {latestArticles.map((article) => {
          return (
            <article className={styles.card} key={article?.id}>
              <Link href={`/post/${article?.id}`}>
                <Image
                  src={article?.thumbnail}
                  alt='thumbnail'
                  width={500}
                  height={550}
                />

                <h3>{article?.title}</h3>
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
