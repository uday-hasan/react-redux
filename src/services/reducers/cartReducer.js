import { initialCarts } from "../constants/initialState";
import { ADD_CART, REMOVE_CART } from "../constants/cartConstant";
export const cartReducer = (state = initialCarts, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };
    case REMOVE_CART:
      // const newItems = state.carts.filter(item => )
      return {
        ...state,
        carts: state.carts.filter((item) => item.idDrink !== action.payload),
      };

    default:
      return state;
  }
};
