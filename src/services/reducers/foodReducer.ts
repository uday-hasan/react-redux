import { initialFoods } from "../constants/initialState";
import {
  GET_FOOD_FAILED,
  GET_FOOD_REQUEST,
  GET_FOOD_SUCCESS,
  SET_PAGINATION,
} from "../constants/foodConstant";
export const foodReducer = (state = initialFoods, action) => {
  switch (action.type) {
    case SET_PAGINATION:
      if (state.page === action.payload) return state;
      return {
        ...state,
        page: action.payload,
      };
    case GET_FOOD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_FOOD_SUCCESS:
      return {
        ...state,
        totalPage: Math.ceil(action.payload.length / state.foodPerPage),
        isLoading: false,
        foods: action.payload,
      };
    case GET_FOOD_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        foods: [],
      };

    default:
      return state;
  }
};
