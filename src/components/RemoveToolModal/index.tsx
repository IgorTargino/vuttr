/* eslint-disable no-unused-vars */
import Modal from 'react-modal';
import { useTools } from '../../context/ToolsContext';

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
      <div className={styles.title}>
        <img src="icon-close.svg" alt="close" />
        <h4>Remove Tool</h4>
      </div>
      <p>Are you sure you want to remove {title}</p>
      <div className={styles.footer}>
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
      </div>
    </Modal>
  );
};

export default ModalRemoveTool;
