import React from 'react';
import SideBar from '../sidebar';

export default class Coop extends React.Component {
    render() {
        return (
            <div class="coop">
                <SideBar></SideBar>
                <div class="content">
                    <h2>Co-op Experiences</h2>
                </div>
            </div>
        );
    }
}