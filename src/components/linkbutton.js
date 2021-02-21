import { NavLink } from "react-router-dom";
import React from 'react';

export default class LinkButton extends React.Component {
    render() {
        return (
            <NavLink className="linkbutton" exact={this.props.exact} to={this.props.link} activeClassName="active">{this.props.children}</NavLink>
        );
    }
}