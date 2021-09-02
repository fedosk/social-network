import React from "react";
/*
import style from "../Users/Users.module.css";
import {usersPropsType} from "../../Redux/users-reducer";
import {v1} from "uuid";
import UserImg from "../../images/userpic.png";
import axios from "axios";

type UsersPropsType = {
    usersList: Array<usersPropsType>
    onFollow: (id: string) => void
    onUnfollow: (id: string) => void
    showMore: (users: usersPropsType[]) => void
}

type usersCardPropsType = usersPropsType & {
    onFollow: (id: string) => void
    onUnfollow: (id: string) => void
}

const users: Array<usersPropsType> = [

    {
        id: v1(),
        follow: true,
        name: 'Sergej Orda',
        userPic: UserImg,
        status: 'I\'m looking for a job',
        location: {city: 'Minsk', country: 'Belarus'}
    },
    {
        id: v1(),
        follow: false,
        name: 'Danil Pleshko',
        userPic: UserImg,
        status: 'I\'m looking for a job',
        location: {city: 'Minsk', country: 'Belarus'}
    },
    {
        id: v1(),
        follow: false,
        name: 'Anton Kasian',
        userPic: UserImg,
        status: 'I\'m looking for a job',
        location: {city: 'Minsk', country: 'Belarus'}
    },
    {
        id: v1(),
        follow: false,
        name: 'Ivan Ilkovskiy',
        userPic: UserImg,
        status: 'I\'m looking for a job',
        location: {city: 'Minsk', country: 'Belarus'}
    }
]

const UserCard: React.FC<usersCardPropsType> = (props) => {
    return (
        <div className={style.userCardWrapper}>
            <img className={style.userPic} src={props.userPic != null ? props.userPic : UserImg} alt={'userPic'}/>
            <div className={style.textWrapper}>
                <p className={style.name}>{props.name}</p>
                <p className={style.location}>{props.location?.city}, {props.location?.country}</p>
                <p className={style.status}>{props.status}</p>
            </div>
            {!props.follow
                ? <button className={style.btn} onClick={() => props.onFollow(props.id)}>follow</button>
                : <button className={style.btn} onClick={() => props.onUnfollow(props.id)}>unfollow</button>}
        </div>
    )
}

export const Users: React.FC<UsersPropsType> = (props) => {
    let UsersCards = props.usersList.map((u: usersPropsType) =>
        <UserCard id={u.id}
                  follow={u.follow}
                  name={u.name}
                  userPic={u.userPic}
                  status={u.status}
                  location={u.location} key={u.id}
                  onFollow={props.onFollow}
                  onUnfollow={props.onUnfollow}

        />)

    const getUsers = () => {
        if (props.usersList.length === 4) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(respnse => {
                    props.showMore(respnse.data.items)
                })
        }
    }

    return (
        <div className={style.section}>
            <div className={style.wrapper}>
                {UsersCards}
                <button className={`${style.btn} ${style.showMore}`} onClick={getUsers}>Show More</button>
            </div>
        </div>
    )
}

export default Users*/
