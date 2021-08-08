import { combineReducers, createStore } from 'redux';
import prosfileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    messagesPage: dialogsReducer,
    profilePage: prosfileReducer,
    general: sidebarReducer,
})

const store = createStore<any, any, any, any>(reducers);


export default store;
