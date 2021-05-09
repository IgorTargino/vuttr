/* eslint-disable no-unused-vars */
import { createContext, ReactNode, useContext, useState } from 'react';

interface ModalContextData {
  toggleFormState: () => void;
  openModal: (id: number, title: string) => void;
  closeModal: () => void;
  formState: boolean;
  modalState: boolean;
  id: number;
  title: string;
}

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalContext = createContext<ModalContextData>(
  {} as ModalContextData
);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [formState, setFormState] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [id, setId] = useState({} as number);
  const [title, setTitle] = useState('');

  const toggleFormState = () => {
    setFormState(!formState);
  };

  const openModal = (index: number, tool: string) => {
    setId(index);
    setTitle(tool);
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  return (
    <ModalContext.Provider
      value={{
        toggleFormState,
        openModal,
        closeModal,
        formState,
        modalState,
        id,
        title,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);

  return context;
};
