import { useState } from 'react';
import api from '../services/api';

interface ToolData {
  title?: string;
  link?: string;
  description?: string;
  tags?: Array<string>;
}

const usePostTools = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const header = 'Content-Type: application/json';

  const addTool = async (tool: ToolData) => {
    try {
      setError(null);
      setLoading(true);
      await api.post(
        'tools',
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
      setLoading(false);
    }
  };

  return { addTool, error, loading };
};

export default usePostTools;
