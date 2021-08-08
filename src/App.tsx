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
import {AtionCreatorType, StorePropsType} from './Redux/store';

type AppPropsType = {
    store: StorePropsType
    dispatch: (action: AtionCreatorType) => void
}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className={'appWrapper'}>
                <div className={'appContainer'}>
                    <Header/>
                    <NavBar navBar={state.general}/>
                    <div className={'appWrapperContent'}>
                        <Route path={'/profile'}
                               render={() => <Profile profilePage={state.profilePage} dispatch={props.dispatch}/>}/>
                        <Route path={'/messages'}
                               render={() => <Messages messagesPage={state.messagesPage} dispatch={props.dispatch}/>}/>
                        <Route path={'/news'}
                               render={() => <News/>}/>
                        <Route path={'/music'}
                               render={() => <Music/>}/>
                        <Route path={'/settings'}
                               render={() => <Settings/>}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
