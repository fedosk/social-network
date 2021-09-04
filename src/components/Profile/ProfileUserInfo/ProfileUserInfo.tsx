import React from 'react';
import style from './ProfileUserInfo.module.css';
import {UserInfoPropsType} from "../../../Redux/profile-reducer";
import UserImg from "../../../images/userpic.png";

type ProfileUserInfoPropsType = {
    userInfo: UserInfoPropsType
}

export const ProfileUserInfo = (props: ProfileUserInfoPropsType) => {
    return (
        <article className={style.wrapper}>
            <div>
                <img className={style.userImg}
                     alt={'userPic'}
                     src={props.userInfo.photos.large != null ? props.userInfo.photos.large : UserImg}
                     />
            </div>
            <div className={style.infoWrapper}>
                <span className={style.name}>{props.userInfo.fullName}</span>
                <div className={style.info}>
                    <span className={style.birthDate}>{props.userInfo.aboutMe}</span>
                    <span className={style.city}>{props.userInfo.contacts.skype}</span>
                    <span className={style.education}>{props.userInfo.contacts.vk}</span>
                    <span className={style.website}>{props.userInfo.contacts.facebook}</span>
                    <span className={style.website}>{props.userInfo.contacts.email}</span>
                    <span className={style.website}>{props.userInfo.contacts.twitter}</span>
                    <span className={style.website}>{props.userInfo.contacts.instagram}</span>
                    <span className={style.website}>{props.userInfo.lookingForAJobDescription}</span>
                </div>
            </div>
        </article>
    )
}