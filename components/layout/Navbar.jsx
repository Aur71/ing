import styles from '../../styles/Navbar.module.scss';
// HOOKS
import { useGlobalContext } from '../../context/context';

// OTHER
import Link from 'next/link';
import Image from 'next/image';

// MEDIA
import logo from '../../public/logo/logo-w-t.png';
import { BiSearchAlt2 } from 'react-icons/bi';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  const { setShowSearch, setShowSidebar, user } = useGlobalContext();
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.logo}>
          <Link href='/'>
            <Image src={logo} alt='logo' />
          </Link>
        </li>
        <li>
          <Link href={`/account/${user !== null ? user.uid : 'signin'}`}>
            Account
          </Link>
        </li>
        <li>
          <Link href='/write'>Write</Link>
        </li>

        <li className={styles.searchIcon}>
          <button onClick={() => setShowSearch(true)}>
            <BiSearchAlt2 />
          </button>
        </li>

        <li className={styles.sidebarBtn}>
          <button onClick={() => setShowSidebar(true)}>
            <RxHamburgerMenu />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
