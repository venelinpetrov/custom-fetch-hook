## Fetch utilities for data-driven react apps

Inspired by [Apollo GraphQL](https://www.apollographql.com/docs/react/v3.0-beta/data/queries/) client. The terminology is exactly the same except, insted of "useQuery" I use "useFetch".

In data-driven applications, it is the data that is in charge of everything (hence *data-driven*). So it will be beneficial your data fetching APIs to provide some tools to actually work with this data, keeping your components free of fetch logic and making it easy to update their state based on the data fetch status.

### API

From data perspective, your UI can end up in 3 states: `loading`, `error` or `success`, where the `success` state is represented by the data itself. The operations you can perform from fetching perspective are, of course, `fetch` (eager), `re-fetch` (lazy) and `poll`.

- `useFetch` (see Example in src/components/DataFetcher.js)

```jsx
const {loading, error, data, refetch} = useFetch({
  url: 'some_url',
  pollingInterval: 1000,
});
```

- `useLazyFetch` (see example in src/components/LazyDataFetcher.js)

```jsx
const [fetch, {loading, error, data}] = useLazyFetch({
  url: 'some_url',
});
```
