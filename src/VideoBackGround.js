import React, { useState } from 'react'
import { API_OPTIONS } from './utils/constants';
import { useEffect } from "react";

const VideoBackGround = ({ movieId }) => {
  const [trailerId, setTrailerId] = useState(null);

  const getMovieId = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS);
    console.log("response", response);
    const data = await response.json();
    const filterMovies = data.results.filter((res) => res.type === "Trailer")
    const trailer = filterMovies.length ? filterMovies[0] : data.results[0];
    console.log("one trailer", trailer);
    setTrailerId(trailer.key);
  }

  useEffect(
    () => {
      getMovieId();
    }, []);
  return (
    <div>
      {console.log("hello Video background")}
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerId}
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

