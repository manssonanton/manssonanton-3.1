import { motion } from 'framer-motion';
import React from 'react';
// import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom';

// import ImageModal from '../UI/ImageModal';
// import { RootState } from '../../Store';
// import { getImages } from '../../Store/actions/galleryActions';

function Home() {
    // const { imagesLoaded } = useSelector((state: RootState) => state.gallery);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     if (!imagesLoaded) {
    //         dispatch(getImages());
    //     }
    // }, []);

    const containerVariants = {
        hidden: {
            opacity: 0,
            y: '100vw',
        },
        visible: {
            opacity: 1,
            y: '0vw',
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
            <section className="home">
                <div className="home-container">
                    <h1>WELCOME TO THE GALLERY</h1>
                Upload some photos that you like
            </div>
            </section>
        </motion.div>
    )
}

export default Home;