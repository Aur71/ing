import styles from '../../styles/Sidebar.module.scss'
import { useGlobalContext } from '../../context/context'

import Image from 'next/image'
import Link from 'next/link'

import logo from '../../public/logo/logo-w-t.png'
import {
  AiOutlineClose,
  AiFillInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useGlobalContext()

  return (
    <aside className={`${styles.sidebar} ${showSidebar && styles.active}`}>
      <div className={styles.header}>
        <Link href='/' className={styles.logo}>
          <Image src={logo} alt='logo' />
        </Link>

        <button onClick={() => setShowSidebar(false)}>
          <AiOutlineClose />
        </button>
      </div>

      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>

        <li>
          <Link href='/'>Account</Link>
        </li>

        <li>
          <Link href='/'>Write</Link>
        </li>

        <li>
          <Link href='/'>About</Link>
        </li>

        <li>
          <Link href='/'>Contact</Link>
        </li>
      </ul>

      <div className={styles.social}>
        <a target='_blank' href='#'>
          <FaFacebookF />
        </a>

        <a target='_blank' href='#'>
          <AiFillInstagram />
        </a>

        <a target='_blank' href='#'>
          <AiOutlineTwitter />
        </a>
      </div>
    </aside>
  )
}

export default Sidebar
