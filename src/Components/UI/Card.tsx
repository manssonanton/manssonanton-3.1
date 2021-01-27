import React, { MouseEvent } from 'react';

interface CardProps {
    onDelete: (e: MouseEvent<HTMLAnchorElement>) => void;
    onImageClick: () => void;
    imageUrl: string;
    publicCard?: boolean;
    uploader?: string;
}

function Card({ imageUrl, onDelete, onImageClick, publicCard, uploader }: CardProps) {
    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <img src={imageUrl} onClick={onImageClick} alt="" />
                </div>
            </div>
            <footer className="card-footer">
                {publicCard && <p className="px-5 py-2">Uploaded by {uploader}</p>}
                {!publicCard && <a href="/#" className="card-footer-item" onClick={onDelete}>Delete</a>}
            </footer>
        </div>
    );
}

export default Card;