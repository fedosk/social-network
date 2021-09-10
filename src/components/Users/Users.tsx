import React from "react";
import style from "../Users/Users.module.css";
import {usersPropsType} from "../../Redux/users-reducer";
import UserImg from "../../images/userpic.png";
import {v1} from "uuid";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../API/api";


type UsersPropsType = {
    usersList: Array<usersPropsType>
    pageSize: number
    totalCount: number
    currentPage: number
    followingInProgress: string[]
    onFollow: (id: string) => void
    onUnfollow: (id: string) => void
    changePage: (currentPage: number) => void
    onPageChanged: (pageNumber: number) => void
    setFollowingInProgress: (isFetching: boolean, id: string) => void
}

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let numberOfPages = []
    for (let i = 1; i < pagesCount + 1; i++) {
        numberOfPages.push(i)
    }

    const onPressFollowBtn = (id: string) => {
        props.setFollowingInProgress(true, id)
        followAPI.followUser(id)
            .then(data => {
                if (data.resultCode == 0) {
                    props.onFollow(id)
                }
                props.setFollowingInProgress(false, id)
            })
    }

    const onPressUnFollowBtn = (id: string) => {
        props.setFollowingInProgress(true, id)
        followAPI.unFollowUser(id)
            .then(data => {
                if (data.resultCode == 0) {
                    props.onUnfollow(id)
                }
                props.setFollowingInProgress(false, id)
            })
    }

    return (
        <div className={style.section}>
            <div className={style.wrapper}>
                <div className={style.pageNumberWrapper}>
                    <ul className={style.pageNumberList}>
                        {
                            numberOfPages.map((n, i) => {
                                if (i < 10) {
                                    return <li onClick={() => props.onPageChanged(n)}
                                               key={v1()}
                                               className={props.currentPage === n
                                                   ? style.pageNumberItem + ' ' + style.active
                                                   : style.pageNumberItem}>{n}</li>
                                }
                                return ''

                            })
                        }
                    </ul>
                </div>
                {props.usersList.map((u: usersPropsType) =>
                    <div className={style.userCardWrapper} key={v1()}>

                        <NavLink key={v1()} to={'/profile/' + u.id}>
                            <img className={style.userPic} src={u.photos.small != null ? u.photos.small : UserImg}
                                 alt={'userPic'}/>
                        </NavLink>

                        <div key={v1()} className={style.textWrapper}>
                            <NavLink key={v1()} to={'/profile/' + u.id}>
                                <p className={style.name}>{u.name}</p>
                            </NavLink>
                            <p className={style.location}>{u.uniqueUrlName}</p>
                            <p className={style.status}>{u.status}</p>
                        </div>
                        {!u.followed
                            ? <button className={style.btn}
                                      disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => onPressFollowBtn(u.id)}>follow</button>
                            : <button className={style.btn}
                                      disabled={props.followingInProgress.some(id => id === (u.id))}
                                      onClick={() => onPressUnFollowBtn(u.id)}>unfollow</button>}
                    </div>
                )}
            </div>
        </div>
    );
};



