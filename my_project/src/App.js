import './App.css';
import React from 'react';
import Header from "./components/Header";
import {Chats} from "./components/Chats";
import {BrowserRouter} from "react-router-dom";
import Profile from "./components/Profile";
import {Route} from "react-router";
import {green} from '@mui/material/colors';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: green[500],
        },
    },
});

function App() {

    const WrappedProfile = function (props) {
        return (<Profile {...props}/>);
    };

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter className="App">
                <Header/>
                <div className={'contentBlock'}>
                    <Route exact path={'/'} component={Chats}/>
                    <Route path={'/profile'} component={WrappedProfile}/>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
