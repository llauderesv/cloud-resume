import {useEffect} from 'react';

function useTrackPageView() {
  useEffect(() => {
    const handleOnLoadListener = () => {
      console.log('Hello World');
    };

    window.addEventListener('load', handleOnLoadListener);

    return () => window.removeEventListener('load', handleOnLoadListener);
  }, []);
}

export {useTrackPageView};
