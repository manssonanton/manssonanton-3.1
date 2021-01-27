import React, { useState, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Modal from './Modal';
import FileUpload from './FileUpload';
import Button from './Button';
import { addImage } from '../../Store/actions/galleryActions';

import { RootState } from '../../Store'

interface UploadImagesModalProps {
    onClose: () => void;
}

interface Image {
    name: string;
    progress: number;
}

function UploadImagesModal({ onClose }: UploadImagesModalProps) {
    const [files, setFiles] = useState<FileList | null>();
    const [filesArr, setFilesArr] = useState<Image[]>([]);
    const [disabled, setDisabled] = useState(true);
    const dispatch = useDispatch();
    const { user } = useSelector((state: RootState) => state.auth)

    const changeHandler = (e: FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.files && e.currentTarget.files.length > 0) {
            setDisabled(false);
            let images: Image[] = [];

            Array.from(e.currentTarget.files).forEach(file => images.push({ name: file.name, progress: 0 }))
            setFilesArr(images);
        }
        else {
            setFilesArr([]);
            setDisabled(true);
        }
        setFiles(e.currentTarget.files)
    }

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        if (files && files.length > 0 && user) {
            dispatch(addImage(files, user, (progress, file) => {
                const copyOfFilesArr = [...filesArr];
                const findFile = copyOfFilesArr.find(f => f.name === file.name);
                if (findFile) {
                    findFile.progress = Math.floor(progress);
                }
                const updateArr = copyOfFilesArr.map(f => f.name === file.name ? findFile ? findFile : f : f);
                setFilesArr(updateArr);
            }));
            setFiles(null);
            setDisabled(true);
        }
    }

    return (
        <Modal onClose={onClose} title="UPLOAD IMAGES">
            <form onSubmit={submitHandler} className="Upload-images-form">
                <FileUpload onChange={changeHandler} />
                {filesArr.length > 0 &&
                    <ul>
                        {filesArr.map((file: Image, index) => (
                            <li key={index}>
                                <p>{file.name}</p>
                                <progress value={file.progress} max="100">{file.progress}%</progress>
                            </li>
                        ))}
                    </ul>}
                <Button text="Upload" disabled={disabled} />
            </form>
        </Modal>
    )

}

export default UploadImagesModal;