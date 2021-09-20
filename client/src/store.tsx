import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import UserReducer from "./redux/reducers/User.reducer";

const rootReducer = combineReducers({
  user: UserReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
