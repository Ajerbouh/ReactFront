import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import {connect} from 'react-redux'
import {login} from "../actions";
import Chat from "./Chat";

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username) => dispatch(login(username))
    }
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginConnect = this.loginConnect.bind(this);
    }

    loginConnect(event) {
        event.preventDefault();
        this.props.login(this.state.username);
        this.setState({username: ''})
    }

    handleChange(event) {
        this.setState({username: event.target.value})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.loginConnect}>
                    <input type="text" name="username" onChange={this.handleChange}/>
                    <input type="submit" value="Connectez-vous"/>
                </form>
            </div>
        )
    }
}


export default connect(null, mapDispatchToProps)(Login)
