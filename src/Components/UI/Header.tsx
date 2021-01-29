import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Button from './Button';

interface headerProps {
    setMenuState: Dispatch<SetStateAction<boolean>>;
}

function Header({ setMenuState }: headerProps) {
    const location = useLocation();

    useEffect(() => {
        setMenuState(false)
    }, [location, setMenuState]);

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <Link className="name-link" to="/">MANSSON.</Link>
                </div>
                {/* <Button className="navbar-link" text="Menu"  /> */}
                <div className="hamburger-container">
                    <div className="hamburger" onClick={() => setMenuState(true)}>
                        <div className="bar-1"></div>
                        <div className="bar-2"></div>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Header;