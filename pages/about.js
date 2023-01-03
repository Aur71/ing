import styles from '../styles/about/About.module.scss';

// OTHER
import Image from 'next/image';

// MEDIA
import img from '../public/about/about.jpg';

const about = () => {
  return (
    <div className={styles.about}>
      <div className={styles.imgContainer}>
        <Image src={img} alt='about' />
      </div>

      <div className={styles.textContainer}>
        <h1>About Us</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta illo
          ad nisi dolorum cupiditate, quasi ut dolor tenetur repellendus
          aspernatur.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          nemo dolor, blanditiis impedit numquam id perspiciatis assumenda
          sapiente eligendi labore. Atque non cumque mollitia consequuntur
          quaerat voluptatem, harum aliquam recusandae perspiciatis itaque
          provident illo officia maxime laudantium rerum laboriosam minus. Nulla
          autem dolorum inventore voluptatum similique quae quia? Pariatur,
          consequatur!
        </p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error,
          voluptas?
        </p>
      </div>
    </div>
  );
};

export default about;
