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
            // opacity: 0,
            x: '100vw',
            scaleX: 0,
            OriginX: 1,
        },
        visible: {
            // opacity: 1,
            x: '0vw',
            scaleX: 1,
            transition: { ease: 'easeInOut', delay: 0.2, duration: 1 }
        },
        exit: {
            x: '-100vw',
            scaleX: 0,
            transition: { ease: 'easeInOut', delay: 0.5, duration: 1 }
        }
    }

    return (
        // <motion.div className=""
        //     variants={containerVariants}
        //     initial="hidden"
        //     animate="visible"
        //     exit="exit">
        <section className="home">
            <div className="home-container">
                <h1>WELCOME TO THE GALLERY</h1>
                Upload some photos that you like
            </div>
        </section>
        // </motion.div>
    )
}

export default Home;