import {
    COMMENT_CREATE,
    COMMENT_DELETE,
    COMMENT_UPDATE,
    COMMENTS_LOAD,
    DECREMENT,
    INCREMENT,
    LOADER_DISPLAY_OFF,
    LOADER_DISPLAY_ON,
    MESSAGE_CREATE
} from "./types";

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

// export function inputText(text) {
//     return {
//         type: INPUT_TEXT,
//         text
//     }
// }

export function messageCreate(authorData, textData, id) {
    return {
        type: MESSAGE_CREATE,
        data: {authorData, textData, id}
    }
}

export function commentCreate(textCommentData, id) {
    return {
        type: COMMENT_CREATE,
        data: {textCommentData, id}
    }
}

export function commentUpdate(textCommentData, id) {
    return {
        type: COMMENT_UPDATE,
        data: {textCommentData, id}
    }
}

export function commentDelete(id) {
    return {
        type: COMMENT_DELETE,
        id
    }
}

export function loaderDisplayOn() {
    return {
        type: LOADER_DISPLAY_ON
    }
}

export function loaderDisplayOff() {
    return {
        type: LOADER_DISPLAY_OFF
    }
}

export function commentsLoad() {
    return async dispatch => {
        dispatch(loaderDisplayOn());
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
        const jsonData = await response.json();
        setTimeout(()=>{
            dispatch({
                type: COMMENTS_LOAD,
                data: jsonData
            })
            dispatch(loaderDisplayOff());
        }, 1000)


    }
}