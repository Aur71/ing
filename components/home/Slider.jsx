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

const Slider = () => {
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
        <article className={styles.card}>
          <Link href='#'>
            <Image src={img} alt='img' width={500} height={550} />
          </Link>

          <div className={styles.titleContainer}>
            <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda, quisquam exercitationem! Quae eveniet consectetur, et
              beatae itaque aliquid nesciunt aliquam.
            </h3>
          </div>
        </article>

        <article className={styles.card}>
          <Link href='#'>
            <Image src={img} alt='img' width={500} height={550} />
          </Link>

          <div className={styles.titleContainer}>
            <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda, quisquam exercitationem! Quae eveniet consectetur, et
              beatae itaque aliquid nesciunt aliquam.
            </h3>
          </div>
        </article>

        <article className={styles.card}>
          <Link href='#'>
            <Image src={img} alt='img' width={500} height={550} />
          </Link>

          <div className={styles.titleContainer}>
            <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda, quisquam exercitationem! Quae eveniet consectetur, et
              beatae itaque aliquid nesciunt aliquam.
            </h3>
          </div>
        </article>

        <article className={styles.card}>
          <Link href='#'>
            <Image src={img} alt='img' width={500} height={550} />
          </Link>

          <div className={styles.titleContainer}>
            <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda, quisquam exercitationem! Quae eveniet consectetur, et
              beatae itaque aliquid nesciunt aliquam.
            </h3>
          </div>
        </article>

        <article className={styles.card}>
          <Link href='#'>
            <Image src={img} alt='img' width={500} height={550} />
          </Link>

          <div className={styles.titleContainer}>
            <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda, quisquam exercitationem! Quae eveniet consectetur, et
              beatae itaque aliquid nesciunt aliquam.
            </h3>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Slider;
