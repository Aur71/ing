import styles from '../../styles/PostPage.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import { FaFacebookF } from 'react-icons/fa';
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineLink,
} from 'react-icons/ai';
import { CiBookmark } from 'react-icons/ci';
import user from '../../public/temp/user.jpg';

const Header = ({ article }) => {
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
      <Link href='/'>
        <Image
          priority={true}
          src={user}
          alt='user image'
          className={styles.profilePicture}
        />
      </Link>

      <div className={styles.info}>
        <Link href='/'>
          <h5>User Name</h5>
        </Link>

        <p>{toDateTime(article?.date?.seconds)}</p>
      </div>

      <ul className={styles.social}>
        <li>
          <Link href='#'>
            <AiOutlineTwitter />
          </Link>
        </li>

        <li>
          <Link href='#'>
            <FaFacebookF />
          </Link>
        </li>

        <li>
          <Link href='#'>
            <AiFillLinkedin />
          </Link>
        </li>

        <li>
          <Link href='#'>
            <AiOutlineLink />
          </Link>
        </li>

        <li>
          <Link href='#'>
            <CiBookmark />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
