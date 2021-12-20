import {combineReducers} from "redux";
import {profileReducer} from "./profileReducer";
// import {inputReducer} from "./inputReducer";
import {messagesReducer} from "./messagesReducer";
import {commentsReducer} from "./commentsReducer";
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers({
    profileReducer,
    // inputReducer,
    messagesReducer,
    commentsReducer,
    appReducer
});