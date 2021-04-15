/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Modal from 'react-modal';

import { AiOutlinePlus } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../index';

import styles from './styles.module.scss';

import FormValidations from './validations';

// const initialValues = {
//   title: '',
//   link: '',
//   description: '',
//   tags: [''],
// };

type FormData = {
  title: string;
  // link: string;
  // description: string;
  // tags: Array<string>;
};

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
}

function AddToolForm({ isOpen, onRequestClose }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(FormValidations),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.content}
      overlayClassName={styles.overlay}
    >
      <header>
        <AiOutlinePlus size={20} />
        <h3>Add Tool</h3>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="title"
          type="text"
          label="Tool Name"
          placeholder="Notion"
          register={register}
          error={errors.title}
        />
        <input type="submit" />
      </form>
    </Modal>
  );
}

export default AddToolForm;
