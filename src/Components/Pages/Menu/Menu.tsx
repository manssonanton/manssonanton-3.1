import { motion, AnimatePresence } from 'framer-motion';
import React, { Dispatch } from 'react';
import { NavLink } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../../Store';
import { signOut } from '../../../Store/actions/authActions';
import Button from '../../Elements/Button';
import { SetStateAction } from 'react-dom/node_modules/@types/react';
import Panels from '../../Elements/Panels';
import './Menu.scss'

interface MenuProps {
    setMenuState: Dispatch<SetStateAction<boolean>>;
    menuState: boolean;
    onHover: (hover: string) => void;
}

function Menu({ menuState, setMenuState, onHover }: MenuProps) {

    // const dispatch = useDispatch();
    // const { authenticated } = useSelector((state: RootState) => state.auth);


    // const logOutHandler = () => {
    //     dispatch(signOut());
    // }

    const transition = { duration: .7, ease: [0.6, -0.05, 0.01, 0.9] }

    const transition2 = { duration: 0.9, ease: [0.6, -0.05, 0.01, 0.9] }

    const titleSlideUp = {
        initial: { y: 200, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -200, opacity: 0 },
    }

    const titleSlideDown = {
        initial: { y: 200, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 200, opacity: 0 },
    }

    const parent = {
        animate: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 1,
            }
        }
    }

    return (
        <AnimatePresence>
            {menuState &&
                <>
                    <motion.div
                        initial={{ visibility: 'hidden' }}
                        animate={{ visibility: 'visible', transition: { delay: 1 } }}
                        exit={{ visibility: 'hidden', transition: { delay: 1 } }}
                        className="menu">
                        <div className="menu-container">
                            <nav className="menu-nav">
                                <motion.ul
                                    variants={parent}
                                    initial='initial'
                                    animate='animate'
                                    exit='exit'>
                                    <li>
                                        <NavLink activeClassName='is-active' exact to="/" className="navbar-link" onMouseEnter={() => onHover("hovered")} onMouseLeave={() => onHover("")}>
                                            <motion.div variants={titleSlideUp} transition={transition2} className="menu-text">
                                                home
                                            </motion.div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink activeClassName='is-active' to="/articles" className="navbar-link" onMouseEnter={() => onHover("hovered")} onMouseLeave={() => onHover("")}>
                                            <motion.div variants={titleSlideUp} transition={transition2} className="menu-text">
                                                article
                                            </motion.div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink activeClassName='is-active' to="/portfolio" className="navbar-link" onMouseEnter={() => onHover("hovered")} onMouseLeave={() => onHover("")}>
                                            <motion.div variants={titleSlideUp} transition={transition2} className="menu-text">
                                                portfolio
                                            </motion.div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink activeClassName='is-active' to="/about" className="navbar-link" onMouseEnter={() => onHover("hovered")} onMouseLeave={() => onHover("")}>
                                            <motion.div variants={titleSlideUp} transition={transition2} className="menu-text">
                                                about
                                            </motion.div>
                                        </NavLink>
                                    </li>

                                    {/* {!authenticated ?
                                        <>
                                            <li>
                                                <NavLink activeClassName='is-active' to="/signin" className="navbar-link" onMouseEnter={() => onHover("hovered")} onMouseLeave={() => onHover("")}>
                                                    <motion.div variants={titleSlideUp} transition={transition} className="menu-text">
                                                        sign in
                                                    </motion.div>
                                                </NavLink>
                                            </li>
                                        </>
                                        :
                                        <>
                                            <li>
                                                <NavLink activeClassName='is-active' to="/dashboard" className="navbar-link" onMouseEnter={() => onHover("hovered")} onMouseLeave={() => onHover("")}>
                                                    <motion.div variants={titleSlideUp} transition={transition} className="menu-text">
                                                        dashboard
                                                    </motion.div>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink activeClassName='is-active' to="/" className="navbar-link" onClick={logOutHandler} onMouseEnter={() => onHover("hovered")} onMouseLeave={() => onHover("")}>
                                                    <motion.div variants={titleSlideUp} transition={transition} className="menu-text">
                                                        sign out
                                                    </motion.div>
                                                </NavLink>
                                            </li>

                                        </>
                                    } */}
                                </motion.ul>
                            </nav>
                            <div className="menu-header">
                                <Button className="menu-close-button" text="Close" onClick={() => setMenuState(false)} onMouseEnter={() => onHover("hovered")} onMouseLeave={() => onHover("")} />
                            </div>
                        </div>
                    </motion.div>
                    <Panels />
                </>
            }
        </AnimatePresence>
    )
}

export default Menu;