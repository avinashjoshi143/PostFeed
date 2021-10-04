import './button.style.css';
import PropTypes from 'prop-types';

export const Button = ({ name, ...otherInputProps }) => (
    <button className="button"  {...otherInputProps}  >
        {name}
    </button>
);

Button.propTypes = {
    handleclick: PropTypes.func,
    name: PropTypes.string.isRequired,
}

export default Button;