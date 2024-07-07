// MovieList => MovieCard

import React from 'react'
import { IMG_CDN } from "./utils/constants"
import { useDispatch } from 'react-redux';
import { addHoverMovie, addUpdateMovie } from './utils/redux/movieSlice'
import useMovieDetails from './utils/Hooks/useMovieDetails';

const MovieCard = (props) => {
  
  const { posterPath, movieId } = props
  const dispatch = useDispatch();
  return (
    <div className="w-[120px] m-3 transform hover:scale-125 transition duration-500"
      onClick={
        () => {
          {console.log("what is props in movie card",props)}
          dispatch(addHoverMovie(movieId));
          dispatch(addUpdateMovie(props.data));
          console.log("hello:",movieId);
        } 
      }>
      <img src={IMG_CDN + posterPath} alt="Image"></img>
    </div>
  )
}

export default MovieCard