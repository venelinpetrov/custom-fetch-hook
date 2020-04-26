import { useEffect, useState } from 'react';
import { fetch } from '../services/FetchService';

export const useFetch = ({ url='', pollingInterval=0 }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState();
  const doFetch = () => {
    setLoading(true);
    fetch()
      .then(res => {
        setData(res);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const refetch = () => doFetch();

  useEffect(() => {
    doFetch();

    if (pollingInterval) {
      const id = setInterval(() => {
        doFetch();
      }, pollingInterval);

      return () => clearInterval(id);
    }
  }, []);

  return {
    loading,
    error,
    data,
    refetch,
  }
};
