/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styles from './styles.module.scss';

interface Props {
  name: string;
  label: string;
  error: string;
  value: string;
  placeholder: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: any) => void;
}

interface PropsTags {
  name: string;
  label: string;
  error: Array<string>;
  value: Array<string>;
  placeholder: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: any) => void;
}

function Input({ error, label, ...rest }: Props | PropsTags) {
  const [touched, setTouched] = useState(false);

  return (
    <>
      <label htmlFor={rest.name}>{label}</label>
      <input
        className={styles.input}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
        onBlur={() => setTouched(true)}
        placeholder={rest.placeholder}
      />
      <span>{touched && error}</span>
    </>
  );
}

export default Input;
