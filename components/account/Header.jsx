import styles from '../../styles/Account.module.scss'

import Image from 'next/image'

import { FaFacebookF } from 'react-icons/fa'
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai'
import user from '../../public/temp/user.jpg'

const Header = () => {
  return (
    <div className={styles.header}>
      <Image className={styles.user} src={user} alt='user' />

      <div className={styles.info}>
        <h1>Some Name</h1>
        <p>0 followers</p>
        <p>0 following</p>

        <button>follow</button>
      </div>

      <ul className={styles.social}>
        <li>
          <a target='_blank' href='/'>
            <FaFacebookF />
          </a>
        </li>

        <li>
          <a target='_blank' href='/'>
            <AiOutlineTwitter />
          </a>
        </li>

        <li>
          <a target='_blank' href='/'>
            <AiFillInstagram />
          </a>
        </li>

        <li>
          <a target='_blank' href='/'>
            <AiFillLinkedin />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Header
