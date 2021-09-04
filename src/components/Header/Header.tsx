import React from "react";
import headerStyle from "./Header.module.css"
import {ReactComponent as Logo} from './../../images/logo.svg';
import {NavLink} from "react-router-dom";
import {MapStateToPropsType} from "./HeaderContainer";


export const Header = (props: MapStateToPropsType) => {
    return (
        <header className={headerStyle.header}>
            <div className={headerStyle.headerWrapper}>
                <Logo className={headerStyle.logo}/>
                <span className={headerStyle.logoName}>incode</span>
                <div className={headerStyle.login}>
                    {
                        props.isAuth
                            ? props.login
                            : <NavLink to={'/login'}>
                                <div>Login</div>
                            </NavLink>
                    }
                </div>
            </div>
        </header>
    )
}