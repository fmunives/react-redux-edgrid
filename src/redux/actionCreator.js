import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  GET_TO_LIST,
  GET_TO_LIST_USERS
} from "./action";
import Axios from "axios";

const addToCart = id => ({
  type: ADD_TO_CART,
  id
});

const removeToCart = id => ({
  type: REMOVE_TO_CART,
  id
});

const getToList = () => dispatch => {
  Axios.get(
    "https://my-json-server.typicode.com/fmunives/dbjson-grupovg/courses"
  ).then(response => {
    return dispatch({
      type: GET_TO_LIST,
      courses: response.data
    });
  });
};

const getToListUsers = () => dispatch => {
  Axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
    return dispatch({
      type: GET_TO_LIST_USERS,
      users: response.data
    });
  });
};

export { addToCart, removeToCart, getToList, getToListUsers };
