import { useState } from 'react';
import { RemoveToolModal } from '../index';
import styles from './styles.module.scss';

interface Props {
  title: string;
  link: string;
  description: string;
  tags: string;
  id: number;
}

const ToolWidget = ({ title, link, description, tags, id }: Props) => {
  const [modalState, setModalState] = useState(false);

  const openModal = () => {
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  return (
    <>
      <section className={styles.container}>
        <div className={styles.header}>
          <a href={link} target="_blank" rel="noreferrer">
            <h5>{title}</h5>
          </a>

          <button
            type="button"
            className={styles.button}
            onClick={() => openModal()}
          >
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
      <RemoveToolModal
        isOpen={modalState}
        onRequestClose={closeModal}
        id={id}
      />
    </>
  );
};

export default ToolWidget;
