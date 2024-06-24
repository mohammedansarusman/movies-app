import React from 'react'
import MovieCard from './MovieCard'
// import { useSelector } from 'react-redux'


const MovieList = ({ title, movie }) => {
    return (
        <div className='p-4 '>
            <h1 className = "text-xl text-white">{title}</h1>
            <div className = 'w-full flex overflow-x-scroll'>
                <div className='flex'>
                    {
                        movie?.map((mov) => (
                                <MovieCard key={Math.random()} posterPath={mov.poster_path} position = {mov.id}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList