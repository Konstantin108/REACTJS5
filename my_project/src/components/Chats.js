import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Message from "./Message";
import uniqid from "uniqid";
import {messageCreate} from "../redux/actions";
import List from "./List";
import {TextField, Typography} from "@mui/material";

function Chats(props) {

    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const messages = useSelector(state => {
        const {messagesReducer} = state;
        return messagesReducer.messages;
    });
    const dispatch = useDispatch();
    const handleInput = (e) => {
        setAuthor(e.target.value);

    }
    const handleInput2 = (e) => {

        setText(e.target.value);
    }
    const handleSubmit = (e) => {
        if (author && text) {
            e.preventDefault();
            const id = uniqid();
            dispatch(messageCreate(author, text, id));
            setAuthor('');
            setText('');
        } else {
            e.preventDefault();
            alert('Оба поля должны быть заполнены!')
        }
    }

    useEffect(() => {
        if (
            messages.length >= 1 &&
            messages[messages.length - 1].authorData !== "Бот помощник"
        ) {
            const name = messages[messages.length - 1].authorData
            setTimeout(() => {
                const author = 'Бот помощник';
                const text = `Здравствуйте, ${name}! Я уже работаю над решением вашего вопроса`;
                const id = uniqid();
                dispatch(messageCreate(author, text, id));
            }, 2000);
        }
    }, [dispatch, messages]);

    return (
        <div>
            <div className={'main'}>
                <div className={'listContainer'}>
                    <Typography variant="h3" component="h3">Чаты</Typography>
                    <List/>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className={'container__block'}>
                            <div className={'container__input'}>
                                <TextField type="text"
                                           autoFocus
                                           style={{width: 200}}
                                           placeholder="введите ваше имя"
                                           variant="filled"
                                           size="small"
                                           value={author}
                                           onChange={handleInput}
                                />
                            </div>
                            <div className={'container__input'}>
                                <TextField type="text"
                                           autoFocus
                                           style={{width: 200}}
                                           placeholder="введите ваше имя"
                                           variant="filled"
                                           size="small"
                                           value={text}
                                           onChange={handleInput2}
                                />
                            </div>
                            <Typography variant="h6" component="h6">Нажми ENTER для отправки сообщения</Typography>
                        </div>
                        <input type="submit" hidden/>
                    </form>
                    {!!messages.length && messages.map(res => {
                        return <Message key={res.id} data={res}/>
                    })}
                </div>
            </div>
        </div>

    )
}

export default Chats;