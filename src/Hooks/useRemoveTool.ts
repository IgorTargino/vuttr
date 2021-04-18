import { useState } from 'react';
import api from '../services/api';

const useRemoveTool = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const removeTool = (id: number) => {
    try {
      setError(null);
      setLoading(true);

      api.delete(`tools/${id}`);
    } catch (errors) {
      setError(errors.message);
    } finally {
      setLoading(false);
    }
  };

  return { removeTool, error, loading };
};

export default useRemoveTool;
