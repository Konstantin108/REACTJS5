import {combineReducers} from "redux";
import {profileReducer} from "./profileReducer";
import {inputReducer} from "./inputReducer";
import {commentsReducer} from "./commentsReducer";

export const rootReducer = combineReducers({
    profileReducer,
    inputReducer,
    commentsReducer
});