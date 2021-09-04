import React from 'react';
import {connect} from "react-redux";
import {NavBar} from "./NavBar";
import {RootState} from "../../Redux/redux-store";


let mapStateToProps = (state: RootState) => {
    return {
        friendsList: state.general
    }
}

const NavBarContainer = connect(mapStateToProps, {})(NavBar)

export default NavBarContainer