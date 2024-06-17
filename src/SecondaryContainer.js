import React from 'react'
import MovieList from "./MovieList"
import {useSelector} from "react-redux"

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie.nowPlayingMovies)
  console.log("secondary",movies);
  return (
      <div className=' bg-red-500 w-[100%]'>
        <div>
          <MovieList title = {"Now Playing Movies"} movie = {movies}/>
          <MovieList title = {"Trending Movies"} movie = {movies}/>
          <MovieList title = {"Upcoming Movies"} movie = {movies}/>
        <MovieList title = {"Popular Movies"} movie = {movies}/>
        <MovieList title = {"Horror Movies"} movie = {movies}/>
        </div>
      </div>
  )
}

export default SecondaryContainer