import React from 'react';
import api from '../services/api';

interface ToolData {
  title?: string;
  link?: string;
  description?: string;
  tags?: Array<string>;
}

const usePostTools = () => {
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

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
      setLoading(false);
    } catch (errors) {
      setError(errors.message);
    }
  };

  return { addTool, error, loading };
};

export default usePostTools;
