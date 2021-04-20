/* eslint-disable no-unused-vars */
import Modal from 'react-modal';
import { useTools } from '../../context/toolsContext';

import styles from './styles.module.scss';

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
  id: number;
  title: string;
}

const ModalRemoveTool = ({ isOpen, onRequestClose, id, title }: Props) => {
  const { removeTool } = useTools();

  const remove = async (index: number) => {
    removeTool(index);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.container}
      overlayClassName={styles.overlay}
    >
      <section className={styles.title}>
        <img src="icon-close.svg" alt="close" />
        <h2>Remove Tool</h2>
      </section>
      <p>Are you sure you want to remove {title}</p>
      <section className={styles.footer}>
        <button
          className={styles.cancel}
          type="button"
          onClick={onRequestClose}
        >
          Cancel
        </button>
        <button
          className={styles.remove}
          type="button"
          onClick={() => remove(id)}
        >
          Yes, remove
        </button>
      </section>
    </Modal>
  );
};

export default ModalRemoveTool;
