import {MESSAGE_CREATE} from "./types";

const initialState = {
    messages: []
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case MESSAGE_CREATE:
            return {
                ...state,
                messages: [...state.messages, action.data]
            }

        default:
            return state;
    }
}