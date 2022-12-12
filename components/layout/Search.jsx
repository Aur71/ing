import styles from '../../styles/Search.module.scss'
import { useGlobalContext } from '../../context/context'

import { AiOutlineClose } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'

const Search = () => {
  const { search, setSearch, showSearch, setShowSearch, setShowSidebar } =
    useGlobalContext()

  return (
    <div className={`${styles.search} ${showSearch && styles.active}`}>
      <div className={styles.center}>
        <input
          type='text'
          name='search'
          id='search'
          placeholder='Search...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => setShowSearch(false)}>
          <AiOutlineClose />
        </button>

        <button onClick={() => setShowSidebar(true)}>
          <RxHamburgerMenu />
        </button>
      </div>
    </div>
  )
}

export default Search
