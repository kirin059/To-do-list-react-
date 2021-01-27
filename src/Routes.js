import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import toDoList from "./src/pages/toDoList";

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={toDoList} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;
