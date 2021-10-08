import { SET_USER, REMOVE_USER } from "../actionTypes/userActionTypes";

export const setUser = (userDetails) => {
  return {
    type: SET_USER,
    payload: userDetails,
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};
