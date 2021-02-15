import React from 'react';
import SideBar from '../sidebar';
import {
    Route,
    Switch
} from "react-router-dom";
import SideLinkButton from '../sidelinkbutton';
import CoopSpr20 from './coops/spr20';
import CoopFal20 from './coops/fal20';
import CoopMain from './coops/main';

export default class Coop extends React.Component {
    render() {
        return (
            <div class="selectablecontent">
                <SideBar>
                    <SideLinkButton link="/coop/fal20" name="#2. NLign Analytics" time="August 2020 - December 2020"></SideLinkButton>
                    <SideLinkButton link="/coop/spr20" name="#1. NLign Analytics" time="January 2020 - May 2020"></SideLinkButton>
                </SideBar>
                <div class="content">
                    <h2>Co-op Experiences</h2>
                    <Switch>
                        <Route exact path="/coop">
                            <CoopMain/>
                        </Route>
                        <Route exact path="/coop/fal20">
                            <CoopFal20/>
                        </Route>
                        <Route exact path="/coop/spr20">
                            <CoopSpr20/>
                        </Route>
                    </Switch>
                </div>
            </div>
        );
    }
}