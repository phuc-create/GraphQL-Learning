import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import MoneyReducer from "./redux/reducers/Money.reducer";
import UserReducer from "./redux/reducers/User.reducer";


const rootReducer = combineReducers({
  user: UserReducer,
  money: MoneyReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
