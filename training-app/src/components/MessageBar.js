import React, {Component} from 'react';
import {connect} from "react-redux";
import {addMessage} from "../actions";
import ws from '../service/websocket';


const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (message, username) => dispatch(addMessage(message, username))
    }
};

class MessageBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            message: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({message: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
//       this.props.dispatch(addMessage(this.state.message));
        let wsMessage = this.state.message;
        let wsUsername = this.props.username.username;

        ws.send(JSON.stringify(this.props.sendMessage(wsMessage, wsUsername)));
        this.setState({message: ''});
    }



    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="messageBar" id="bar" value={this.state.message} onChange={this.handleChange}/>
                <input type="submit" value="Envoyer"/>
            </form>
        )
    }
}
export default connect(null, mapDispatchToProps)(MessageBar)