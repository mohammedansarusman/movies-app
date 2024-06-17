import React from 'react'

import { useSelector } from 'react-redux';
import useVideoBackGroundApi from './utils/Hooks/useVideoBackGroundApi';

const VideoBackGround = ({ movieId }) => {
  const trailerId = useSelector((store) => store.movie.trailerUniqueId)
  useVideoBackGroundApi(movieId);
  return (
    <div>
      {console.log("hello Video background")}
      <iframe 
        className = "w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailerId+"?autoplay=1&mute=1&controls=0&rel=0&showinfo=0"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen>
      </iframe>
      {/* "L4DrolmDxmw" */}
    </div>
  )
}
export default VideoBackGround

