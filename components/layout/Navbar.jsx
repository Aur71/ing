import styles from '../../styles/Navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'

import { useGlobalContext } from '../../context/context'
import { useRouter } from 'next/router'

import logo from '../../public/logo/logo-w-t.png'
import { BiSearchAlt2 } from 'react-icons/bi'

const Navbar = () => {
  const { setShowSearch } = useGlobalContext()
  const router = useRouter().route

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.logo}>
          <Link href='/'>
            <Image src={logo} alt='logo' />
          </Link>
        </li>
        <li>
          <Link href='/account/1'>Account</Link>
        </li>
        <li>
          <Link href='/write'>Write</Link>
        </li>
        <li>
          <Link href='#'>About</Link>
        </li>
        <li>
          <Link href='#'>Contact</Link>
        </li>
        <li className={styles.searchIcon}>
          <button onClick={() => setShowSearch(true)}>
            <BiSearchAlt2 />
          </button>
        </li>
        {/* {router !== '/' && 'ceva'} */}
      </ul>
    </nav>
  )
}

export default Navbar
