import {
  GET_FOOD_FAILED,
  GET_FOOD_REQUEST,
  GET_FOOD_SUCCESS,
} from "../constants/foodConstant";

const getFood = (start, end) => async (dispatch) => {
  dispatch({ type: GET_FOOD_REQUEST });
  try {
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
    );
    const { drinks } = await res.json();

    dispatch({ type: GET_FOOD_SUCCESS, payload: drinks.slice(start, end) });
  } catch (error) {
    dispatch({ type: GET_FOOD_FAILED, payload: error.message });
  }
};
export { getFood };
