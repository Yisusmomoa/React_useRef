import React from 'react';
import { useState, useRef } from "react";

const MediaPlayer = () => {
    const videoRef=useRef();
    const [play, setPlay]=useState(false);

    const handlePlay=()=>{
        const video=videoRef.current

        play ? video.pause() : video.play()
        
        setPlay(!play);
    }

    return (
        <>
            <video width='420px' ref={videoRef} onClick={handlePlay}>
                <source src='Media/PlanetaTierra.mp4' type='video/mp4'></source>
            </video>
            <br/>
            <button onClick={handlePlay}>{play ? 'Pause' : 'Play'}</button>
        </>
    );
}

export default MediaPlayer;
