import {MESSAGE_CREATE, DECREMENT, INCREMENT, INPUT_TEXT} from "./types";

export function incrementLikes() {
    return {
        type: INCREMENT
    }
}

export function decrementLikes() {
    return {
        type: DECREMENT
    }
}

export function inputText(text) {
    return {
        type: INPUT_TEXT,
        text
    }
}

export function messageCreate(authorData, textData, id) {
    return {
        type: MESSAGE_CREATE,
        data: {authorData, textData, id}
    }
}