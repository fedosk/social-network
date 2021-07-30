import React from 'react';
import {ProfileHeader} from './ProfileHeader/ProfileHeader';
import {ProfileUserInfo} from './ProfileUserInfo/ProfileUserInfo';
import {ProfileUserPosts} from './ProfileUserPosts/ProfileUserPosts';
import style from './Profile.module.css'
import {ProfilePagePropsType} from '../../Redux/state';

type ProfilePropsType = {
    profilePage: ProfilePagePropsType
    dispatch: () => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <section className={style.profileSection}>
            <div className={style.profileWrapper}>
                <ProfileHeader/>
                <ProfileUserInfo/>
                <ProfileUserPosts
                    profilePage={props.profilePage}
                    dispatch={props.dispatch}
                    />
            </div>
        </section>
    )
}


