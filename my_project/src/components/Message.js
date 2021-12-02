import React from 'react';

export const Message = ({author, message}) => {
    return (
        <div>
            <h1>{author}</h1>
            <h2>{message}</h2>
        </div>
    )
};