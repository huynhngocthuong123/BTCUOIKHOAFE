import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { courseReducer } from "./Reducers/CourseReducer";

const rootReducers = combineReducers({
    courseReducer,
});
export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))