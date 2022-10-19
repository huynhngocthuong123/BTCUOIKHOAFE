import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import './Reducers/KHReducer.js'
import { KHReducer } from "./Reducers/KHReducer.js";
import { DMKHReducer } from "./Reducers/DMKHReducer.js"
import { NDReducer } from "./Reducers/NDReducer.js"
import { courseReducer } from './Reducers/CourseReducer.js'
const rootReducers = combineReducers({
    KHReducer,
    DMKHReducer,
    NDReducer,
    courseReducer,
});
export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))