# Technical questions

1. Time spent: Aprox 2 hours. If I had more time the first I would have improved is the error handling, followed by code structure. I would have also improved the UI. On the testing part, I would have tested the async part with waitFor and expect.
2. Is not a feature from the latest version of React, but the useEffect hook is super useful.
   ```sh
    useEffect(() => {
      const base64 = require('base-64');
      const headers = {'Authorization': 'Basic ' + base64.encode('user:pwd',  'Accept': 'application/json'};
      fetch('https://app-academy-neu-codechallenge.azurewebsites.net/api/2d/cut', {headers})
      .then(async response => {
        const json = await response.json();
        setData(json);
      })
      .catch(error => {
        setError(error);
      })
   ```
3. In my experience as an e-commerce frontend, with DevTools Performance and Lighthouse tools, or with WebVitals. Yes, I had to, we significatively improved performance adding lazyloaded content and reducing LCP.
4. If we had a larger amount of cutting machines, caching the response to improve the performance. It would be nice to have and endpoint to query machine details by id.