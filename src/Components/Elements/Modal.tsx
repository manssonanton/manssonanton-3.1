import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
    onClose: () => void;
    title: string;
    children: ReactNode;
}

function Modal({ onClose, title, children }: ModalProps) {

    const targetEl = document.getElementById('modal-root');

    const modal = (
        <div className="modal">
            <div className="modal-background" onClick={onClose}></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{title}</p>
                    <button className="delete" aria-label="close" onClick={onClose}>Close</button>
                </header>
                <section className="modal-card-body">
                    {children}
                </section>
            </div>
        </div>
    );
    return targetEl ? ReactDOM.createPortal(modal, targetEl) : modal;

}

export default Modal;