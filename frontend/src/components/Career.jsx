import PropTypes from 'prop-types';

export const Career = ({career}) => {
  return (
    <div>{career}</div>
  )
}

Career.propTypes = {
    career: PropTypes.string.isRequired,
  };
