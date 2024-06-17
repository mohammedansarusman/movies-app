import React from 'react'
import { IMG_CDN } from "./utils/constants"


const MovieCard = ({posterPath}) => {
  console.log(posterPath);
  return (
    <div className = "w-[120px] pr-3 ">
      <img src = {IMG_CDN+posterPath} alt = "Image">
      </img>
        
    </div>
  )
}

export default MovieCard