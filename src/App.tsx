import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {NavBar} from './components/NavBar/NavBar';
import {Messages} from './components/Messages/Messages';
import {Profile} from './components/Profile/Profile';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {RootStateTypes} from './Redux/state';

type AppPropsType = {
    state: RootStateTypes
}

const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className={'appWrapper'}>
                <div className={'appContainer'}>
                    <Header/>
                    <NavBar state={props.state.general.friends}/>
                    <div className={'appWrapperContent'}>
                        <Route path={'/profile'}
                               render={() =>
                                   <Profile state={props.state.profilePage}/>
                               }
                        />
                        <Route path={'/messages'}
                               render={() =>
                                   <Messages state={props.state.messagesPage}/>
                               }
                        />
                        <Route path={'/news'}
                               render={() => <News/>}
                        />
                        <Route path={'/music'}
                               render={() => <Music/>}
                        />
                        <Route path={'/settings'}
                               render={() => <Settings/>}
                        />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
