import React, { Component } from "react";
import NavigationGuest from "./Guest";
import NavigationLogged from "./Logged.js"
import { connect } from 'react-redux';

class SelectRoutes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            undefined !== this.props.propsLogin.session && null !== this.props.propsLogin.session ?
                <NavigationLogged />
                :
                <NavigationGuest />
        );
    }
}

const mapStateToProps = state => ({
    propsLogin: state.reducerLogin
})

export default connect(mapStateToProps, null)(SelectRoutes);

