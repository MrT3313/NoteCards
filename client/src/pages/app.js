// IMPORTS
import React from "react";
// import {Router, Route} from '@reach/router'
import { Router, Route, Switch } from 'react-router-dom'
import history from "../utils/history.js";

// AUTH
import { useAuth0 } from "../utils/react-auth0-spa.js";

// COMPONENTS
import HomePage from '../app/Views/HomePage.js'
import StudyPage from '../app/Views/StudyPage.js'
import TestPage from '../app/Views/TestPage.js'

import PrivateRoute from '../app/components/PrivateRoute.js'

// __MAIN__
const App = () => {
    const { loading } = useAuth0();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="App">
            <Router history={history}>
                <Switch>
                    <PrivateRoute exact path="/app" component={HomePage} />
                    <PrivateRoute exact path="/app/StudyPage" component={StudyPage} />
                    <PrivateRoute exact path="/app/TestPage" component={TestPage} />
                </Switch>
            </Router>
        </div>
    );
}

// EXPORTS
export default App;