import thunk from "redux-thunk";
import Reducer from "./Reducer/index";
import { createStore, applyMiddleware } from "redux";
const store = createStore(Reducer,applyMiddleware(thunk))
export default store