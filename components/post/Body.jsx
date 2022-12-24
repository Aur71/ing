import styles from '../../styles/PostPage.module.scss';
import Image from 'next/image';

const Body = ({ article }) => {
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>{article?.title}</h1>

      <h2 className={styles.brief}>{article?.brief}</h2>

      {article.thumbnail && (
        <Image
          priority={true}
          src={article?.thumbnail}
          alt='thumbnail'
          width='1360'
          height='1360'
          className={styles.thumbnail}
        />
      )}

      {article?.data?.map((item) => {
        const { id, type, name, url, level, value } = item;

        if (type === 'heading') {
          if (level === 1) {
            return <h1 key={id}>{value}</h1>;
          }

          if (level === 2) {
            return <h2 key={id}>{value}</h2>;
          }

          if (level === 3) {
            return <h3 key={id}>{value}</h3>;
          }

          if (level === 4) {
            return <h4 key={id}>{value}</h4>;
          }

          if (level === 5) {
            return <h5 key={id}>{value}</h5>;
          }

          if (level === 6) {
            return <h6 key={id}>{value}</h6>;
          }
        }

        if (type === 'paragraph') {
          return <p key={id}>{value}</p>;
        }

        if (type === 'image') {
          return (
            <Image
              key={id}
              src={url}
              alt={name}
              priority={true}
              width={1000}
              height={1000}
            />
          );
        }
      })}
    </div>
  );
};

export default Body;
