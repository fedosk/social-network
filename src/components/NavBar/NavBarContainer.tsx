import React from 'react';
import {AtionCreatorType, RootStateTypes} from '../../Redux/store';
import {connect} from "react-redux";
import {NavBar} from "./NavBar";


let mapStateToProps = (state: RootStateTypes) => {
    return {
        friendsList: state.general
    }
}

let mapDispatchToProps = (dispatch: (action: AtionCreatorType) => void) => {
    return
}

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar)

export default NavBarContainer