import { SET_USER, REMOVE_USER } from "../actionTypes/userActionTypes";
import Cookies from "js-cookie";

const userInfo = Cookies.getJSON("userinfo") || {
  name: "",
  email: "",
  id: "",
  isAdmin: false,
  isLogged: false,
};

const initialState = userInfo;

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return {
        name: payload.name,
        email: payload.email,
        id: payload.id,
        isAdmin: payload.isAdmin,
        isLogged: true,
      };

    case REMOVE_USER:
      Cookies.remove("userinfo");
      return {
        name: "",
        email: "",
        id: "",
        isAdmin: false,
        isLogged: false,
      };

    default:
      return state;
  }
};

export default userReducer;
