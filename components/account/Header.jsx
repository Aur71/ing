import styles from '../../styles/Account.module.scss';
// HOOKS
import { useGlobalContext } from '../../context/context';

// OTHER
import Image from 'next/image';

const Header = () => {
  const { logOut, user } = useGlobalContext();

  return (
    <div className={styles.header}>
      <Image
        className={styles.user}
        src={user?.photoURL}
        alt='user'
        width={250}
        height={250}
      />

      <div className={styles.info}>
        <h1>{user?.displayName}</h1>

        <button onClick={logOut}>logout</button>
      </div>
    </div>
  );
};

export default Header;
