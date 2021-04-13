import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import styles from './styles.module.scss';

interface Props {
  openModal: () => void;
}

function Header({ openModal }: Props) {
  return (
    <header className={styles.container}>
      <section className={styles.title}>
        <h1>VUTTR</h1>
        <h2>Very Useful Tools to Remember</h2>
      </section>

      <section className={styles.toolbar}>
        <div>
          <input
            type="search"
            placeholder="Digite o que está procurando..."
            required
          />
          <section>
            <input type="checkbox" />
            <p>search in tags only</p>
          </section>
        </div>

        <button
          onClick={() => openModal()}
          type="button"
          className={styles.button}
        >
          <AiOutlinePlus size={20} />
          Add
        </button>
      </section>
    </header>
  );
}

export default Header;
