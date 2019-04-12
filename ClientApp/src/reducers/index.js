import { combineReducers } from 'redux';
import addNetPresentValueReducer from "./netpresentvalue/add";
import allNetPresentValueReducer from "./netpresentvalue/all";
import byIdNetPresentValueReducer from "./netpresentvalue/by-id";

export default combineReducers({
    addNetPresentValueReducer,
    allNetPresentValueReducer,
    byIdNetPresentValueReducer
});