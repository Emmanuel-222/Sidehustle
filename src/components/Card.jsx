import PropTypes from 'prop-types'

const Card = ({ data }) => {
  return (
    <div className="flex justify-center items-center flex-col text-center mt-8">
        {data.icon}
        <h4 className='text-base font-semibold'>{data.h4Text}</h4>
        <p className='text-sm text-[#2f2f2f]'>{data.pText}</p>
    </div>
  );
};

Card.propTypes = {
    data:PropTypes.shape({
        icon: PropTypes.string.isRequired,
        h4Text: PropTypes.string.isRequired,
        pText: PropTypes.string.isRequired
    }).isRequired
};

export default Card;
