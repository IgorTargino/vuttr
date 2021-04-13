import React, { SyntheticEvent, useEffect, useState } from 'react';
import Modal from 'react-modal';
// import { ValidationError } from 'yup';
import { AiOutlinePlus } from 'react-icons/ai';
import { Input, TextArea } from '../../index';
import FormValidations from './FormValidations';

import styles from './styles.module.scss';
import { useToolContext } from '../../../context/ToolContext';

const initialFormState = {
  title: '',
  link: '',
  description: '',
  tags: [''],
};

interface InputForms {
  title?: string;
  link?: string;
  description?: string;
  tags?: Array<string>;
}

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
}

function ModalAddTool({ isOpen, onRequestClose }: Props) {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({} as InputForms);
  const { addTool } = useToolContext();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    await addTool(form);
  };

  const validate = async () => {
    try {
      await FormValidations.validate(form, { abortEarly: false });
      setErrors({});
    } catch (error) {
      // if (error instanceof ValidationError) {
      //   const errs = {};
      //   error.inner.forEach((key) => {
      //     errs[key.path] = key.message;
      //   });
      //   setErrors(errs);
      // }
      setErrors(error);
    }
  };

  const setInput = (newValue: InputForms) => {
    setForm((currenValue) => ({ ...currenValue, ...newValue }));
  };

  useEffect(() => {
    validate();
  }, [form]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.content}
      overlayClassName={styles.overlay}
    >
      <form>
        <header>
          <legend>
            <AiOutlinePlus size={20} />
            <h3>Add Tool</h3>
          </legend>
          <button type="button">
            <img src="icon-close.svg" alt="" />
          </button>
        </header>

        <div>
          <Input
            name="title"
            onChange={(event) => setInput({ title: event.target.value })}
            label="Title"
            value={form.title}
            error={errors.title || ''}
            placeholder="Notion"
          />
        </div>
        <div>
          <Input
            name="link"
            onChange={(event) => setInput({ link: event.target.value })}
            label="Link"
            value={form.link}
            error={errors.link || ''}
            placeholder="https://www.notion.so/"
          />
        </div>
        <div>
          <TextArea
            name="description"
            onChange={(event) => setInput({ description: event.target.value })}
            label="Description"
            value={form.description}
            error={errors.description || ''}
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          />
        </div>
        <div>
          <Input
            name="tags"
            onChange={(event) =>
              setInput({ tags: event.target.value.split(',') })
            }
            label="Tags"
            value={form.tags}
            error={errors.tags || ['']}
            placeholder="organization, study, ..."
          />
        </div>
        <div>
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default ModalAddTool;
