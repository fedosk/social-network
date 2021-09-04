import React from "react";
import style from "../Users/Users.module.css";
import {usersPropsType} from "../../Redux/users-reducer";
import UserImg from "../../images/userpic.png";
import {v1} from "uuid";
import {NavLink} from "react-router-dom";
import axios from "axios";


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
                                      onClick={() => {
                                          axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                              {},
                                              {
                                                  withCredentials: true,
                                                  headers: {
                                                      "API-KEY": "0cacf017-a2b3-4867-b5f3-0ddb61c5eaf8"
                                                  }
                                              })
                                              .then(response => {
                                                  if (response.data.resultCode == 0) {
                                                      props.onFollow(u.id)
                                                  }
                                              })
                                      }}>follow</button>
                            : <button className={style.btn}
                                      onClick={() => {
                                          axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                              {
                                                  withCredentials: true,
                                                  headers: {
                                                      "API-KEY": "0cacf017-a2b3-4867-b5f3-0ddb61c5eaf8"
                                                  }
                                              })
                                              .then(response => {
                                                  if (response.data.resultCode == 0) {
                                                      props.onUnfollow(u.id)
                                                  }
                                              })
                                      }}>unfollow</button>}
                    </div>
                )}
            </div>
        </div>
    );
};



