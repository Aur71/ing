import styles from '../../styles/Search.module.scss'

import SearchResults from './SearchResults'

import { useGlobalContext } from '../../context/context'
import { useRouter } from 'next/router'

import { AiOutlineClose } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'

const Search = () => {
  const router = useRouter().route
  const { search, setSearch, showSearch, setShowSearch, setShowSidebar } =
    useGlobalContext()

  const closeSearch = () => {
    setShowSearch(false)
    setSearch('')
  }

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
        <button onClick={closeSearch}>
          <AiOutlineClose />
        </button>

        <button onClick={() => setShowSidebar(true)}>
          <RxHamburgerMenu />
        </button>
      </div>

      {router !== '/' && <SearchResults />}
    </div>
  )
}

export default Search
