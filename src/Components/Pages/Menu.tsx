import { motion, AnimatePresence } from 'framer-motion';
import React, { Dispatch } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../Store';
import { signOut } from '../../Store/actions/authActions';
import Button from '../UI/Button';
import { SetStateAction } from 'react-dom/node_modules/@types/react';
import Panels from '../UI/Panels';

interface MenuProps {
    setMenuState: Dispatch<SetStateAction<boolean>>;
    menuState: boolean;
    onHover: (hover: string) => void;
}

function Menu({ menuState, setMenuState, onHover }: MenuProps) {

    const dispatch = useDispatch();
    const { authenticated } = useSelector((state: RootState) => state.auth);


    const logOutHandler = () => {
        dispatch(signOut());
    }

    const transition = { duration: .7, ease: [0.6, -0.05, 0.01, 0.9] }

    const titleSlideUp = {
        initial: { y: -100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -200, opacity: 0 },
    }

    const titleSlideDown = {
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 200, opacity: 0 },
    }

    const parent = {
        animate: {
            transition: {
                staggerChildren: 0.05,
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
                            <div className="menu-header">
                                <Button className="menu-close-button" text="Close" onClick={() => setMenuState(false)} onMouseEnter={() => onHover("hovered")} onMouseLeave={() => onHover("")} />
                            </div>
                            <nav className="menu-nav">
                                <motion.ul
                                    variants={parent}
                                    initial='initial'
                                    animate='animate'
                                    exit='exit'>
                                    <li>
                                        <Link to="/" className="navbar-link" onMouseEnter={() => onHover("hovered")} onMouseLeave={() => onHover("")}>
                                            <motion.div variants={titleSlideUp} transition={transition} className="menu-text">
                                                Ho
                                            </motion.div>
                                            <motion.div variants={titleSlideDown} transition={transition} className="menu-text">
                                                me
                                            </motion.div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Portfolio" className="navbar-link" onMouseEnter={() => onHover("hovered")} onMouseLeave={() => onHover("")}>
                                            <motion.div variants={titleSlideUp} transition={transition} className="menu-text">
                                                Port
                                            </motion.div>
                                            <motion.div variants={titleSlideDown} transition={transition} className="menu-text">
                                                folio
                                            </motion.div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about" className="navbar-link" onMouseEnter={() => onHover("hovered")} onMouseLeave={() => onHover("")}>
                                            <motion.div variants={titleSlideUp} transition={transition} className="menu-text">
                                                Abo
                                            </motion.div>
                                            <motion.div variants={titleSlideDown} transition={transition} className="menu-text">
                                                ut
                                            </motion.div>
                                        </Link>
                                    </li>

                                    {!authenticated ?
                                        <>
                                            <li>
                                                <Link to="/signin" className="navbar-link" onMouseEnter={() => onHover("hovered")} onMouseLeave={() => onHover("")}>
                                                    <motion.div variants={titleSlideUp} transition={transition} className="menu-text">
                                                        Sign
                                            </motion.div>
                                                    <motion.div variants={titleSlideDown} transition={transition} className="menu-text">
                                                        in
                                            </motion.div>
                                                </Link>
                                            </li>
                                        </>
                                        :
                                        <>
                                            <li>
                                                <Link to="/dashboard" className="navbar-link" onMouseEnter={() => onHover("hovered")} onMouseLeave={() => onHover("")}>
                                                    <motion.div variants={titleSlideUp} transition={transition} className="menu-text">
                                                        Dash
                                            </motion.div>
                                                    <motion.div variants={titleSlideDown} transition={transition} className="menu-text">
                                                        board
                                            </motion.div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/" className="navbar-link" onClick={logOutHandler} onMouseEnter={() => onHover("hovered")} onMouseLeave={() => onHover("")}>
                                                    <motion.div variants={titleSlideUp} transition={transition} className="menu-text">
                                                        Sign
                                            </motion.div>
                                                    <motion.div variants={titleSlideDown} transition={transition} className="menu-text">
                                                        Out
                                            </motion.div>
                                                </Link>
                                            </li>

                                        </>
                                    }
                                </motion.ul>
                            </nav>
                        </div>
                    </motion.div>
                    <Panels />
                </>
            }
        </AnimatePresence>
    )
}

export default Menu;