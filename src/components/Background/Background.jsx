import React from 'react';
import './Background.css';
import BackgroundVideo from '../../assets/bg-universe.mp4';
import  Imageback from'../../assets/fallback-image.png'


function Background() {
  return (
    <div>
        <div className='shadow-background'></div>
        <video 
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
        id="background-video"
        poster={Imageback} >
            <source src={BackgroundVideo} type='video/mp4'/>
            </video>
    </div>
  )
}

export default Background