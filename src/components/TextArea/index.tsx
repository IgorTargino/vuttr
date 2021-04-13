import React, { useState } from 'react';
import styles from './styles.module.scss';

interface Props {
  error: string;
  label: string;
  name: string;
  value: string;
  placeholder: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: any) => void;
}

function TextArea({ error, label, ...rest }: Props) {
  const [touched, setTouched] = useState(false);

  return (
    <>
      <label htmlFor={rest.name}>{label}</label>
      <textarea
        className={styles.textarea}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
        onBlur={() => setTouched(true)}
        placeholder={rest.placeholder}
      />
      <span>{touched && error}</span>
    </>
  );
}

export default TextArea;
