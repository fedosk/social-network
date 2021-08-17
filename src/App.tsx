import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {NavBar} from './components/NavBar/NavBar';
import {Messages} from './components/Messages/Messages';
import {Profile} from './components/Profile/Profile';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {AtionCreatorType, StorePropsType} from './Redux/store';
import {MessagesContainer} from "./components/Messages/MessagesContainer";

type AppPropsType = {
    store: StorePropsType
}

const App: React.FC<AppPropsType> = (props) => {

    const store = props.store
    const state = props.store.getState()

    return (
        <div className={'appWrapper'}>
            <div className={'appContainer'}>
                <Header/>
                <NavBar navBar={state.general}/>
                <div className={'appWrapperContent'}>
                    <Route path={['/profile','/social-network']}
                           render={() => <Profile store={store}/>}/>
                    <Route path={'/messages'}
                           render={() => <MessagesContainer store={store}/>}/>
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
