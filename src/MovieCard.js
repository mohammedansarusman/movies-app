import React from 'react'
import { IMG_CDN } from "./utils/constants"
import { useDispatch } from 'react-redux';
import { addHoverMovie } from './utils/redux/movieSlice'

const MovieCard = (props) => {
  const { posterPath, position } = props
  const dispatch = useDispatch();
  return (
    <div className="w-[120px] m-3 transform hover:scale-125 transition duration-500"
      onClick={
        () => dispatch(addHoverMovie(position))
      }>
      <img src={IMG_CDN + posterPath} alt="Image"></img>
    </div>
  )
}

export default MovieCard