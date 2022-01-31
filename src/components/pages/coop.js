import React from 'react';
import SideBar from '../sidebar';
import {
    Route,
    Switch
} from "react-router-dom";
import SideLinkButton from '../sidelinkbutton';
import CoopSpr20 from './coops/spr20';
import CoopFal20 from './coops/fal20';
import CoopSum21 from './coops/sum21';
import CoopMain from './coops/main';

export default class Coop extends React.Component {
    render() {
        return (
            <div class="selectablecontent">
                <SideBar>
                    <SideLinkButton exact link="/coop" time="&nbsp;">Overview</SideLinkButton>
                    <SideLinkButton link="/coop/sum21"time="May 2021 - August 2021">#3. NLign Analytics</SideLinkButton>
                    <SideLinkButton link="/coop/fal20"time="August 2020 - December 2020">#2. NLign Analytics</SideLinkButton>
                    <SideLinkButton link="/coop/spr20" time="January 2020 - May 2020">#1. NLign Analytics</SideLinkButton>
                </SideBar>
                <div class="content">
                    <h2><span class="material-icons">work_outline</span>Co-op Experiences</h2>
                    <Switch>
                        <Route exact path="/coop">
                            <CoopMain/>
                        </Route>
                        <Route exact path="/coop/sum21">
                            <CoopSum21/>
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