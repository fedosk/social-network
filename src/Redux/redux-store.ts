import { combineReducers, createStore } from 'redux';
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";



let reducers = combineReducers({
    messagesPage: dialogsReducer,
    profilePage: profileReducer,
    general: sidebarReducer,
    usersPage: usersReducer,
})



const store = createStore(reducers);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
