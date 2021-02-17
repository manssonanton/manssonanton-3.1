import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    className?: string;
}

function Button({ text, className, onClick, type, disabled }: ButtonProps) {

    return (
        <button 
            type={type} 
            className={`button ${className}`} 
            onClick={onClick} 
            disabled={disabled}>
            {text}
        </button>
    )
}

export default Button;