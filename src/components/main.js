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
import space from '../images/space.png';

export default class Main extends React.Component {
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <img class="background" src={space} alt="Background" />
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