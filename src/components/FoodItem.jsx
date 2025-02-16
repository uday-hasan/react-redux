const FoodItem = ({ item, handleClick, className, disabled, text }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <img className="max-w-[300px] " src={item.strDrinkThumb} />
      <p className="font-semibold text-xl ">{item.strDrink}</p>
      <button
        disabled={disabled}
        onClick={handleClick}
        className={`${className}`}
      >
        {text}
      </button>
    </div>
  );
};

import PropTypes from "prop-types";

FoodItem.propTypes = {
  item: PropTypes.shape({
    strDrinkThumb: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
  className: (PropTypes.string.isRequired = false),
  disabled: (PropTypes.bool.isRequired = false),
  text: PropTypes.string,
};

export default FoodItem;
