import styles from '../../styles/PostPage.module.scss'
import Image from 'next/image'
import Link from 'next/link'

import coding from '../../public/temp/coding.jpg'

const Body = () => {
  return (
    <div className={styles.body}>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugit
        tenetur eius itaque accusamus placeat? Est explicabo incidunt
        perspiciatis dolorum.
      </h1>

      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis esse
        explicabo laborum accusamus deserunt voluptate quas pariatur voluptates,
        et, deleniti dolorum nam, cupiditate autem voluptatem repellendus
        consequatur tenetur iste? Magni, unde impedit. Repudiandae iure alias
        dolores necessitatibus illo facere voluptatibus!
      </h2>

      <Image src={coding} alt='temp' />

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident,
        libero facilis fugit aspernatur aperiam enim, incidunt similique fuga
        delectus nisi, qui nam velit officia accusantium minima ipsum eaque modi
        consectetur ut eius a. Architecto labore at voluptatibus, a voluptatum,
        numquam earum fugit dolor laudantium ducimus consequuntur dolorum,
        explicabo mollitia quae quam quas non commodi ipsam. Sequi architecto
        veritatis facilis reiciendis obcaecati consequuntur eveniet vitae,
        libero sint nesciunt magnam fugit similique corrupti atque, rerum
        tempora inventore! Dolores praesentium eos, aperiam ut eaque unde fugiat
        eum illum ducimus labore! Voluptate, maiores obcaecati sunt quos vitae,
        a laudantium velit aperiam rem sed exercitationem.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aliquid,
        quidem laboriosam cumque ullam voluptatum saepe laudantium nemo! Optio
        quidem illum velit nam nihil! Fugiat provident reprehenderit praesentium
        adipisci eveniet asperiores qui quas maxime minus distinctio expedita
        sunt modi porro impedit nostrum labore saepe tempora nulla, dolorum,
        eaque aut beatae.
      </p>

      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
        eveniet.
      </h3>

      <h4>Lorem ipsum dolor sit amet.</h4>

      <h5>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, illum
        doloribus. Accusamus ea consequuntur cumque!
      </h5>
    </div>
  )
}

export default Body
