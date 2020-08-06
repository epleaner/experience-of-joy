import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import useExperiences from '@utils/hooks/useExperiences';
import Error from '@components/Error';
import BackArrow from '@components/BackArrow';
import ExperiencesList from '@components/ExperiencesList';

const ExperiencesPage = ({ pageTransitionReadyToEnter }) => {
  const { isLoading, isError, experiences } = useExperiences();

  useEffect(() => {
    if (!isLoading) pageTransitionReadyToEnter();
  }, [isLoading]);

  if (isLoading) return null;

  if (isError) return <Error />;

  return (
    <main className='p-4 md:p-8'>
      <nav>
        <Link href='/'>
          <a>
            <BackArrow />
          </a>
        </Link>
      </nav>
      <h1 className='text-4xl md:text-6xl text-gray-400 mt-8'>
        To me, joy feels like...{' '}
      </h1>
      <ExperiencesList {...{ experiences }} />
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
