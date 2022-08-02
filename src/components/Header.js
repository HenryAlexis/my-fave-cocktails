import React from "react";
import {NavLink} from "react-router-dom";

function Header()
{
    return <div id="header">
        <NavLink exact to="/">Homepage</NavLink>
        <NavLink exact to="/search">Search</NavLink>
        <NavLink exact to="/send">Send</NavLink>
    </div>;
}

export default Header;