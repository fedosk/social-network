import React from "react";
import style from "../Users/Users.module.css";
import {usersPropsType, usersStatePropsType} from "../../Redux/users-reducer";
import UserImg from "../../images/userpic.png";
import axios from "axios";
import {v1} from "uuid";

type UsersPropsType = {
    usersList: Array<usersPropsType>
    pageSize: number
    totalCount: number
    currentPage: number
    onFollow: (id: string) => void
    onUnfollow: (id: string) => void
    setUsers: (users: usersPropsType[]) => void
    changePage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export class UsersC extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changePage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
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
                                        return <li onClick={() => this.onPageChanged(n)}
                                                   key={v1()}
                                                   className={this.props.currentPage === n
                                                       ? style.pageNumberItem + ' ' + style.active
                                                       : style.pageNumberItem}>{n}</li>
                                    }

                                })
                            }
                        </ul>
                    </div>
                    {this.props.usersList.map((u: usersPropsType) =>
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
                                          onClick={() => this.props.onFollow(u.id)}>follow</button>
                                : <button className={style.btn}
                                          onClick={() => this.props.onUnfollow(u.id)}>unfollow</button>}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}


