import React from 'react';
import { DataFetcher } from './components/DataFetcher';
import { LazyDataFetcher } from './components/LazyDataFetcher';

function App() {
  return (
    <div>
      <DataFetcher />
      <LazyDataFetcher />
    </div>
  );
}

export default App;
