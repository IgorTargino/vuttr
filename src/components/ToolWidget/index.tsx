import styles from './styles.module.scss';

interface Props {
  title: string;
  link: string;
  description: string;
  tags: string;
}

const ToolWidget = ({ title, link, description, tags }: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <a href={link} target="_blank" rel="noreferrer">
          <h5>{title}</h5>
        </a>

        <button type="button" className={styles.button}>
          <img src="icon-close.svg" alt="close" />
        </button>
      </div>
      <div className={styles.data}>
        <p>{description}</p>
        <p>
          <strong>{tags}</strong>
        </p>
      </div>
    </section>
  );
};

export default ToolWidget;
