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


    return (
        <section className="home">
            <div className="home-container">
                <h1>WELCOME TO THE GALLERY</h1>
                Upload some photos that you like
            </div>
        </section>
    )
}

export default Home;