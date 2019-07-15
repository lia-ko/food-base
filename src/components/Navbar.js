import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink to="/" className="navbar-brand" id="brand">FoodBase</NavLink>
        </nav>
    )
}
export default Navbar;

