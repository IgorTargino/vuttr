import styles from './styles.module.scss';

function Modal() {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        Teste
      </div>
    </div>
  )
}

export default Modal;