import styles from '../styles/Write.module.scss';

import Editor from '../components/write/Editor';

const write = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.write} onSubmit={handleSubmit}>
      <label htmlFor='title'>Title:</label>
      <input type='text' id='title' name='title' />

      <label htmlFor='title'>Brief:</label>
      <input type='text' id='title' name='title' />

      <label htmlFor='thumbnail'>Thumbnail:</label>
      <input
        type='file'
        id='thumbnail'
        name='thumbnail'
        accept='image/png, image/jpeg'
      />

      <label htmlFor='content'>Content:</label>
      <Editor />

      <button type='submit' className={styles.submitBtn}>
        POST
      </button>
    </form>
  );
};

export default write;
