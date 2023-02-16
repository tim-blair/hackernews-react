import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <h1>Hacker News Clone</h1>
            <div className="nav-link">
                <NavLink to="/top" activeclassname="active">
                    Top Stories
                </NavLink>
                <NavLink to="/new" activeclassname="active">
                    Latest Stories
                </NavLink>
                <NavLink to="/best" activeclassname="active">
                    Best Stories
                </NavLink>
            </div>
        </>
    );
};

export default Header;
