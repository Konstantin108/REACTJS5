import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {commentDelete, commentUpdate} from "../redux/actions";

function Comment({data}) {
    const [text, setCommentText] = useState('');
    const {textCommentData, id} = data;
    const dispatch = useDispatch();

    useEffect(() => {
        if (textCommentData) {
            setCommentText(textCommentData);
        }
    }, [textCommentData]);

    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(commentUpdate(textCommentData, id));
    }

    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(commentDelete(id));
    }

    const handleInput = (e) => {
        setCommentText(e.target.value);
    }

    return (
        <form onSubmit={handleUpdate}>
            <div className="deck-wrap">
                <i className="far fa-times-circle cross" onClick={handleDelete}></i>
                <div className="deck">
                    <div className="card">
                        <input className="cardFooter widthInput" type="text" value={text} onChange={handleInput}/>
                    </div>
                </div>
            </div>
            <input type="submit" hidden/>
        </form>
    )
}

export default Comment;