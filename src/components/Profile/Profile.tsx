import React from 'react';
import {ProfileHeader} from './ProfileHeader/ProfileHeader';
import {ProfileUserInfo} from './ProfileUserInfo/ProfileUserInfo';
import {ProfileUserPosts} from './ProfileUserPosts/ProfileUserPosts';
import style from './Profile.module.css'
import {StorePropsType} from '../../Redux/store';

type ProfilePropsType = {
    store: StorePropsType
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <section className={style.profileSection}>
            <div className={style.profileWrapper}>
                <ProfileHeader/>
                <ProfileUserInfo/>
                <ProfileUserPosts store={props.store}/>
            </div>
        </section>
    )
}


