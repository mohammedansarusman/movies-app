import React from 'react'
import MovieList from "./MovieList"
import {useSelector} from "react-redux"

const SecondaryContainer = () => {
  console.log("SecondaryContainer component called")
  const movies = useSelector((store) => store.movie.nowPlayingMovies)
  const movies_top = useSelector((store) => store.movie.topRatedMovies)
  const movies_popular = useSelector((store) => store.movie.popularMovies)
  const movies_upcoming = useSelector((store) => store.movie.upcomingMovies)

  return (
      <div className=' bg-black w-[100%]'>
        {console.log("SecondaryContainer component rendered")}
        <div className='-mt-[100px] relative'>
          {movies && <MovieList title = {"Now Playing Movies"} movie = {movies}/>}
          {movies_top && <MovieList title = {"Top Rated Movies"} movie = {movies_top}/>}
          {movies_popular && <MovieList title = {"Popular Movies"} movie = {movies_popular}/>}
          {movies_upcoming && <MovieList title = {"Upcoming Movies"} movie = {movies_upcoming}/>}
        </div>
      </div>
  )
}

export default SecondaryContainer