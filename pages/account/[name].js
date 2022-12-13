import styles from '../../styles/Account.module.scss'

import Header from '../../components/account/Header'
import Body from '../../components/account/Body'

const Account = () => {
  return (
    <section className={styles.account}>
      <Header />
      <Body />
    </section>
  )
}

export default Account
