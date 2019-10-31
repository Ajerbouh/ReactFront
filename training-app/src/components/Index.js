import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import ChatContainer from "../containers/Chat";
import Login from "./Login"


class Index extends Component {
    render() {
        return (
            <Router>
                <div>
                        <Route exact path="/" component={Login}/>
                        <Route path="/chat" component={ChatContainer}/>
                </div>
            </Router>
        )
    }
}

export default Index