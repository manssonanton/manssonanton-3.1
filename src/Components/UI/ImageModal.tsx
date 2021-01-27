import React from 'react';
import ReactDOM from 'react-dom';

interface ImageModalProps {
    onClose: () => void;
    url: string;
}

function ImageModal({ onClose, url }: ImageModalProps) {

    const targetEl = document.getElementById('modal-root');

    const modal = (
        <div className="image-modal">
            <div className="modal-background" onClick={onClose}></div>
            <div className="modal-content">
                <button className="button" aria-label="close" onClick={onClose}>X</button>
                <img src={url} alt="" />
            </div>
        </div>
    );
    return targetEl ? ReactDOM.createPortal(modal, targetEl) : modal;

}

export default ImageModal;