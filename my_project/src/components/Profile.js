import '../App.css';
import React from 'react';
import {Typography} from "@mui/material";
import {connect} from "react-redux";
import Title from "./Title"
import {decrementLikes, incrementLikes} from "../redux/actions";

function Profile(props) {

    return (
        <div>
            <Typography variant="h3" component="h3">Мой профиль</Typography>
            <Title />
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
    const {profileReducer} = state;
    return {
        firstName: profileReducer.firstName,
        lastName: profileReducer.lastName,
        likes: profileReducer.likes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementLikes: () => dispatch(incrementLikes()),
        onDecrementLikes: () => dispatch(decrementLikes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

