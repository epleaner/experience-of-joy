import useSWR from 'swr';
import fetcher from '@utils/fetcher';

export default function ExperiencesPage() {
  const { error, data: response } = useSWR('/api/experiences', fetcher);

  if (!response) return <div className='centered'>loading...</div>;

  if (error || (response && !response.success))
    return <div className='centered'>💩failed to load</div>;

  return (
    <main className='p-4 md:p-8'>
      <h1 className='text-4xl md:text-6xl text-gray-400'>
        To me, joy feels like...{' '}
      </h1>
      {response.data.map(({ _id, experience }) => (
        <p key={_id} className='m-8 my-16 text-2xl md:text-4xl'>
          {experience}
        </p>
      ))}
    </main>
  );
}
