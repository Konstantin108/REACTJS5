import {combineReducers} from "redux";
import {profileReducer} from "./profileReducer";
import {inputReducer} from "./inputReducer";
import {messagesReducer} from "./messagesReducer";

export const rootReducer = combineReducers({
    profileReducer,
    inputReducer,
    messagesReducer
});