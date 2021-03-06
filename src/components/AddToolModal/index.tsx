/* eslint-disable jsx-a11y/label-has-associated-control */
import Modal from 'react-modal';

import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import FormValidations from './validations';

import { InputForm } from '../index';
import { useTools } from '../../context/ToolsContext';

import styles from './styles.module.scss';
import { useModal } from '../../context/ModalContext';

const initialValue = {
  title: '',
  link: '',
  description: '',
  tags: [''],
  id: 0,
};

type FormInputs = {
  title: string;
  link: string;
  description: string;
  tags: string;
};

interface ToolData {
  title: string;
  link: string;
  description: string;
  tags: Array<string>;
  id: number;
}

const AddToolModal = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(FormValidations),
  });

  const { addTool } = useTools();
  const { formState, toggleFormState } = useModal();

  const closeModal = () => {
    reset();
    toggleFormState();
  };

  const onSubmit = async (data: FormInputs) => {
    const newData: ToolData = initialValue;
    newData.title = data.title;
    newData.link = data.link;
    newData.description = data.description;
    newData.tags = data.tags.split(',');

    await addTool(newData);
    closeModal();
  };

  return (
    <Modal
      isOpen={formState}
      onRequestClose={closeModal}
      className={styles.content}
      overlayClassName={styles.overlay}
    >
      <header>
        <div>
          <AiOutlinePlus size={20} />
          <h4>Add Tool</h4>
        </div>
        <button type="button" className={styles.button} onClick={closeModal}>
          <AiOutlineClose size={15} />
        </button>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputForm
          name="title"
          label="title"
          placeholder="Notion"
          register={register}
          error={errors.title}
          type="input"
        />
        <InputForm
          name="link"
          label="link"
          placeholder="https://www.notion.so/"
          register={register}
          error={errors.link}
          type="input"
        />
        <InputForm
          name="description"
          label="description"
          placeholder="Is an application and service of notes with support of discounts that integrates tasks, wikis and databases."
          register={register}
          error={errors.description}
          type="textArea"
        />
        <InputForm
          name="tags"
          label="tags"
          placeholder="organization, work, study"
          register={register}
          error={errors.tags}
          type="input"
        />
        <button type="submit">Add Tool</button>
      </form>
    </Modal>
  );
};

export default AddToolModal;
