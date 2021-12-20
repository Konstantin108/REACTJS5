import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Comment from "./Comment";
import uniqid from "uniqid";
import {TextField, Typography} from "@mui/material";
import {commentCreate, commentsLoad} from "../redux/actions"
import Spin from "./Spin";

function Comments(props) {

    const [text, setCommentText] = useState('');
    const comments = useSelector(state => {
        const {commentsReducer} = state;
        return commentsReducer.comments;
    });
    const dispatch = useDispatch();
    const handleInput = (e) => {
        setCommentText(e.target.value);
    }
    const handleSubmit = (e) => {
        if (text) {
            e.preventDefault();
            const id = uniqid();
            dispatch(commentCreate(text, id));
            // alert(`ПОЛУЧАЕМ ТЕСКТ: ${text} и ID: ${id}`);
            setCommentText('');
        } else {
            e.preventDefault();
            alert('Поле не должно быть пустым')
        }
    }

    useEffect(() => {
        dispatch(commentsLoad());
    }, [dispatch])

    return (
        <div className={'commentsMain'}>
            <Typography variant="h3" component="h3">Комментарии</Typography>
            <form onSubmit={handleSubmit} className={'commentForm'}>
                <TextField type="text"
                           autoFocus
                           style={{width: 800}}
                           placeholder="введите комментарий"
                           variant="filled"
                           size="small"
                           value={text}
                           onChange={handleInput}
                />
                <input type="submit" hidden/>
            </form>
            <div className={'center'}>
                <Spin/>
            </div>
            {!!comments.length && comments.map(res => {
                return <Comment key={res.id} data={res}/>
            })}
        </div>
    )
}

export default Comments;