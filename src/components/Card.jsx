import PropTypes from 'prop-types'

const Card = ({ data }) => {
  return (
    <div className="min-w-12 flex justify-center items-center flex-col text-center rounded-2xl p-4">
        {data.icon}
        <h4 className='font-semibold font-mono text-[18px]'>{data.h4Text}</h4>
        <p className='text-sm text-[#2f2f2f] font-mono text-wrap'>{data.pText}</p>
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
