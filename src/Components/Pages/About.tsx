import { motion } from 'framer-motion';
import React from 'react';

function About() {

    const containerVariants = {
        hidden: {
            opacity: 0,
            y: '100vw',
        },
        visible: {
            opacity: 1,
            y: '0vw',
            overflow: 'hidden',
            transition: { delay: 0.3, duration: 0.5 }
        },
        exit: {
            x: '-100vw',
            transition: { ease: 'easeInOut' }
        }
    }

    return (
        <motion.div className=""
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit">
            <section className="about">
                <h1>About</h1>
            </section>
        </motion.div>
    )
}

export default About;