import React, { useRef, FormEvent } from 'react';
import Button from './Button'

interface FileUploadProps {
    onChange: (e: FormEvent<HTMLInputElement>) => void;
}

function FileUpload({ onChange }: FileUploadProps) {
    const fileInput = useRef<HTMLInputElement>(null);

    const pickImageButtonClickHandler = () => {
        if (fileInput.current) {
            fileInput.current.click();
        }
    }

    return (
        <div className="file-upload">
            <input
                type="file"
                name="files"
                className="is-hidden"
                multiple
                ref={fileInput}
                onChange={onChange}
                required
                hidden
            />
            <Button text="Pick Images" onClick={pickImageButtonClickHandler} type="button" className="pick-images" />
        </div>
    )
}

export default FileUpload;