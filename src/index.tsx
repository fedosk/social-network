import reportWebVitals from './reportWebVitals';
import state from './Redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, changeNeWPostText, subscribe, RootStateTypes} from './Redux/state'

const rerenderEntireTree = (state: RootStateTypes) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} changeNeWPostText={changeNeWPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state)
subscribe(rerenderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();