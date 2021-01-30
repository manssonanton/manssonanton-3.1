import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Message from '../UI/Message';
import ImageModal from '../UI/ImageModal';

import { RootState } from '../../Store';
import { getImages } from '../../Store/actions/galleryActions';
import { GalleryImage } from '../../Store/Types/galleryTypes';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { AnimatePresence, motion } from 'framer-motion';

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
        <AnimatePresence>
            <motion.div
                initial={{ visibility: 'hidden' }}
                animate={{ visibility: 'visible', transition: { delay: 1 } }}
                exit={{ visibility: 'hidden', transition: { delay: 1 } }}
                className="">
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
        </AnimatePresence>
    )
}

export default Portfolio;