import React from 'react';

import { AiOutlinePlus } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';

import { useTheme } from '../../context/ThemeContext';

import styles from './styles.module.scss';
import { useModal } from '../../context/ModalContext';

interface Props {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  checkbox: boolean;
  setCheckbox: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = (props: Props) => {
  const { inputValue, setInputValue, checkbox, setCheckbox } = props;

  const { toggleDarkMode, isDark } = useTheme();
  const { toggleFormState } = useModal();

  return (
    <header className={styles.container}>
      <div className={styles.title}>
        <h1>VUTTR</h1>
        <h2>Very Useful Tools to Remember</h2>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.search}>
          <div className={styles.iconSearch}>
            <BsSearch size={15} />
          </div>
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
          <button onClick={toggleFormState} type="button">
            <AiOutlinePlus size={20} />
            Add
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
