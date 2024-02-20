import { useState, useEffect, useRef } from 'react';

type FETCH_STATUS = 'pending' | 'resolved' | 'failed';

type FetchParams = {
  url: string,
  options?: RequestInit
}

export default function useFetch<T = unknown> (fetchParams: string | string[] | FetchParams | FetchParams[]) {
  const [fetchStatus, setFetchStatus] = useState<FETCH_STATUS>('pending');
  const [data, setData] = useState<T | null>(null);
  const cancelRequest = useRef<boolean>(false);

  useEffect(() => {
    (async () => {
      setFetchStatus('pending');

      const getFetch = (fetchParam: string | FetchParams ) => {
        let url, options = {};
          if (typeof fetchParam === 'string') {
            url = fetchParam;
          } else {
            url = fetchParam.url;
            options = fetchParam.options || {};
          }
          return fetch(url, options);
      };

      try {
        let responseJson;
        if (Array.isArray(fetchParams)) {
          const fetchArr = fetchParams.map((fetchParam: string | FetchParams) => getFetch(fetchParam));
          const responseArr = await Promise.all(fetchArr);
          responseJson = await Promise.all(responseArr.map((response) => response.json()));
        } else {
          const response = await getFetch(fetchParams);
          if (!response.ok) throw new Error('Response status is not ok');
          responseJson = await response.json();
        }

        if (!cancelRequest.current) {
          setData(responseJson);
          setFetchStatus('resolved');
        }

      } catch {
        if (!cancelRequest.current) {
          setData(null);
          setFetchStatus('failed');
        }
      }

      return () => {
        cancelRequest.current = true;
      }
    })();
  }, [fetchParams]);

  return { data, fetchStatus };
}