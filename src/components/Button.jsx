import PropTypes from 'prop-types';

const Button = ({ text }) => {
  return (
    <button className="mx-4 px-[14px] py-3 mb-4 bg-[#52a350] rounded-lg text-white hover:bg-white hover:text-[#52a350]">
        { text }
    </button>
  )
}

Button.propTypes = {
    text: PropTypes.string.isRequired
};

export default Button;