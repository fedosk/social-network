import React from "react";
import style from "./Preloader.module.css";
import preloader from "../../images/Rolling.gif";

export const Preloader = ( ) => {
    return <div className={style.preloaderWrapper}><img src={preloader} alt="rolling"/></div>
}