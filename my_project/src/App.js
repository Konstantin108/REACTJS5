import './App.css';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";

const ShowMessage = ({message, children}) => {
    return (
        <div className={'message'}>
            <div className={'message__component'}>
                {message}
            </div>
            {children}
        </div>
    )
};

function App() {
    return (
        <BrowserRouter className="App">
            <BrowserRouter/>
            <Switch>
                <Route path={'/'} exact
                       children={() => <ShowMessage message={<Link to={'/users'}>пользователи</Link>}/>}/>
                <Route path={'/users'}
                       children={() => <ShowMessage message={<Link to={'/'}>главная</Link>}/>}/>

            </Switch>
        </BrowserRouter>
    );
}

export default App;
