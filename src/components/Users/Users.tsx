import React from "react";
import style from "../Users/Users.module.css";
import {usersPropsType} from "../../Redux/users-reducer";
import UserImg from "../../images/userpic.png";
import {v1} from "uuid";

type UsersPropsType = {
    usersList: Array<usersPropsType>
    pageSize: number
    totalCount: number
    currentPage: number
    onFollow: (id: string) => void
    onUnfollow: (id: string) => void
    changePage: (currentPage: number) => void
    onPageChanged: (pageNumber: number) => void
}

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let numberOfPages = []
    for (let i = 1; i < pagesCount + 1; i++) {
        numberOfPages.push(i)
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

                            })
                        }
                    </ul>
                </div>
                {props.usersList.map((u: usersPropsType) =>
                    <div key={v1()} className={style.userCardWrapper}>
                        <img className={style.userPic} src={u.photos.small != null ? u.photos.small : UserImg}
                             alt={'userPic'}/>
                        <div key={v1()} className={style.textWrapper}>
                            <p className={style.name}>{u.name}</p>
                            <p className={style.location}>{u.uniqueUrlName}</p>
                            <p className={style.status}>{u.status}</p>
                        </div>
                        {!u.followed
                            ? <button className={style.btn}
                                      onClick={() => props.onFollow(u.id)}>follow</button>
                            : <button className={style.btn}
                                      onClick={() => props.onUnfollow(u.id)}>unfollow</button>}
                    </div>
                )}
            </div>
        </div>
    );
}



