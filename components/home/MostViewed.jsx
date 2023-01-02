import styles from '../../styles/home/MostViewed.module.scss';
// OTHER
import Image from 'next/image';
import Link from 'next/link';

// MEDIA
import img from '../../public/temp/computer.jpg';

const MostViewed = () => {
  return (
    <div className={styles.mostviewed}>
      <article className={styles.card}>
        <div className={styles.imgContainer}>
          <Image src={img} alt='thumbnail' />
        </div>

        <Link href='#'>
          <div className={styles.textContainer}>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              eligendi.
            </h3>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              est officiis nulla, corporis sit veniam, iusto repudiandae impedit
              accusantium totam obcaecati voluptate, accusamus consequatur
              magnam adipisci minima ducimus ipsam blanditiis.
            </p>
          </div>
        </Link>
      </article>

      <article className={styles.card}>
        <div className={styles.imgContainer}>
          <Image src={img} alt='thumbnail' />
        </div>

        <Link href='#'>
          <div className={styles.textContainer}>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              eligendi.
            </h3>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              est officiis nulla, corporis sit veniam, iusto repudiandae impedit
              accusantium totam obcaecati voluptate, accusamus consequatur
              magnam adipisci minima ducimus ipsam blanditiis.
            </p>
          </div>
        </Link>
      </article>

      <article className={styles.card}>
        <div className={styles.imgContainer}>
          <Image src={img} alt='thumbnail' />
        </div>

        <Link href='#'>
          <div className={styles.textContainer}>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              eligendi.
            </h3>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              est officiis nulla, corporis sit veniam, iusto repudiandae impedit
              accusantium totam obcaecati voluptate, accusamus consequatur
              magnam adipisci minima ducimus ipsam blanditiis.
            </p>
          </div>
        </Link>
      </article>
    </div>
  );
};

export default MostViewed;
