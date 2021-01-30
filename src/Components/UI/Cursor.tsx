import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

function Cursor() {

    const [mousePosition, setMousePosition] = useState({ x: 400, y: 400 })

    // const transition = { duration: 2, ease: [0.6, -0.05, 0.01, 0.9], times: [0, 0.5, 1] }

    const onMouseMove = (ev: MouseEvent) => {
        const {pageX: x, pageY: y} = ev;
        setMousePosition({x, y});
    }

    useEffect(() => {
        document.addEventListener('mousemove', onMouseMove)
        return () => {
            document.addEventListener('mousemove', onMouseMove)
        }
    }, []);

    return (
        <>
            <div className="cursor" style={{left: `${mousePosition.x}px`, top: `${mousePosition.y}px`}}>
                {/* // initial={{ height: 0 }}
                // animate={{ height: [0, window.innerHeight, 0], bottom: [null, 0, 0] }}
                // transition={transition}
                // exit={{ height: [0, window.innerHeight, 0], top: [null, 0, 0] }}> */}
            </div>
        </>
    )
}

export default Cursor;