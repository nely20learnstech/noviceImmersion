import { Career } from './Career'
import PropTypes from 'prop-types';

export const Graduate = ({title, description, careers}) => {
  return (
    <div>
        <div>
            <h2>{title}</h2>
            <div>
                <h3>Description</h3>
                <p>{description}</p>
                <div>
                    <h3>Débouchés: </h3>
                    {careers.map((career, index) => 
                        <Career career={career} key={index} 
                    />)}
                </div>
            </div>
        </div>
    </div>
  )
}

Graduate.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    careers: PropTypes.arrayOf(PropTypes.string).isRequired
  };