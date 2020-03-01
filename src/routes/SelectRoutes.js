import React, { Component } from "react";
import NavigationGuest from "./Guest";
import NavigationLogged from "./Logged.js"
import { connect } from 'react-redux';
import { actionUserIsLogged } from "../redux/actions/AccountActions";

class SelectRoutes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    componentDidMount = async () => {
        await this.setState({
            loading: true
        })
        this.props.isLoggedUser();
    }

    componentWillReceiveProps = async (nextProps) => {
        await this.setState({
            loading: false
        })
    }

    render() {
        return (
            !this.state.loading ?
                undefined !== this.props.propsLogin.session && null !== this.props.propsLogin.session ?
                    <NavigationLogged />
                    :
                    <NavigationGuest />
                : null
        );
    }
}

const mapStateToProps = state => ({
    propsLogin: state.reducerLogin
})

const mapDispatchToProps = dispatch => ({
    isLoggedUser: () => {
        dispatch(actionUserIsLogged());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectRoutes);

