import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Button from './Button';
import { RootState } from '../../Store';
import { signOut } from '../../Store/actions/authActions';

function Header() {
    const dispatch = useDispatch();
    const { authenticated } = useSelector((state: RootState) => state.auth);

    const logOutHandler = () => {
        dispatch(signOut());
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <Link className="name-link" to="/">MANSSON</Link>
                </div>
                <nav>
                    <Link to="/" className="navbar-link">Home</Link>
                    <Link to="/portfolio" className="navbar-link">Portfolio</Link>
                    <Link to="/about" className="navbar-link">About</Link>
                    {!authenticated ?
                        <>
                            <Link to="/signin" className="navbar-link">Sign in</Link>
                        </>
                        :
                        <>
                            <Link to="/dashboard" className="navbar-link">Dashboard</Link>
                            <Button className="navbar-link" text="Sign Out" onClick={logOutHandler} />
                        </>
                    }
                </nav>
            </div>
        </nav>
    )
}

export default Header;