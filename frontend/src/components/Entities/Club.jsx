import PropTypes from 'prop-types';

export const Club = ({logo, name, slogan, description}) => {
    return (
      <div>
        <h2>{name}</h2>
        <img src={logo} alt={name}/>
        <i>{slogan}</i>
        <p>{description}</p>
      </div>
    )
  }

Club.propTypes = {
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    slogan : PropTypes.string,
    description : PropTypes.string,
}