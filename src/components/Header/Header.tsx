import React from "react";
import headerStyle from "./Header.module.css"
import { ReactComponent as Logo } from './../../images/logo.svg';


export const Header = () => {
    return (
        <header className={headerStyle.header}>
            <div className={headerStyle.headerWrapper}>
                <Logo className={headerStyle.logo}/>
                <span className={headerStyle.logoName}>incode</span>
            </div>
        </header>
    )
}