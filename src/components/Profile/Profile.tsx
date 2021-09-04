import React from 'react';
import {ProfileHeader} from './ProfileHeader/ProfileHeader';
import {ProfileUserInfo} from './ProfileUserInfo/ProfileUserInfo';
import {ProfileUserPosts} from './ProfileUserPosts/ProfileUserPosts';
import style from './Profile.module.css'
import {PostsDataPropsType, UserInfoPropsType} from "../../Redux/profile-reducer";
import {Preloader} from "../Preloader/Preloader";

export type ProfilePropsType = {
    userInfo: UserInfoPropsType
    postsData: Array<PostsDataPropsType>
    postText: string
    addPost: () => void
    changePostText: (text: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {

    if(props.userInfo.userId === 1) {
        return <Preloader/>
    }

    return (
        <section className={style.profileSection}>
            <div className={style.profileWrapper}>
                <ProfileHeader/>
                <ProfileUserInfo userInfo={props.userInfo}/>
                <ProfileUserPosts postsData={props.postsData}
                                  postText={props.postText}
                                  addPost={props.addPost}
                                  changePostText={props.changePostText}
                />

            </div>
        </section>
    )
}


