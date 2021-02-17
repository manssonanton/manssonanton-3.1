import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

function Input({ type = 'text', placeholder, value, name, onChange, label, multiple }: InputProps) {
    return (
        <div className="field">
            <div className="control">
                {/* <label htmlFor={name}>{label}</label> */}
                <input
                    type={type}
                    className="input"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    name={name}
                    id={name}
                    required
                    multiple={multiple}
                />
            </div>
        </div>
    )
}

export default Input;