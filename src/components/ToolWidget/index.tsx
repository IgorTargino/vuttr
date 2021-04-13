import styles from './styles.module.scss';

function Tool() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h5>Tool</h5>
        <button type="button" className={styles.button}>
          <img src="icon-close.svg" alt="close" />
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
    </section>
  );
}

export default Tool;
