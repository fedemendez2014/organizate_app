import React, {Component} from "react";
import NavigationGuest from "./Guest";
import { connect } from 'react-redux';

class SelectRoutes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.propsLogin)
        return(
            <NavigationGuest />
        );
    }
}

const mapStateToProps = state => ({
    propsLogin: state.reducerLogin
})

export default connect(mapStateToProps, null)(SelectRoutes);