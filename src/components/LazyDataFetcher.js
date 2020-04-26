import React from 'react';
import { useLazyFetch } from '../hooks/useLazyFetch';

export const LazyDataFetcher = () => {
const [fetch, {loading, error, data}] = useLazyFetch({
  url: 'some_url',
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
        {data && data.map(item => <li key={item.id}>{item.name}</li>)}
        {!data && <div>No data yet</div>}
      </ul>
      <button onClick={fetch}>Fetch</button>
    </>
  );
};
