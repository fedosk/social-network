import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {Profile} from './components/Profile/Profile';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import MessagesContainer from "./components/Messages/MessagesContainer";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App: React.FC = (props) => {

    return (
        <div className={'appWrapper'}>
            <div className={'appContainer'}>
                <Header/>
                <NavBarContainer/>
                <div className={'appWrapperContent'}>
                    <Route path={['/profile','/social-network']}
                           render={() => <Profile/>}/>
                    <Route path={'/messages'}
                           render={() => <MessagesContainer/>}/>
                    <Route path={'/news'}
                           render={() => <News/>}/>
                    <Route path={'/music'}
                           render={() => <Music/>}/>
                    <Route path={'/users'}
                           render={() => <UsersContainer/>}/>
                    <Route path={'/settings'}
                           render={() => <Settings/>}/>
                </div>
            </div>
        </div>
    )
}

export default App;
