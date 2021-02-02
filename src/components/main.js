import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import TopBar from './topbar';
import About from './pages/about';
import Coop from './pages/coop';

export default class Main extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <TopBar></TopBar>
                    <Route exact path="/">
                        <About></About>
                    </Route>
                    <Route path="/coop">
                        <Coop></Coop>
                    </Route>
                </div>
            </Router>
        );
    }
}