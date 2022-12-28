import styles from '../../styles/Account.module.scss';
// HOOKS
import { useGlobalContext } from '../../context/context';

// OTHER
import Image from 'next/image';

const Header = ({ currentUser }) => {
  const { logOut, user } = useGlobalContext();

  return (
    <div className={styles.header}>
      {currentUser.photoURL && (
        <Image
          className={styles.user}
          src={currentUser?.photoURL}
          alt='user'
          width={250}
          height={250}
        />
      )}

      <div className={styles.info}>
        <h1>{currentUser?.displayName}</h1>

        {user.uid === currentUser.id && (
          <button onClick={logOut}>logout</button>
        )}
      </div>
    </div>
  );
};

export default Header;
