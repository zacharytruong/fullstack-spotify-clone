export default function fetcher(url: string, data = undefined) {
  return fetch(`${window.location.origin}/api/${url}`, {
    credentials: 'include',
    method: data ? 'POST' : 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}
