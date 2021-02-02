import React from 'react';
import LinkButton from './linkbutton';

export default class SideBar extends React.Component {
    render() {
        return (
            <div class="sidebar">
                <div class="navbox">
                    <LinkButton link="/coop/spr20" name="Spring 2020"></LinkButton>
                    <LinkButton link="/coop/fal20" name="Fall 2020"></LinkButton>
                </div>
            </div>
        );
    }
}