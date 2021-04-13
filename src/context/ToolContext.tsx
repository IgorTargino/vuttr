/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import {
  createContext,
  ReactNode,
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
}

interface ToolContextData {
  getToolData: (name: string) => Promise<void>;
  addTool: (tool: ToolData) => Promise<void>;
  toolData: ToolData;
}

interface ToolProviderProps {
  children: ReactNode;
}

export const ToolContext = createContext<ToolContextData>(
  {} as ToolContextData
);

export default function ToolContextProvider({ children }: ToolProviderProps) {
  const [toolData, setToolData] = useState<ToolData>({} as ToolData);

  async function getToolData(name: string) {
    try {
      const { data } = await api.get(name);

      setToolData(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function addTool(tool: ToolData) {
    try {
      const { data } = await api.post(
        '/tools/',
        {
          ...tool,
        },
        {
          headers: 'Content-Type: application/json',
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ToolContext.Provider
      value={{
        getToolData,
        addTool,
        toolData,
      }}
    >
      {children}
    </ToolContext.Provider>
  );
}

export function useToolContext() {
  const context = useContext(ToolContext);

  return context;
}
