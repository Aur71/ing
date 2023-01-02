import styles from '../../styles/home/MostViewed.module.scss';
// OTHER
import Image from 'next/image';
import Link from 'next/link';

// MEDIA
import img1 from '../../public/temporary/img-1.jpg';
import img2 from '../../public/temporary/img-2.jpg';
import img3 from '../../public/temporary/img-3.jpg';

const MostViewed = () => {
  return (
    <div className={styles.mostviewed}>
      <article className={styles.card}>
        <Link href='#'>
          <Image src={img1} alt='thumbnail' />

          <div className={styles.textContainer}>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              aliquid!
            </h3>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              pariatur, corporis eos voluptatum laboriosam mollitia sapiente
              nisi consequatur recusandae fuga.
            </p>
          </div>
        </Link>
      </article>

      <article className={styles.card}>
        <Link href='#'>
          <Image src={img2} alt='thumbnail' />

          <div className={styles.textContainer}>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              aliquid!
            </h3>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              pariatur, corporis eos voluptatum laboriosam mollitia sapiente
              nisi consequatur recusandae fuga.
            </p>
          </div>
        </Link>
      </article>

      <article className={styles.card}>
        <Link href='#'>
          <Image src={img3} alt='thumbnail' />

          <div className={styles.textContainer}>
            <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit possimus, temporibus rerum porro recusandae autem!
            </h3>

            <p>
              <span>Jhon Doe</span>
              <span> · </span>
              <span>December 29, 2022</span>
            </p>
          </div>
        </Link>
      </article>
    </div>
  );
};

export default MostViewed;
