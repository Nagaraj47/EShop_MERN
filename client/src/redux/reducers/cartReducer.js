import Cookies from "js-cookie";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
} from "../actionTypes/cartActionTypes";

const cart = Cookies.getJSON("cartItems") || [];

const initialState = {
  cartItems: cart,
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      const productExist = state.cartItems.find(
        (item) => item._id === payload._id
      );
      if (productExist) {
        alert("Prouct is Already Exist in Cart..!");
        return state;
      }
      Cookies.set("cartItems", JSON.stringify([...state.cartItems, payload]));
      return {
        cartItems: [...state.cartItems, payload],
      };
    case REMOVE_FROM_CART:
      Cookies.set(
        "cartItems",
        JSON.stringify(state.cartItems.filter((item) => item._id !== payload))
      );
      return {
        cartItems: state.cartItems.filter((item) => item._id !== payload),
      };
    case EMPTY_CART:
      Cookies.remove("cartItems");
      return {
        cartItems: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
