import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import MessagesContainer from "./components/Messages/MessagesContainer";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App: React.FC = (props) => {
    return (
        <div className={'appWrapper'}>
            <div className={'appContainer'}>
                <HeaderContainer/>
                <NavBarContainer/>
                <div className={'appWrapperContent'}>
                    <Route path={['/profile/:userId?','/social-network']}
                           render={() => <ProfileContainer/>}/>
                    <Route path={'/users'}
                           render={() => <UsersContainer/>}/>
                    <Route path={'/messages'}
                           render={() => <MessagesContainer/>}/>
                    <Route path={'/news'}
                           render={() => <News/>}/>
                    <Route path={'/music'}
                           render={() => <Music/>}/>
                    <Route path={'/settings'}
                           render={() => <Settings/>}/>
                </div>
            </div>
        </div>
    )
}

export default App;
