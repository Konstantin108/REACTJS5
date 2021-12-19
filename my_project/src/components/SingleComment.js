import {useEffect, useState} from "react";

function SingleComment({data}) {

    const [commentText, setCommentText] = useState('');
    const {text, id} = data;

    useEffect(() => {
        if (text) {
            setCommentText(text);
        }
    }, [text]);

    return (
        // <form className={'comments-item'}>
        //     <div className={'comments-item-delete'}>&times;</div>
        //
        //     <input type="submit" hidden/>
        //
        // </form>
        <div>
            <h2>{commentText}</h2>
        </div>
    )
}

export default SingleComment;