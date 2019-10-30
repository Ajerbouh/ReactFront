import React, {Component} from 'react';
import {connect} from "react-redux";
import {addMessage} from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (message) => dispatch(addMessage(message))
    }
};

class MessageBar extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
//       this.props.dispatch(addMessage(this.state.message));
        this.props.sendMessage(this.state.message);
    }

    handleChange(event) {
        this.setState({message: event.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="messageBar" id="bar" value={this.props.message} onChange={this.handleChange}/>
                <input type="submit" value="Envoyer"/>
            </form>
        )
    }
}
export default connect(null, mapDispatchToProps)(MessageBar)