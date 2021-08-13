import { createStore, combineReducers } from "redux";
import { groupState } from "../Reducer/GroupReducers";

export const configStore = () => {
  const store = createStore(
    combineReducers({ groupState }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
