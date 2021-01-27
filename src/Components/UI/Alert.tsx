import React from 'react';
import ReactDOM from 'react-dom';

import Button from './Button';

interface AlertProps {
    onClose: () => void;
    onSubmit: () => void;
    title: string;
    deleting: boolean;
}

function Alert({ title, deleting, onClose, onSubmit }: AlertProps) {

    const targetEl = document.getElementById('modal-root');

    const alert = (
        <div className="alert-modal">
            <div className="alert-modal-background" onClick={onClose}></div>
            <div className="alert-modal-content">
                <div className="alert-modal-card-head">
                    <h2>{title}</h2>
                    <button className="button" onClick={onClose}>Close</button>
                </div>
                <div className="alert-modal-card">
                    <Button text="Cancel" onClick={onClose} />
                    <Button text={deleting ? "deleting..." : "Delete"} onClick={onSubmit} disabled={deleting} />
                </div>
            </div>
        </div>
    );

    return targetEl ? ReactDOM.createPortal(alert, targetEl) : alert;
}

export default Alert;