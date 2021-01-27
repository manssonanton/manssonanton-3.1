import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Message from '../UI/Message';
import ImageModal from '../UI/ImageModal';

import { RootState } from '../../Store';
import { getImages } from '../../Store/actions/galleryActions';
import { GalleryImage } from '../../Store/Types/galleryTypes';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { motion } from 'framer-motion';

function Portfolio() {
    const { images, imagesLoaded } = useSelector((state: RootState) => state.gallery);
    const dispatch = useDispatch();
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        if (!imagesLoaded) {
            dispatch(getImages());
        }
    }, []);

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
            <section className="Portfolio">
                <div className="Portfolio-container">
                    {!imagesLoaded
                        ? <Message type="info" msg="Loading images..." />
                        : images.length === 0 ?
                            <Message type="info" msg="There are no images" />
                            : <>
                                <ResponsiveMasonry
                                    columnsCountBreakPoints={{ 350: 1, 1000: 2, 1930: 3 }}
                                >
                                    <Masonry columnsCount={3} gutter="1rem">
                                        {images.map((image: GalleryImage) => (
                                            <img key={image.id} src={image.imageUrl} onClick={() => setImageUrl(image.imageUrl)} alt="" />
                                        ))}
                                    </Masonry>
                                </ResponsiveMasonry>
                            </>
                    }
                    {imageUrl && <ImageModal url={imageUrl} onClose={() => setImageUrl('')} />}
                </div>
            </section>
        </motion.div>
    )
}

export default Portfolio;