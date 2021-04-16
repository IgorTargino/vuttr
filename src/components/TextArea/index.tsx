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

function TextArea({ name, label, placeholder, register, error }: Props) {
  return (
    <section className={styles.container}>
      <div>
        <label htmlFor={name}>{label}</label>
        <span>*</span>
      </div>
      <textarea
        className={styles.textarea}
        placeholder={error !== undefined ? 'Error' : placeholder}
        {...register(label)}
      />
      <p>{error?.message}</p>
    </section>
  );
}

export default TextArea;
