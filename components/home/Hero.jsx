import styles from '../../styles/Home.module.scss';

// OTHER
import Image from 'next/image';

// MEDIA
import heroCOLOR from '../../public/home/hero.webp';
import heroBW from '../../public/home/hero-bw.webp';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image src={heroCOLOR} alt='hero-color' />
      <Image src={heroBW} alt='hero-bw' priority={true} />
    </div>
  );
};

export default Hero;
