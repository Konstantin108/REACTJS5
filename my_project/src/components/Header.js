import React from 'react';
import {Link, Route} from "react-router-dom";

function UserHello({name}) {
    return (
        <div>Здравствуйте, {name}</div>
    );
}

const ShowLink = ({message, children}) => {
    return (
        <div className={'header__message'}>
            <div>
                {message}
            </div>
            {children}
        </div>
    )
};

export const Header = ({name}) => {
    return (
        <div className={'header'}>
            <div className={'header__userData'}>
                <UserHello name={name}/>
            </div>
            <div className="header__menu">
                <Route path={'/chats'}
                       children={() => <ShowLink message={<Link to={'/'}>главная</Link>}/>}/>
                <Route path={'/'}
                       children={() => <ShowLink message={<Link to={'/chats'}>чаты</Link>}/>}/>
            </div>
        </div>
    );
};
