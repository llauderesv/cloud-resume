import {useEffect, useState} from 'react';

const {REACT_APP_IAM_GROOT_URL = ''} = process.env;

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

function useTrackPageView() {
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const handleOnLoadListener = async () => {
      if (isDevelopment) {
        setPageCount(123123);
        return;
      }

      try {
        const response = await fetch(REACT_APP_IAM_GROOT_URL);
        const result = await response.json();
        setPageCount(result?.count);
      } catch (error) {
        if (error instanceof SyntaxError) {
          // Unexpected token < in JSON
          console.log('There was a SyntaxError', error);
        } else {
          console.log('There was an error', error);
        }
      }
    };

    window.addEventListener('load', handleOnLoadListener);

    return () => window.removeEventListener('load', handleOnLoadListener);
  }, []);

  return pageCount;
}

export {useTrackPageView};
