import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Message from '../Elements/Message';
import Button from '../Elements/Button';
import UploadImagesModal from '../Elements/UploadImagesModal';
import ImageModal from '../Elements/ImageModal';
import Card from '../Elements/Card';
import Alert from '../Elements/Alert';

import { RootState } from '../../Store';
import { setSuccess } from '../../Store/actions/authActions';
import { getImages, deleteImage } from '../../Store/actions/galleryActions';
import { GalleryImage } from '../../Store/Types/galleryTypes';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

function Dashboard() {
    const { user, needVerification, success } = useSelector((state: RootState) => state.auth);
    const { images, imagesLoaded } = useSelector((state: RootState) => state.gallery);
    const dispatch = useDispatch();
    const [showUploadImagesModal, setShowUploadImagesModal] = useState(false);
    const [showDeleteImageAlert, setShowDeleteImageAlert] = useState(false);
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [deleteing, setDeleteing] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [userImages, setUserImages] = useState<GalleryImage[]>([]);

    useEffect(() => {
        if (!imagesLoaded) {
            dispatch(getImages());
        }
    }, [dispatch, imagesLoaded]);

    useEffect(() => {
        if (images.length > 0) {
            const filtered = images.filter(i => i.uploaderId === user?.id);
            setUserImages(filtered);
        }
        else {
            setUserImages([]);
        }
    }, [images, user]);

    useEffect(() => {
        if (success) {
            dispatch(setSuccess(''))
        }

    }, [success, dispatch]);


    const deleteHandler = (image: GalleryImage, e: React.MouseEvent<Element, MouseEvent>) => {
        e.preventDefault();
        setShowDeleteImageAlert(true);
        setSelectedImage(image);
    }

    const deleteImageHandler = () => {
        if (selectedImage) {
            setDeleteing(true);
            dispatch(deleteImage(selectedImage, () => {
                setDeleteing(false);
                setShowDeleteImageAlert(false);
            }));
        }
    }

    return (
            <section className="dashboard">
                <div className="dashboard-container">
                    <div className="user-info">
                        {needVerification && <Message type="success" msg="Please verify your email address." />}
                        <h1>{user?.name}</h1>
                    </div>
                    <div className="user-images">
                        <div className="user-images-header">
                            <h1>YOUR IMAGES</h1>
                            <Button text="Upload" onClick={() => setShowUploadImagesModal(true)} />
                        </div>
                        {!imagesLoaded
                            ? <Message type="info" msg="Loading images..." />
                            : userImages.length === 0 ?
                                <Message type="info" msg="You have not uploaded any images yet" />
                                : <div className="card-wrapper">
                                    <ResponsiveMasonry
                                        columnsCountBreakPoints={{ 350: 1, 1000: 2, 1930: 3 }}
                                    >
                                        <Masonry columnsCount={3} gutter="1rem">
                                            {userImages.map((image: GalleryImage) => (
                                                <Card
                                                    key={image.id}
                                                    onDelete={(e: React.MouseEvent<Element, MouseEvent>) => deleteHandler(image, e)}
                                                    imageUrl={image.imageUrl}
                                                    onImageClick={() => setImageUrl(image.imageUrl)}
                                                />
                                            ))}
                                        </Masonry>
                                    </ResponsiveMasonry>
                                </div>
                        }
                        {showUploadImagesModal && <UploadImagesModal onClose={() => setShowUploadImagesModal(false)} />}
                        {showDeleteImageAlert && <Alert title="Are you sure?" onSubmit={deleteImageHandler} deleting={deleteing} onClose={() => setShowDeleteImageAlert(false)} />}
                        {imageUrl && <ImageModal url={imageUrl} onClose={() => setImageUrl('')} />}
                    </div>
                </div>
            </section>
    )
}

export default Dashboard;