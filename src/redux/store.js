import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  GET_TO_LIST,
  GET_TO_LIST_USERS
} from "./action";
import thunk from "redux-thunk";

const inicialStore = {
  cart: []
};

const inicialCourses = {
  courses: []
};

const inicialUsers = {
  users: []
};

const reducerCart = (state = inicialStore, action) => {
  if (action.type === ADD_TO_CART) {
    if (state.cart.find(buscado => buscado === action.id)) return state;
    return {
      ...state,
      cart: state.cart.concat(action.id)
    };
  }

  if (action.type === REMOVE_TO_CART) {
    return {
      ...state,
      cart: state.cart.filter(filtrado => filtrado !== action.id)
    };
  }

  return state;
};

const reducerCourses = (state = inicialCourses, action) => {
  if (action.type === GET_TO_LIST) {
    return {
      ...state,
      courses: action.courses
    };
  }
  return state;
};

const reducerUsers = (state = inicialUsers, action) => {
  if (action.type === GET_TO_LIST_USERS) {
    return {
      ...state,
      users: action.users
    };
  }
  return state;
};

export default createStore(
  combineReducers({ reducerCart, reducerCourses, reducerUsers }),
  composeWithDevTools(applyMiddleware(thunk))
);
