import {DECREMENT, INCREMENT} from "./types";

const initialState = {
    firstName: 'Konstantin',
    lastName: 'Petrov',
    likes: 0
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                likes: state.likes + 1
            }
        case DECREMENT:
            return {
                ...state,
                likes: state.likes - 1
            }

        default:
            return state;
    }
}