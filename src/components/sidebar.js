import React from 'react';

export default class SideBar extends React.Component {
    render() {
        return (
            <div class="sidebar">
                <div class="navbox">
                    {this.props.children}
                </div>
            </div>
        );
    }
}