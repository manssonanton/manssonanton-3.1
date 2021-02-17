import { motion } from 'framer-motion';
import React from 'react';

function Panels() {

    const transition = { duration: 2, ease: [0.6, -0.05, 0.01, 0.9], times: [0, 0.5, 1] }

    return (
        <>
            <motion.div className="left-panel"
                initial={{ height: 0 }}
                animate={{ height: [0, window.innerHeight, 0], bottom: [null, 0, 0] }}
                transition={transition}
                exit={{ height: [0, window.innerHeight, 0], top: [null, 0, 0] }}>
            </motion.div>
            <motion.div className="right-panel"
                initial={{ height: 0 }}
                animate={{ height: [0, window.innerHeight, 0], bottom: [0, 0, window.innerHeight] }}
                transition={transition}
                exit={{ height: [0, window.innerHeight, 0], bottom: [null, 0, 0] }}>
            </motion.div>
        </>
    )
}

export default Panels;