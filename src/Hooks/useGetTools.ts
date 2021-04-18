import { useCallback, useState } from 'react';
import api from '../services/api';

const useGetTools = () => {
  const [toolData, setToolData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (url) => {
    try {
      setError(null);
      setLoading(true);

      const { data } = await api.get(url);

      setToolData(data);
    } catch (errors) {
      setError(errors.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { toolData, loading, error, request };
};

export default useGetTools;
