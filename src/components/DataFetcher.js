import React from 'react';
import { useFetch } from '../hooks/useFetch';

export const DataFetcher = () => {
  const {loading, error, data, refetch} = useFetch({
    url: 'some_url',
    pollingInterval: 0,
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <ul>
        {data.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
      <button onClick={refetch}>Refetch</button>
    </>
  );
};
