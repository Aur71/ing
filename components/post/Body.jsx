import styles from '../../styles/PostPage.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import coding from '../../public/temp/coding.jpg';

const Body = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugit
        tenetur eius itaque accusamus placeat? Est explicabo incidunt
        perspiciatis dolorum.
      </h1>

      <h2 className={styles.brief}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis esse
        explicabo laborum accusamus deserunt voluptate quas pariatur voluptates,
        et, deleniti dolorum nam, cupiditate autem voluptatem repellendus
        consequatur tenetur iste? Magni, unde impedit. Repudiandae iure alias
        dolores necessitatibus illo facere voluptatibus!
      </h2>

      <Image className={styles.thumbnail} src={coding} alt='temp' />

      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nemo?
      </h1>

      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quia!
      </h2>

      <h3>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
        repellendus!
      </h3>

      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, facere.
      </h4>

      <h5>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, tempora?
      </h5>

      <h6>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
        exercitationem?
      </h6>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quas
        deserunt ipsa earum ea omnis accusantium cupiditate, voluptatem dolorem.
        Dolorum!
      </p>

      <ul>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
      </ul>

      <ol>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
      </ol>
    </div>
  );
};

export default Body;
