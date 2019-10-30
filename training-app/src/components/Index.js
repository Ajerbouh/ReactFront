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
import Chat from "./Chat";
import Login from "./Login"


class Index extends Component {
    render () {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/chat"> Chat </Link>
                        </li>
                        <li>
                            <Link to="/login"> Login </Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/chat">
                            <Chat />
                        </Route>
                        <Route path="/login">
                            <Login/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Index