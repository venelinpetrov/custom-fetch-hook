import { useState } from 'react';
import { fetch } from '../services/FetchService';

export const useLazyFetch = ({ url='' }) => {
  const [loading, setLoading] = useState(false);
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
  const execute = () => doFetch();

  return [execute, { loading, error, data }];
};
