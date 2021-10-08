import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
} from "../actionTypes/cartActionTypes";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};
