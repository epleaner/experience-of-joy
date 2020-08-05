import useSWR from 'swr';
import fetcher from '@utils/fetcher';

export default function ExperiencesPage({ experiences }) {
  const { error, data: response } = useSWR('/api/experiences', fetcher);

  if (!response) return <div>loading...</div>;

  if (error || (response && !response.success))
    return <div>failed to load</div>;

  return (
    <div>
      experiences:{' '}
      {response.data.map(({ _id, experience }) => (
        <p key={_id}>{experience}</p>
      ))}
      !
    </div>
  );
}
