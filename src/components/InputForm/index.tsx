/* eslint-disable no-unused-vars */
import { InputHTMLAttributes, useEffect } from 'react';
import { FieldError, Path, UseFormRegister } from 'react-hook-form';

import styles from './styles.module.scss';

type FormData = {
  title: string;
  link: string;
  description: string;
  tags: string;
};
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: Path<FormData>;
  placeholder: string;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  type: string;
}

function InputForm({ name, label, placeholder, register, error, type }: Props) {
  return (
    <section className={styles.container}>
      <header>
        <label htmlFor={name}>{label}</label>
        <span className={error && styles.asterisk}>*</span>
      </header>
      {type === 'input' ? (
        <div>
          <input
            className={error ? styles.inputInvalid : styles.input}
            placeholder={error !== undefined ? 'Error' : placeholder}
            {...register(label)}
          />
          <p>{error?.message}</p>
        </div>
      ) : (
        <div>
          <textarea
            className={error ? styles.textAreaInvalid : styles.textArea}
            placeholder={error !== undefined ? 'Error' : placeholder}
            {...register(label)}
          />
          <p>{error?.message}</p>
        </div>
      )}
    </section>
  );
}

// eslint-disable-next-line no-const-assign
export default InputForm;
