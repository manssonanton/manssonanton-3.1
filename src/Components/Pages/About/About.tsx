import { motion } from 'framer-motion';
import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import './About.scss';

function About() {

    const parent = {
        animate: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 1,
                staggerDirection: -1
            }
        }
    }

    const transition = { duration: 1.5, ease: [0.6, -0.05, 0.01, 0.9] }

    const titleSlideUp = {
        initial: { y: -100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -200, opacity: 0 },
    }

    return (
        <ScrollContainer className="scroll-container" horizontal={false} activationDistance={50} >
        <section className="about">
            <motion.div className="right-grid"
                            animate={{y: 0, opacity: 1}}
                            initial={{y: 300, opacity: 0}}
                            transition={{duration: 2.5, ease: [0.6, 0.05, 0.1, 0.9]}}>
                <img src="../../DSC06462-4.jpg" alt="Me in black and white"/>         
            </motion.div>
            <motion.div className="left-grid"
                                    variants={parent}
                                    initial='initial'
                                    animate='animate'
                                    exit='exit'>
                <motion.h1 variants={titleSlideUp} transition={transition}>Anton.</motion.h1>
                <motion.h2 variants={titleSlideUp} transition={transition}>Who am I</motion.h2>
                <motion.h3 variants={titleSlideUp} transition={transition}>Well,</motion.h3>
                <motion.p variants={titleSlideUp} transition={transition}>I'm Anton Månsson, a sofware engineer who is trying to go out and take photos and just enjoy the creative process.  
                    
                    <br></br>I mostly take pictures of nature and landscapes durgin my travelsor in my home town, Malmö or places close by in southern Sweden.
                </motion.p>
            </motion.div>
        </section>
        </ScrollContainer>
    )
}

export default About;