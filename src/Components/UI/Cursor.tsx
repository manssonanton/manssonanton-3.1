import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';

function Cursor() {
    const [mousePosition, setMousePosition] = useState({ x: 400, y: 400 });
    const { cursorTheme } = useSelector((state: RootState) => state.themes);

    const onMouseMove = (ev: MouseEvent) => {
        const {pageX: x, pageY: y} = ev;
        setMousePosition({x, y});
    }

    useEffect(() => {
        document.addEventListener('mousemove', onMouseMove)
        return () => {
            document.removeEventListener('mousemove', onMouseMove)
        }
    }, []);

    return (
        <>
            <div className={`cursor ${cursorTheme}`} style={{left: `${mousePosition.x}px`, top: `${mousePosition.y}px`}}>
            </div>
        </>
    )
}

export default Cursor;