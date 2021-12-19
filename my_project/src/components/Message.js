import React, {useEffect, useState} from "react";

function Message({data}) {

    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const {authorData, textData, id} = data;

    useEffect(() => {
        if (authorData && textData) {
            setAuthor(authorData);
            setText(textData);
        }
    }, [authorData, textData]);

    return (
        <div className={'message'}>
            <div className={'message__name'}>{author}</div>
            <div className={'message__text'}>{text}</div>
        </div>
    )
}

export default Message;