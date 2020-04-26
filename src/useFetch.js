import { useEffect, useState } from 'react';

export const useFetch = url => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState();

  useEffect(() => {
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
  }, []);

  return {
    loading,
    error,
    data,
  }
};

function fetch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ]);
    }, 2000);
    // setTimeout(() => {
    //     reject('There was an error loaing the data!');
    // }, 2000);
  });
}