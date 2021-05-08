/* eslint-disable no-unused-vars */
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import api from '../services/api';

interface ToolData {
  title: string;
  link: string;
  description: string;
  tags: Array<string>;
  id: number;
}

interface ToolsContextData {
  toolData: Array<ToolData>;
  getToolsData: (url: string) => Promise<void>;
  addTool: (tool: ToolData) => Promise<void>;
  removeTool: (id: number) => Promise<void>;
  newUpdate: boolean;
}

interface ToolsProviderProps {
  children: ReactNode;
}

export const ToolsContext = createContext<ToolsContextData>(
  {} as ToolsContextData
);

export const ToolsProvider = ({ children }: ToolsProviderProps) => {
  const [toolData, setToolData] = useState([]);
  const [newUpdate, setNewUpdate] = useState(false);
  const [error, setError] = useState(null);

  const header = 'Content-Type: application/json';

  const getToolsData = useCallback(async (url: string) => {
    try {
      setError(null);
      const { data } = await api.get(`/tools${url}`);
      setToolData(data);
    } catch (errors) {
      setError(errors.message);
    }
  }, []);

  const addTool = async (tool: ToolData) => {
    try {
      setError(null);
      await api.post(
        '/tools/',
        {
          ...tool,
        },
        {
          headers: { header },
        }
      );
    } catch (errors) {
      setError(errors.message);
    } finally {
      setNewUpdate(!newUpdate);
    }
  };

  const removeTool = async (id: number) => {
    try {
      setError(null);
      await api.delete(`/tools/${id}`);
    } catch (errors) {
      setError(errors.message);
    } finally {
      setNewUpdate(!newUpdate);
    }
  };

  return (
    <ToolsContext.Provider
      value={{
        toolData,
        getToolsData,
        addTool,
        removeTool,
        newUpdate,
      }}
    >
      {children}
    </ToolsContext.Provider>
  );
};

export const useTools = () => {
  const context = useContext(ToolsContext);

  return context;
};
