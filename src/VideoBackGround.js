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
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+trailerId}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>
      </iframe>
      {/* "L4DrolmDxmw" */}
    </div>
  )
}
export default VideoBackGround

