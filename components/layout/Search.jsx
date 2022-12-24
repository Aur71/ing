import styles from '../../styles/Search.module.scss';

import SearchResults from './SearchResults';

import { useGlobalContext } from '../../context/context';

import { AiOutlineClose } from 'react-icons/ai';

const Search = () => {
  const { search, setSearch, showSearch, setShowSearch } = useGlobalContext();

  const closeSearch = () => {
    setShowSearch(false);
    setSearch('');
  };

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
      </div>

      <SearchResults />
    </div>
  );
};

export default Search;
