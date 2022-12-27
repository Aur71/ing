import styles from '../../styles/Account.module.scss';

// COMPONENTS
import Post from '../Post';

const Body = ({ articles }) => {
  return (
    <div className={styles.body}>
      {articles.map((article) => {
        return <Post key={article.id} article={article} />;
      })}
    </div>
  );
};

export default Body;
