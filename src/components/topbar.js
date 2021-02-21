import React from 'react';
import LinkButton from './linkbutton';

export default class TopBar extends React.Component {
    render() {
        return (
            <div class="topbar">
                <h1>Alexander Shiveley</h1>
                <div class="navbox">
                    <LinkButton exact link="/"><span class="material-icons">perm_identity</span>Home</LinkButton>
                    <LinkButton link="/coop"><span class="material-icons">work_outline</span>Co-op Experiences</LinkButton>
                    <LinkButton link="/projects"><span class="material-icons">code</span>Projects &amp; Involvement</LinkButton>
                </div>
            </div>
        );
    }
}