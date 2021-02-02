import React from 'react';
import LinkButton from './linkbutton';

export default class TopBar extends React.Component {
    render() {
        return (
            <div class="topbar">
                <h1>Alexander Shiveley</h1>
                <div class="navbox">
                    <LinkButton link="/" name="About"></LinkButton>
                    <LinkButton link="/coop" name="Co-op Experiences"></LinkButton>
                    <LinkButton link="/projects" name="Projects"></LinkButton>
                </div>
            </div>
        );
    }
}