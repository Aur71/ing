import styles from '../../styles/Account.module.scss';
// HOOKS
import { useGlobalContext } from '../../context/context';

// COMPONENETS
import Header from '../../components/account/Header';
import Body from '../../components/account/Body';
import GoogleButton from 'react-google-button';

const Account = () => {
  const { googleSignIn, user } = useGlobalContext();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      alert(`ERROR: ${error}`);
    }
  };

  if (user === null) {
    return (
      <section className={styles.signIn}>
        <GoogleButton onClick={handleSignIn} />
      </section>
    );
  }

  return (
    <section className={styles.account}>
      <Header />
      {/* <Body /> */}
    </section>
  );
};

export default Account;
