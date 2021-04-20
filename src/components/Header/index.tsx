import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { AddToolForm } from '../index';

import styles from './styles.module.scss';

interface Props {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  checkbox: boolean;
  setCheckbox: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = (props: Props) => {
  const [stateForm, setStateForm] = useState(false);
  const { inputValue, setInputValue, checkbox, setCheckbox } = props;

  function openForm() {
    setStateForm(true);
  }

  function closeForm() {
    setStateForm(false);
  }

  return (
    <>
      <header className={styles.container}>
        <section className={styles.title}>
          <h1>VUTTR</h1>
          <h2>Very Useful Tools to Remember</h2>
        </section>

        <section className={styles.toolbar}>
          <div>
            <input
              type="search"
              placeholder="Type what you're looking for..."
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

          <button
            onClick={() => openForm()}
            type="button"
            className={styles.button}
          >
            <AiOutlinePlus size={20} />
            Add
          </button>
        </section>
      </header>
      <AddToolForm isOpen={stateForm} onRequestClose={closeForm} />
    </>
  );
};

export default Header;
