import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../Store';
import { signOut } from '../../Store/actions/authActions';
import Button from '../UI/Button';
interface MenuProps {
    onClose: () => void;
}

function Menu({ onClose }: MenuProps) {

    const dispatch = useDispatch();
    const { authenticated } = useSelector((state: RootState) => state.auth);


    const logOutHandler = () => {
        dispatch(signOut());
    }

    const containerVariants = {
        hidden: {
            // opacity: 0,
            y: '100vw',
        },
        visible: {
            // opacity: 1,
            y: '0vw',
            transition: { ease: 'easeInOut', delay: 0.2, duration: 0.5 }
        },
        exit: {
            y: '-100vw',
            transition: { ease: 'easeInOut', delay: 0.5, duration: 0.5 }
        }
    }

    return (
        // <motion.div className=""
        //     variants={containerVariants}
        //     initial="hidden"
        //     animate="visible"
        //     exit="exit">
        <section className="menu">
            <div className="menu-container">
                <Button className="navbar-link" text="close" onClick={onClose} />
                <nav className="menu-nav">
                    <ul>
                        <li>
                            <Link to="/" className="navbar-link" onClick={onClose}>Home</Link>
                        </li>
                        <li>
                            <Link to="/portfolio" className="navbar-link" onClick={onClose}>Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/about" className="navbar-link" onClick={onClose}>About</Link>
                        </li>

                        {!authenticated ?
                            <>
                                <li>
                                    <Link to="/signin" className="navbar-link" onClick={onClose}>Sign in</Link>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <Link to="/dashboard" className="navbar-link" onClick={onClose}>Dashboard </Link>
                                </li>

                                {/* <Button className="navbar-link" text="Sign Out" onClick={logOutHandler} /> */}
                            </>
                        }
                    </ul>
                </nav>
            </div>
        </section>
        // </motion.div>
    )
}

export default Menu;