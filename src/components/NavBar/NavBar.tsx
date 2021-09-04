import React from 'react';
import style from './NavBar.module.css'
import {NavLink} from 'react-router-dom';


export type FriendsPropsType = {
    id: string
    name: string
    userPic: string
}

export type GeneralPropsType = {
    friends: Array<FriendsPropsType>
}

type NavBarPropsType = {
    friendsList: GeneralPropsType
}

const Friend: React.FC<FriendsPropsType> = (props) => {
    return (
        <div className={style.friend}>
            <div className={style.friendWrapper}>
                <img src={props.userPic} alt="userPic" className={style.userPic}/>
                <span>{props.name}</span>
            </div>
        </div>
    )
}

export const NavBar: React.FC<NavBarPropsType> = (props) => {
    const friends = props.friendsList.friends.map((e: FriendsPropsType) => <Friend name={e.name} userPic={e.userPic} id={e.id} key={e.id}/>)
    return (
        <section className={style.navBar}>
            <div className={style.navBarWrapper}>
                <ul className={style.list}>
                    <li className={`${style.item} ${style.profile}`}>
                        <NavLink to={'/profile'} activeClassName={style.active}>Profile</NavLink>
                    </li>
                    <li className={`${style.item} ${style.users}`}>
                        <NavLink to={'/users'} activeClassName={style.active}>Users</NavLink>
                    </li>
                    <li className={`${style.item} ${style.messages}`}>
                        <NavLink to={'/messages'} activeClassName={style.active}>Messages</NavLink>
                    </li>
                    <li className={`${style.item} ${style.news}`}>
                        <NavLink to={'/news'} activeClassName={style.active}>News</NavLink>
                    </li>
                    <li className={`${style.item} ${style.music}`}>
                        <NavLink to={'/music'} activeClassName={style.active}>Music</NavLink>
                    </li>
                    <li className={`${style.item} ${style.settings}`}>
                        <NavLink to={'/settings'} activeClassName={style.active}>Settings</NavLink>
                    </li>
                </ul>
                <div className={style.seporator}/>
                <div className={style.friendsBarWrapper}>
                    <span>Friends</span>
                    <div className={style.friend}>
                        {friends}
                    </div>
                </div>
            </div>


        </section>
    )
}