import React from "react";
import {NavLink} from "react-router-dom";

function Header()
{
    return <div id="header" className="navbar navbar-inverse">
        <div className="nav navbar-nav">
            <NavLink exact to="/" className="navbar-brand">Homepage</NavLink>
            <NavLink exact to="/search" className="navbar-brand">Search</NavLink>
            <NavLink exact to="/send" className="navbar-brand">Send</NavLink>
        </div>
    </div>;
}

export default Header;