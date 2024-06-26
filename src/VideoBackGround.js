import React from 'react'

import { useSelector } from 'react-redux';
import useVideoBackGroundApi from './utils/Hooks/useVideoBackGroundApi';

const VideoBackGround = ({ movieId }) => {
  useVideoBackGroundApi(movieId);
  const trailerId = useSelector((store) => store.movie.trailerUniqueId)
  console.log("trailer id:",trailerId)

  return (
    <div>
      {trailerId && <iframe 
        className = "w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailerId+"?autoplay=1&mute=1&controls=0&rel=0&showinfo=0&loop=1&playlist="+trailerId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen>
      </iframe>}
    </div>
  )
}
export default VideoBackGround

