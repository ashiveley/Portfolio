import { Link } from "react-router-dom";
import React from 'react';

export default class LinkButton extends React.Component {
    render() {
        return (
            <div class="linkbutton">
                <Link to={this.props.link}>{this.props.name}</Link>
            </div>
        );
    }
}