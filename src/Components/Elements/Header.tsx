import { AnimatePresence, motion } from 'framer-motion';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
// import { RootState } from '../../Store';
// import { changeTheme } from '../../Store/actions/themeActions';

interface headerProps {
    setMenuState: Dispatch<SetStateAction<boolean>>;
    onHover: (hover: string) => void;
}

function Header({ setMenuState, onHover }: headerProps) {
    const location = useLocation();
    // const dispatch = useDispatch();
    // const { themes } = useSelector((state: RootState) => state.themes);

    useEffect(() => {
        setMenuState(false)
    }, [location, setMenuState]);

    // const themeHandler = () => {
    //     // const newTheme = (themes === "light" ? "dark" : "light");
    //     // dispatch(changeTheme(newTheme))
    // }
    return (
        <>
            <AnimatePresence>
                <motion.nav className="navbar"
                animate={{y: 0, opacity: 1}}
                initial={{y:-100, opacity: 0}}
                transition={{duration: 1, ease: [0.6, 0.05, -0.01, 0.9]}}>
                    <div className="container">
                        <div className="navbar-brand">
                            <Link className="name-link" to="/" onMouseEnter={() => onHover("hovered")} onMouseLeave={() => onHover("")} >MANSSON.</Link>
                        </div>
                        <div className="hamburger-container">
                            <div className="hamburger" onClick={() => setMenuState(true)} onMouseEnter={() => onHover("hovered")} onMouseLeave={() => onHover("")}>
                                <div className="bar-1"></div>
                                <div className="bar-2"></div>
                            </div>
                        </div>
                        {/* <button onClick={themeHandler}>Change</button> */}
                    </div>
                </motion.nav>
            </AnimatePresence>
        </>
    )
}

export default Header;