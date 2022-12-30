import styles from '../../styles/Navbar.module.scss';
// HOOKS
import { useGlobalContext } from '../../context/context';

// DATA
import { navigation } from '../../data/navigation';

// OTHER
import Link from 'next/link';
import Image from 'next/image';

// MEDIA
import logo from '../../public/logo/logo-b-t.png';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  const { setShowSidebar } = useGlobalContext();

  return (
    <nav className={styles.navbar}>
      <ul>
        {/* LOGO */}
        <li className={styles.logo}>
          <Link href='/'>
            <Image src={logo} alt='logo' priority={true} />
          </Link>
        </li>

        {/* NAVBAR LINKS */}
        {navigation.map((item) => {
          return (
            <li key={item.id}>
              <Link href={item.path}>{item.name}</Link>
            </li>
          );
        })}

        {/* SIDEBAR BUTTON */}
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
