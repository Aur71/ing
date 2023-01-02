import styles from '../../styles/account/Body.module.scss';

// COMPONENTS
import Card from './Card';

const Body = ({ articles }) => {
  return (
    <div className={styles.body}>
      {articles.map((article) => {
        return <Card key={article.id} article={article} />;
      })}
    </div>
  );
};

export default Body;
