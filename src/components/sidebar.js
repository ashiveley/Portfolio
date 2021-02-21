import React from 'react';

export default class SideBar extends React.Component {
    render() {
        return (
            <div class="sidebar">
                <div class="navbox">
                    {this.props.children[0]}
                    <h3 style={{color: "white", marginLeft: "auto", marginRight: "auto"}}>Timeline</h3>
                    {this.props.children.slice(1)}
                </div>
            </div>
        );
    }
}