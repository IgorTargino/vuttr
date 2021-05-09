/* eslint-disable no-unused-vars */
import Modal from 'react-modal';

import { AiOutlineClose } from 'react-icons/ai';
import { useTools } from '../../context/ToolsContext';
import styles from './styles.module.scss';
import { useModal } from '../../context/ModalContext';

const ModalRemoveTool = () => {
  const { removeTool } = useTools();
  const { modalState, closeModal, id, title } = useModal();

  const remove = async (index: number) => {
    await removeTool(index);
    closeModal();
  };

  return (
    <Modal
      isOpen={modalState}
      onRequestClose={closeModal}
      className={styles.container}
      overlayClassName={styles.overlay}
    >
      <div className={styles.title}>
        <AiOutlineClose size={15} />
        <h4>Remove Tool</h4>
      </div>
      <p>Are you sure you want to remove {title}</p>
      <div className={styles.footer}>
        <button className={styles.cancel} type="button" onClick={closeModal}>
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
