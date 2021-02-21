import { NavLink } from "react-router-dom";
import React from 'react';
import LinkButton from "./linkbutton";

export default class SideLinkButton extends LinkButton {
    render() {
        return (
            <NavLink exact={this.props.exact} to={this.props.link} className="side linkbutton" activeClassName="active">
                <p class="name">{this.props.children}</p>
                <p class="time">{this.props.time}</p>
            </NavLink>

        );
    }
}