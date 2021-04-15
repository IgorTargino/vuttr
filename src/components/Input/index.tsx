/* eslint-disable no-unused-vars */
import React, {
  useState,
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

import styles from './styles.module.scss';

type FormData = {
  title: string;
  // link: string;
  // description: string;
  // tags: Array<string>;
};
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
}

function Input({ name, type, label, placeholder, register, error }: Props) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        className={styles.input}
        name={name}
        type={type}
        placeholder={placeholder}
        {...register}
      />
      <p>{error?.message}</p>
    </>
  );
}

// eslint-disable-next-line no-const-assign
export default Input;
