import '../App.css';
import React, {useEffect, useState} from 'react';
import {TextField, Typography} from "@mui/material";
import List from "./List";
import {Message} from "./Message";

export const Chats = (props) => {

    const [messageList, setMessageList] = useState([]);
    const [author, setAuthor] = useState("");
    const [message, setMessage] = useState("");
    const [showMessage, setShowMessage] = useState(false);

    function addNewMessage() {
        setMessageList((prev) => [...prev, {author: author, message: message}]);
        setAuthor("");
        setMessage("");
        setShowMessage(true);
    }

    useEffect(() => {
        if (
            messageList.length >= 1 &&
            messageList[messageList.length - 1].author !== "Бот помощник"
        ) {
            let name = messageList[messageList.length - 1].author
            setTimeout(() => {
                setMessageList([
                    ...messageList,
                    {
                        author: "Бот помощник",
                        message: `Здравствуйте, ${name}! Я уже работаю над решением вашего вопроса`
                    },
                ]);
            }, 2000);
        }
    }, [messageList]);

    return (
        <div>
            <div className={'main'}>
                <div className={'listContainer'}>
                    <Typography variant="h3" component="h3">Чаты</Typography>
                    <List/>
                </div>
                <div className={'container'}>
                    <div className={'card chat-app'}>
                        <div className={'chat'}>
                            <div className={'chat-message clearfix'}>
                                <div className={'container__block'}>
                                    <div className={'container__input'}>
                                        <TextField type="text"
                                                   autoFocus
                                                   value={author}
                                                   name="author"
                                                   style={{width: 200}}
                                                   placeholder="введите ваше имя"
                                                   variant="filled"
                                                   size="small"
                                                   onChange={(e) => {
                                                       setAuthor(e.target.value);
                                                   }}
                                        />
                                    </div>
                                    <div className={'container__input'}>
                                        <TextField type="text"
                                                   value={message}
                                                   name="message"
                                                   style={{width: 360}}
                                                   placeholder="введите сообщение"
                                                   variant="filled"
                                                   size="small"
                                                   onChange={(e) => {
                                                       setMessage(e.target.value);
                                                   }}
                                        />
                                    </div>
                                    <div className={'input-group-prepend'}>
                                        <button
                                            type="submit"
                                            className={'container__btn'}
                                            onClick={addNewMessage}
                                        >
                                            отправить
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={'chat-history'}>
                                <ul className={'m-b-0'}>
                                    {showMessage
                                        ? messageList.map(({message, author}, i) => (
                                            <Message key={i} message={message} author={author}/>
                                        ))
                                        : ""}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};