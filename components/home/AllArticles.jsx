import styles from '../../styles/home/AllArticles.module.scss';
// HOOKS
import { useGlobalContext } from '../../context/context';

// OTHER
import Image from 'next/image';
import Link from 'next/link';

const AllArticles = ({ articles }) => {
  const { search } = useGlobalContext();

  // CONVERTING DATE
  function toDateTime(secs) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);

    return t.toLocaleDateString('en', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  return (
    <div className={styles.allArticles}>
      {articles
        .filter((article) => {
          if (search === '') {
            return article;
          }

          if (article.title.toLowerCase().includes(search.toLowerCase())) {
            return article;
          }
        })
        .map((article) => {
          return (
            <article className={styles.article} key={article.id}>
              <Link href={`/post/${article?.id}`}>
                {article.thumbnail && (
                  <Image
                    priority={true}
                    width={450}
                    height={450}
                    src={article?.thumbnail}
                    alt='image'
                  />
                )}

                <div className={styles.textContainer}>
                  <h5>{toDateTime(article?.date?.seconds)}</h5>
                  <h4>{article?.title}</h4>
                  <p>{article?.brief}</p>
                </div>
              </Link>
            </article>
          );
        })}
    </div>
  );
};

export default AllArticles;
