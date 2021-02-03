import React from 'react';
import SideBar from '../sidebar';
import {
    Route,
    Switch
} from "react-router-dom";
import SideLinkButton from '../sidelinkbutton';
import ProjectRando from './projects/rando';
import ProjectGripper from './projects/gripper';
import ProjectMobile from './projects/mobile';
import ProjectPortfolio from './projects/portfolio';
import ProjectCubecats from './projects/cubecats';
import ProjectWebScraper from './projects/covidnewsscraper';
import ProjectOther from './projects/other';

export default class Projects extends React.Component {
    render() {
        return (
            <div class="selectablecontent">
                <SideBar>
                    <SideLinkButton link="/projects/rando" name="Game Randomizers" time="October 2018 - Present"></SideLinkButton>
                    <SideLinkButton link="/projects/portfolio" name="Portfolio" time="September 2019 - Present"></SideLinkButton>
                    <SideLinkButton link="/projects/webscraper" name="COVID-19 Web Scraper" time="June 2020 - August 2020"></SideLinkButton>
                    <SideLinkButton link="/projects/cubecats" name="UC Cubecats" time="August 2018 - January 2020"></SideLinkButton>
                    <SideLinkButton link="/projects/mobile" name="Android Label Reader App" time="June 2018 - June 2019"></SideLinkButton>
                    <SideLinkButton link="/projects/gripper" name="Gripper Honors Project" time="January 2019 - May 2019"></SideLinkButton>
                    <SideLinkButton link="/projects/other" name="Other Minor Projects" time="&nbsp;"></SideLinkButton>
                </SideBar>
                <div class="content">
                    <h2>Projects &amp; Involvement</h2>
                    <Switch>
                        <Route exact path="/projects/rando">
                            <ProjectRando/>
                        </Route>
                        <Route exact path="/projects/portfolio">
                            <ProjectPortfolio/>
                        </Route>
                        <Route exact path="/projects/webscraper">
                            <ProjectWebScraper/>
                        </Route>
                        <Route exact path="/projects/cubecats">
                            <ProjectCubecats/>
                        </Route>
                        <Route exact path="/projects/mobile">
                            <ProjectMobile/>
                        </Route>
                        <Route exact path="/projects/gripper">
                            <ProjectGripper/>
                        </Route>
                        <Route exact path="/projects/other">
                            <ProjectOther/>
                        </Route>
                    </Switch>
                </div>
            </div>
        );
    }
}