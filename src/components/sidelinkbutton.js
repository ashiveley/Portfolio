import { Link } from "react-router-dom";
import React from 'react';
import LinkButton from "./linkbutton";

export default class SideLinkButton extends LinkButton {
    render() {
        return (
            <Link to={this.props.link} class="side linkbutton">
                <p class="name">{this.props.name}</p>
                <p class="time">{this.props.time}</p>
            </Link>

        );
    }
}