import React, {useEffect, useState} from 'react';
import {Header} from "./components/Header";
import {Chats} from "./components/Chats";
import {BrowserRouter} from "react-router-dom";
import {Profile} from "./components/Profile";
import {Route} from "react-router";
import {Message} from "./components/Message";
import {green} from '@mui/material/colors';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import List from './components/List';

const theme = createTheme({
    palette: {
        primary: {
            main: green[500],
        },
    },
});

function App() {

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

    const name = useState('Konstantin');

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter className="App">
                <Header name={name}/>
                <Route exact path={'/'} component={Profile}/>
                <Route path={'/chats'} component={Chats}/>
                <div className={'container'}>
                    <div className={'card chat-app'}>
                        <div className={'chat'}>
                            <div className={'chat-history'}>
                                <ul className={'m-b-0'}>
                                    {showMessage
                                        ? messageList.map(({message, author}, i) => (
                                            <Message key={i} message={message} author={author}/>
                                        ))
                                        : ""}
                                </ul>
                            </div>
                            <div className={'chat-message clearfix'}>
                                <div className={'input-group mb-0'}>
                                    <input type="text"
                                           autoFocus
                                           value={author}
                                           name="author"
                                           className={'name-from form-control'}
                                           style={{width: "20%"}}
                                           placeholder="введите ваше имя"
                                           onChange={(e) => {
                                               setAuthor(e.target.value);
                                           }}
                                    />
                                    <input type="text"
                                           value={message}
                                           name="message"
                                           className={'message-from form-control'}
                                           style={{width: "60%"}}
                                           placeholder="введите сообщение"
                                           onChange={(e) => {
                                               setMessage(e.target.value);
                                           }}
                                    />
                                    <div className={'input-group-prepend'}>
                                        <button
                                            type="submit"
                                            className={'btn btn-success'}
                                            onClick={addNewMessage}
                                        >
                                            отправить
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'listContainer'}>
                    <List/>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
