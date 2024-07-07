import React from 'react'
import { useSelector } from 'react-redux'
import SearchMovieDetails from './SearchMovieDetails'

const SearchMovie = (props) => {
  const { update } = props;
  const updateAction = () => {
    update();
  }
  const searchMovieData = useSelector((globalStore) => globalStore.movie.searchMovies);

  return (
    <div className='relative w-[95%] h-auto flex justify-center mt-[100px]'>
      <div className='absolute bg-blue-600 w-full h-auto opacity-60 left-0 top-0 right-0 bottom-0'></div>
      <div
        className='absolute right-2 top-2 text-white cursor-pointer'
        onClick={updateAction}
      >x</div>
      <div className='relative  w-[75%] h-auto mt-5  flex justify-center flex-wrap'>
        {
          searchMovieData &&
          searchMovieData.results.map(
            (movie) => <SearchMovieDetails key={Math.random} data={movie} />
          )
        }
      </div>
    </div>

  )
}

export default SearchMovie