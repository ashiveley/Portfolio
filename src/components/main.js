import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from "react-router-dom";

import TopBar from './topbar';
import About from './pages/about';
import Coop from './pages/coop';
import Projects from './pages/projects';

export default class Main extends React.Component {
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className="container">
                    <TopBar></TopBar>
                    <Switch>
                        <Route exact path="/">
                            <About></About>
                        </Route>
                        <Route path="/coop">
                            <Coop></Coop>
                        </Route>
                        <Route path="/projects">
                            <Projects></Projects>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}