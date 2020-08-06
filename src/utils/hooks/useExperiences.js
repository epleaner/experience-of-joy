import useSWR from 'swr';
import fetcher from '@utils/fetcher';

function useExperiences() {
  const { data, error } = useSWR('/api/experiences', fetcher, {
    refreshInterval: 3000,
  });
  return {
    isLoading: !data,
    experiences: data ? data.experiences : [],
    isError: error || (data && !data.success),
  };
}

export default useExperiences;
