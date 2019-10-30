import React, {Component} from 'react';
import MessageList from './MessageList';
import MessageBar from './MessageBar';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import {addMessage} from "../actions";
import {bindActionCreators} from 'redux'

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(addMessage('ADD_MESSAGE'), dispatch)
    }
};

const mapStateToProps = (state) => {

    return { message: state.messageList }
};

class Chat extends Component {


    render() {
        console.log('props: ',  this.props.message);
        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <MessageList messages={this.props.message}/>
                        <MessageBar />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
