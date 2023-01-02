import styles from '../../styles/post/Header.module.scss';

// OTHER
import Image from 'next/image';
import Link from 'next/link';

const Header = ({ article, author }) => {
  // CONVERTING DATE
  function toDateTime(secs) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);

    return t.toLocaleDateString('en', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  return (
    <div className={styles.header}>
      <Link href={`/account/${author?.id}`}>
        {author.photoURL && (
          <Image
            priority={true}
            src={author?.photoURL}
            width={60}
            height={60}
            alt='user image'
            className={styles.profilePicture}
          />
        )}
      </Link>

      <div className={styles.info}>
        <Link href='/'>
          <h5>{author?.displayName}</h5>
        </Link>

        <p>{toDateTime(article?.date?.seconds)}</p>
      </div>
    </div>
  );
};

export default Header;
