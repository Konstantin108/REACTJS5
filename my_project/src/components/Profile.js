import '../App.css';
import React from 'react';
import {Typography} from "@mui/material";
import {connect} from "react-redux";

function Profile(props) {

    return (
        <div>
            <Typography variant="h3" component="h3">Мой профиль</Typography>
            <img src="https://placekitten.com/g/500/500" alt="avatar" className={'avatar'}/>
            <div>
                <button className={'btnOnProfile'} onClick={props.onIncrementLikes}>
                    <i className="far fa-thumbs-up"/> нравится
                </button>
                <span><i className="far fa-heart"/> {props.likes}</span>
                <button className={'btnOnProfile'} onClick={props.onDecrementLikes}>
                    <i className="far fa-thumbs-down"/> не нравится
                </button>
            </div>
            <div>
                <span>Фамилия: </span><span>{props.firstName}</span>
                <div/>
                <span>Имя: </span><span>{props.lastName}</span>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        firstName: state.firstName,
        lastName: state.lastName,
        likes: state.likes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementLikes: () => {
            const action = {type: 'INCREMENT'};
            dispatch(action);
        },
        onDecrementLikes: () => {
            const action = {type: 'DECREMENT'};
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

