import styles from '../../styles/Sidebar.module.scss';
// HOOKS
import { useGlobalContext } from '../../context/context';

// DATA
import { navigation, social } from '../../data/navigation';

// OTHER
import Image from 'next/image';
import Link from 'next/link';

// MEDIA
import logo from '../../public/logo/logo-w-t.png';
import { AiOutlineClose } from 'react-icons/ai';

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useGlobalContext();

  return (
    <aside className={`${styles.sidebar} ${showSidebar && styles.active}`}>
      {/* LOGO & CLOSE BTN */}
      <div className={styles.header}>
        <Link href='/' className={styles.logo}>
          <Image src={logo} alt='logo' priority={true} />
        </Link>

        <button onClick={() => setShowSidebar(false)}>
          <AiOutlineClose />
        </button>
      </div>

      {/* SIDEBAR LINKS */}
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>

        {navigation.map((item) => {
          return (
            <li key={item.id}>
              <Link href={item.path}>{item.name}</Link>
            </li>
          );
        })}
      </ul>

      {/* SIDEBAR SOCIAL LINKS */}
      <div className={styles.social}>
        {social.map((item) => {
          return (
            <a key={item.id} href={item.path}>
              {item.icon}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
