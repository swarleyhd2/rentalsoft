'use client'
import { Button } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

export default function page() {
    const videoRef = useRef(null)
    const photoRef = useRef(null)
    const [hasPhoto, setHasPhoto] = useState(false)
    const [photoData, setPhotoData] = useState(null)
    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({
            video: {
                width: 1920,
                height: 1080
            }
        }).then(stream => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
        }).catch(error => {
            console.error(error);
        })
    }

    const takePhoto = () => {
        const width = 414;
        const height = width / (16/9);

        let video = videoRef.current;
        let photo = photoRef.current;
        photo.width = width;
        photo.height = height;

        let ctx = photo.getContext('2d')
        ctx.drawImage(video, 0, 0, width, height);
        setPhotoData(photo.toDataURL("image/png"));
        setHasPhoto(true);
        

    }
    
    const closePhoto = () => {
        let photo = photoRef.current;
        let ctx = photo.getContext('2d')
        ctx.clearRect(0, 0, photo.width, photo.height);
        setHasPhoto(false)
    }
    const videoView = 
        <div className='camera'>
            <video ref={videoRef}></video>
            <Button variant='contained' onClick={takePhoto}>Snap</Button>
        </div>
    const photoView = 
        <div className={'result' + (hasPhoto ? ' hasPhoto': '')}>
            <canvas ref={photoRef}></canvas>
            <button onClick={closePhoto}>Close</button>
        </div>
    useEffect(() => {
        getVideo();
    },[videoRef])

    return (
        <>
            {videoView}
            {photoView}
            {photoData}
        </>
    )
}
