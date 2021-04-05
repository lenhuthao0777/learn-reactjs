import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./redux";
import thunk from "redux-thunk";
const middelware = applyMiddleware(thunk);
const enhancer = compose(middelware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const store = createStore(rootReducer, enhancer);
