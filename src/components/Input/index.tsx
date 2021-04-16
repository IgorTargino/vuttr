/* eslint-disable no-unused-vars */
import { InputHTMLAttributes } from 'react';
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
}

function Input({ name, label, placeholder, register, error }: Props) {
  return (
    <section className={styles.container}>
      <div>
        <label htmlFor={name}>{label}</label>
        <span>*</span>
      </div>

      <input
        className={styles.input}
        placeholder={error !== undefined ? 'Error' : placeholder}
        {...register(label)}
      />
      <p>{error?.message}</p>
    </section>
  );
}

// eslint-disable-next-line no-const-assign
export default Input;
