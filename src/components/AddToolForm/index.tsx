/* eslint-disable jsx-a11y/label-has-associated-control */
import Modal from 'react-modal';

import { AiOutlinePlus } from 'react-icons/ai';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { InputForm, TextArea } from '../index';
import { useTools } from '../../context/toolsContext';
import styles from './styles.module.scss';

import FormValidations from './validations';

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
interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
}

const AddToolForm = ({ isOpen, onRequestClose }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(FormValidations),
  });

  const { addTool } = useTools();

  const onSubmit = async (data: FormInputs) => {
    const newData: ToolData = initialValue;
    newData.title = data.title;
    newData.link = data.link;
    newData.description = data.description;
    newData.tags = data.tags.split(',');

    await addTool(newData);
    onRequestClose();
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
        <InputForm
          name="title"
          label="title"
          placeholder="Notion"
          register={register}
          error={errors.title}
        />
        <InputForm
          name="link"
          label="link"
          placeholder="https://www.notion.so/"
          register={register}
          error={errors.link}
        />
        <TextArea
          name="description"
          label="description"
          placeholder="Loren ipsun"
          register={register}
          error={errors.description}
        />
        <InputForm
          name="tags"
          label="tags"
          placeholder="organization, work, study"
          register={register}
          error={errors.tags}
        />
        <button type="submit">Add Tool</button>
      </form>
    </Modal>
  );
};

export default AddToolForm;
