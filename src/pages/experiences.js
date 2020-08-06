import { useEffect } from 'react';
import PropTypes from 'prop-types';

import useExperiences from '@utils/hooks/useExperiences';
import Error from '@components/Error';

const ExperiencesPage = ({ pageTransitionReadyToEnter }) => {
  const { isLoading, isError, experiences } = useExperiences();

  useEffect(() => {
    if (!isLoading) pageTransitionReadyToEnter();
  }, [isLoading]);

  if (isLoading) return null;

  if (isError) return <Error />;

  return (
    <main className='p-4 md:p-8'>
      <h1 className='text-4xl md:text-6xl text-gray-400'>
        To me, joy feels like...{' '}
      </h1>
      {experiences.map(({ _id, experience }) => (
        <p key={_id} className='m-8 my-16 text-2xl md:text-4xl'>
          {experience}
        </p>
      ))}
    </main>
  );
};

ExperiencesPage.pageTransitionDelayEnter = true;

ExperiencesPage.propTypes = {
  pageTransitionReadyToEnter: PropTypes.func,
};

ExperiencesPage.defaultProps = {
  pageTransitionReadyToEnter: () => {},
};

export default ExperiencesPage;
