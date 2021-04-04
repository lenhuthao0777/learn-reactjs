import { combineReducers } from "redux";
import { CartReducer } from "./CartReducer";
import {ColorReducer} from "./ColorReducer"
import {TodoReducer} from "./TodoReducer"
export const rootReducer = combineReducers({
	CartReducer,
	ColorReducer,
	TodoReducer
});
