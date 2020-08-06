import PropTypes from 'prop-types';

const ExperiencesList = ({ experiences }) => {
  return experiences
    .sort((a, b) => a.date < b.date)
    .map(({ _id, experience }) => (
      <p key={_id} className='m-8 my-16 text-2xl md:text-4xl'>
        {experience}
      </p>
    ));
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
