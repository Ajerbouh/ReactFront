import React, {Component} from 'react';
import MessageList from './MessageList';
import MessageBar from './MessageBar';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {

    return { message: state.messageList }
};

class Chat extends Component {


    render() {
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

export default connect(mapStateToProps)(Chat)
