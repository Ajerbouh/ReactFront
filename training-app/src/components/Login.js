import React, {Component} from 'react';
import {connect} from 'react-redux'
import {login} from "../actions";

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
        this.setState({username: ''});
        if (this.state.username !== null) {
            this.props.history.push("/chat");
        }
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
