import React from 'react';
import style from './NavBar.module.css'
import {NavLink} from 'react-router-dom';
import {FriendsPropsType} from '../../Redux/state';

type NavBarPropsType = {
    state: Array<FriendsPropsType>
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
    const friends = props.state.map((e: FriendsPropsType) => <Friend name={e.name} userPic={e.userPic} id={e.id}/>)
    return (
        <section className={style.navBar}>
            <div className={style.navBarWrapper}>
                <ul className={style.list}>
                    <li className={`${style.item} ${style.profile}`}>
                        <NavLink to={'/profile'} activeClassName={style.active}>Profile</NavLink>
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
                <div className={style.seporator}></div>
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