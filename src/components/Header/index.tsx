import React from 'react';

import { AiOutlinePlus } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';

import { useTheme } from '../../context/ThemeContext';

import styles from './styles.module.scss';

interface Props {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  checkbox: boolean;
  setCheckbox: React.Dispatch<React.SetStateAction<boolean>>;
  openForm: () => void;
}

const Header = (props: Props) => {
  const { inputValue, setInputValue, checkbox, setCheckbox, openForm } = props;
  const { toggleDarkMode, isDark } = useTheme();
  return (
    <header className={styles.container}>
      <div className={styles.title}>
        <h1>VUTTR</h1>
        <h2>Very Useful Tools to Remember</h2>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.search}>
          <img src="icon-search.svg" alt="Icon Search" />
          <input
            type="search"
            placeholder="Search"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <section>
            <input
              type="checkbox"
              defaultChecked={checkbox}
              onChange={() => setCheckbox(!checkbox)}
            />
            <p>search in tags only</p>
          </section>
        </div>
        <div className={styles.buttons}>
          <button
            className={styles.toggleButton}
            type="button"
            onClick={toggleDarkMode}
          >
            {isDark ? <FaMoon /> : <FaSun />}
          </button>
          <button onClick={() => openForm()} type="button">
            <AiOutlinePlus size={20} />
            Add
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
