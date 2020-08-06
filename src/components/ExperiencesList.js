import PropTypes from 'prop-types';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ExperiencesList = ({ experiences }) => {
  return (
    <TransitionGroup>
      {experiences
        .sort((a, b) => a.date < b.date)
        .map(({ _id, experience }) => (
          <CSSTransition key={_id} timeout={500} classNames='item'>
            <p className='m-8 my-10 md:my-16 text-2xl md:text-4xl'>
              {experience}
            </p>
          </CSSTransition>
        ))}
    </TransitionGroup>
  );
};

ExperiencesList.propTypes = {
  experiences: PropTypes.arrayOf({
    _id: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
  }).isRequired,
};

ExperiencesList.defaultProps = {
  experiences: [],
};

export default ExperiencesList;
