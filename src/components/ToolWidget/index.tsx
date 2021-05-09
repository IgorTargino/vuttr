import { AiOutlineClose } from 'react-icons/ai';
import { useModal } from '../../context/ModalContext';

import styles from './styles.module.scss';

interface Props {
  title: string;
  link: string;
  description: string;
  tags: string;
  id: number;
}

const ToolWidget = ({ title, link, description, tags, id }: Props) => {
  const { openModal } = useModal();

  return (
    <>
      <section className={styles.container}>
        <div className={styles.header}>
          <a href={link} target="_blank" rel="noreferrer">
            <h3>{title}</h3>
          </a>

          <button
            type="button"
            className={styles.button}
            onClick={() => openModal(id, title)}
          >
            <AiOutlineClose size={15} />
          </button>
        </div>
        <div className={styles.data}>
          <p>{description}</p>
          <p>
            <strong>{tags}</strong>
          </p>
        </div>
      </section>
    </>
  );
};

export default ToolWidget;
