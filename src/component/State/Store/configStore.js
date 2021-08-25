import { createStore, combineReducers } from "redux";
import { groupState } from "../Reducer/GroupReducers";
import { empReducer } from "../Reducer/EmpDetailsReducer";

export const configStore = () => {
  const store = createStore(
    combineReducers({ groupState, empReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
