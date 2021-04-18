/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Modal from 'react-modal';

import { AiOutlinePlus } from 'react-icons/ai';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Input, TextArea } from '../index';
import usePostTools from '../../Hooks/usePostTools';

import styles from './styles.module.scss';

import FormValidations from './validations';

const initialValues = {
  title: '',
  link: '',
  description: '',
  tags: [''],
};

type FormData = {
  title: string;
  link: string;
  description: string;
  tags: string;
};
interface ToolData {
  title?: string;
  link?: string;
  description?: string;
  tags?: Array<string>;
}
interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
}

function AddToolForm({ isOpen, onRequestClose }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(FormValidations),
  });

  const { addTool } = usePostTools();

  const onSubmit = async (data: FormData) => {
    const newData: ToolData = {};
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
        <Input
          name="title"
          label="title"
          placeholder="Notion"
          register={register}
          error={errors.title}
        />
        <Input
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
        <Input
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
}

export default AddToolForm;
