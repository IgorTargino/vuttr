import styles from './styles.module.scss';

function Tool() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>Tool</p>
        <button type="button" className={styles.button}>
          <img src="icon-close.svg" alt="close" />
          remove
        </button>
      </div>
      <div className={styles.data}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam enim
          necessitatibus doloremque architecto unde, odit nobis dolorem fuga
        </p>
        <p>
          <strong>#tags #tag2 #tag3 #tag4</strong>
        </p>
      </div>
    </div>
  );
}

export default Tool;
