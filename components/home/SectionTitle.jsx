import styles from '../../styles/home/SectionTitle.module.scss';
// HOOKS
import { useGlobalContext } from '../../context/context';

const SectionTitle = ({ title }) => {
  const { setSearch } = useGlobalContext();

  return (
    <div className={styles.container}>
      <h2>
        {title} <span></span>
      </h2>

      {title === 'All Articles' && (
        <input
          type='text'
          placeholder='Search...'
          onChange={(e) => setSearch(e.target.value)}
        />
      )}
    </div>
  );
};

export default SectionTitle;
