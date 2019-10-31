import React, {Component} from 'react';
import MessageList from './MessageList';
import MessageBar from './MessageBar';
import Grid from '@material-ui/core/Grid';


class Chat extends Component {


    render() {
        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <MessageList
                            messages={this.props.message}
                            username={this.props.username}
                        />
                        <MessageBar username={this.props.username}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Chat
