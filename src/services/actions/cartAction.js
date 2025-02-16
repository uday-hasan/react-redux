import { ADD_CART, REMOVE_CART } from "../constants/cartConstant";

const addCartAction = (item) => ({
  type: ADD_CART,
  payload: item,
});

const removeCartAction = (id) => ({
  type: REMOVE_CART,
  payload: id,
});

export { addCartAction, removeCartAction };
