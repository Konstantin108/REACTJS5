import '../App.css';
import React from 'react';
import {Link, Route} from "react-router-dom";
import {connect} from "react-redux";

function UserHello(props) {
    return (
        <div>Здравствуйте, {props.firstName}</div>
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

function Header(props) {
    return (
        <div className={'header'}>
            <div className={'header__userData'}>
                <UserHello firstName={props.firstName}/>
            </div>
            <div className="header__menu">
                <Route path={'/profile'}
                       children={() => <ShowLink message={<Link to={'/'}>чаты</Link>}/>}/>
                <Route path={'/'}
                       children={() => <ShowLink message={<Link to={'/profile'}>профиль</Link>}/>}/>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    const {profileReducer} = state;
    return {
        firstName: profileReducer.firstName
    }
}

export default connect(mapStateToProps)(Header);
