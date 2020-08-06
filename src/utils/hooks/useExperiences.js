import useSWR from 'swr';
import fetcher from '@utils/fetcher';

function useExperiences() {
  const { data, error } = useSWR('/api/experiences', fetcher);
  return {
    isLoading: !data,
    experiences: data ? data.data : [],
    isError: error || (data && !data.success),
  };
}

export default useExperiences;
