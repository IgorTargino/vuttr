import React from 'react';
import styles from './styles.module.scss';

function ModalRemoveTool() {
  return (
    <div className={styles.overlay}>
      <section className={styles.container}>
        <div className={styles.title}>
          <img src="icon-close.svg" alt="close" />
          <p>Remove tool</p>
        </div>
        <p>Are you sure you want to remove hotel?</p>
        <div className={styles.footer}>
          <button className={styles.cancel} type="button">
            Cancel
          </button>
          <button className={styles.remove} type="button">
            Yes, remove
          </button>
        </div>
      </section>
    </div>
  );
}

export default ModalRemoveTool;
