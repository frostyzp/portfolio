import { useEffect } from 'react';

const usePageTitle = (title) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    // Cleanup function to restore the previous title when component unmounts
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};

export default usePageTitle; 