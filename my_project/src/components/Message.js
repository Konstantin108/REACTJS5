import '../App.css';
import React from 'react';

export const Message = ({author, message}) => {
    return (
        <div className={'message'}>
            <div className={'message__name'}>{author}</div>
            <div className={'message__text'}>{message}</div>
        </div>
    )
};