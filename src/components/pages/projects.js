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
import ProjectMain from './projects/main';

export default class Projects extends React.Component {
    render() {
        return (
            <div class="selectablecontent">
                <SideBar>
                    <SideLinkButton exact link="/projects" time="&nbsp;">Overview</SideLinkButton>
                    <SideLinkButton link="/projects/rando" time="October 2018 - Present"><span class="material-icons">casino</span>Game Randomizers</SideLinkButton>
                    <SideLinkButton link="/projects/portfolio" time="September 2019 - Present"><span class="material-icons">code</span>Portfolio</SideLinkButton>
                    <SideLinkButton link="/projects/webscraper" time="June 2020 - August 2020"><span class="material-icons">coronavirus</span>COVID-19 Web Scraper</SideLinkButton>
                    <SideLinkButton link="/projects/cubecats" time="August 2018 - January 2020"><span class="material-icons">public</span>UC Cubecats</SideLinkButton>
                    <SideLinkButton link="/projects/mobile" time="June 2018 - June 2019"><span class="material-icons">phone_android</span>Android Label Reader</SideLinkButton>
                    <SideLinkButton link="/projects/gripper" time="January 2019 - May 2019"><span class="material-icons">accessibility</span>Gripper Honors Project</SideLinkButton>
                    <SideLinkButton link="/projects/other" time="&nbsp;"><span class="material-icons">source</span>Other Minor Projects</SideLinkButton>
                </SideBar>
                <div class="content">
                    <h2><span class="material-icons">code</span>Projects &amp; Involvement</h2>
                    <Switch>
                        <Route exact path="/projects">
                            <ProjectMain />
                        </Route>
                        <Route exact path="/projects/rando">
                            <ProjectRando />
                        </Route>
                        <Route exact path="/projects/portfolio">
                            <ProjectPortfolio />
                        </Route>
                        <Route exact path="/projects/webscraper">
                            <ProjectWebScraper />
                        </Route>
                        <Route exact path="/projects/cubecats">
                            <ProjectCubecats />
                        </Route>
                        <Route exact path="/projects/mobile">
                            <ProjectMobile />
                        </Route>
                        <Route exact path="/projects/gripper">
                            <ProjectGripper />
                        </Route>
                        <Route exact path="/projects/other">
                            <ProjectOther />
                        </Route>
                    </Switch>
                </div>
            </div>
        );
    }
}