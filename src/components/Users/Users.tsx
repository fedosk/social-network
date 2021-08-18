import React from "react";
import style from "../Users/Users.module.css";
import {locationPropsType, usersPropsType} from "../../Redux/users-reducer";

type UsersPropsType = {
    usersList: Array<usersPropsType>
    onFollow: (id: string) => void
    onUnfollow: (id: string) => void
}

const UserCard: React.FC<usersPropsType> = (props) => {
    return (
        <div className={style.userCardWrapper}>
            <img className={style.userPic} src={props.userPic} alt={'userPic'} />
            <div className={style.textWrapper}>
                <p className={style.name}>{props.name}</p>
                <p className={style.location}>{props.location.city}, {props.location.country}</p>
                <p className={style.status}>{props.status}</p>
            </div>
            <button className={style.btn} onClick={()=>{}}>{!props.follow ? 'Follow': 'Unfollow'}</button>
        </div>
    )
}

export const Users: React.FC<UsersPropsType> = (props) => {
    let UsersCards = props.usersList.map((u:usersPropsType) => <UserCard id={u.id} follow={u.follow} name={u.name} userPic={u.userPic} status={u.status} location={u.location} key={u.id}/>)
    return (
        <div className={style.section}>
            <div className={style.wrapper}>
                {UsersCards}
            </div>
        </div>
    )
}

export default Users