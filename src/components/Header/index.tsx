import { AiOutlinePlus } from 'react-icons/ai';
import styles from './styles.module.scss';

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.title}>
        <h1>VUTTR</h1>
        <h2>Very Useful Tools to Remember</h2>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.search}>
          <input
            type="search"
            placeholder="Digite o que está procurando..."
            className={styles.searchBar}
          />
          <section>
            <input type="checkbox" />
            <span>search in tags only</span>
          </section>
        </div>

        <button type="button" className={styles.button}>
          <AiOutlinePlus size={20} />
          Add
        </button>
      </div>
    </header>
  );
}

export default Header;
