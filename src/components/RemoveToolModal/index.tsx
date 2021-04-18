/* eslint-disable no-unused-vars */
import Modal from 'react-modal';
import useRemoveTool from '../../Hooks/useRemoveTool';

import styles from './styles.module.scss';

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
  id: number;
}

const ModalRemoveTool = ({ isOpen, onRequestClose, id }: Props) => {
  const { removeTool } = useRemoveTool();

  const remove = (index: number) => {
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
        <p>Remove Tool</p>
      </div>
      <p>Are you sure you want to remove hotel?</p>
      <div className={styles.footer}>
        <button className={styles.cancel} type="button">
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
