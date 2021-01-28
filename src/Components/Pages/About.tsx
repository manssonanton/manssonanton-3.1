import { motion } from 'framer-motion';
import React from 'react';

function About() {

    const containerVariants = {
        hidden: {
            // opacity: 0,
            x: '100vw',
        },
        visible: {
            // opacity: 1,
            x: '0vw',
            transition: { ease: 'easeInOut', delay: 0.2, duration: 0.5 }
        },
        exit: {
            x: '-100vw',
            transition: { ease: 'easeInOut', delay: 0.5, duration: 0.5 }
        }
    }

    return (
        // <motion.div className=""
        //     variants={containerVariants}
        //     initial="hidden"
        //     animate="visible"
        //     exit="exit">
            <section className="about">
                <h1>About</h1>
            </section>
        // </motion.div>
    )
}

export default About;