import { useEffect, useState } from 'react';

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

  const refetch = () => doFetch()

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

function fetch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: Math.random() },
        { id: 2, name: Math.random() },
      ]);
    }, 2000);
    // setTimeout(() => {
    //     reject('There was an error loaing the data!');
    // }, 2000);
  });
}