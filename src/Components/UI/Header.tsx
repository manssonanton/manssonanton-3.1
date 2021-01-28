import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Button from './Button';
import { RootState } from '../../Store';
import { signOut } from '../../Store/actions/authActions';
import Menu from '../Pages/Menu';
import { motion } from 'framer-motion';

function Header() {
    const dispatch = useDispatch();
    const { authenticated } = useSelector((state: RootState) => state.auth);
    const [showMenu, setShowMenu] = useState(false);

    const variants = {
        open: { opacity: 1, x: 0, translateX: 0 },
        closed: { opacity: 0, x: "-100%" },
    }

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <Link className="name-link" to="/">MANSSON</Link>
                    </div>
                    <nav>
                        {/* <Link to="/" className="navbar-link">Home</Link>
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
                    } */}
                        <Button className="navbar-link" text="Menu" onClick={() => setShowMenu(true)} />
                    </nav>
                </div>
            </nav>
            <motion.nav
                animate={showMenu ? "open" : "closed"}
                variants={variants}
            >
                {<Menu onClose={() => setShowMenu(false)} />}
            </motion.nav>
        </>
    )
}

export default Header;