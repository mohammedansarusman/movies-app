import React from 'react'
import useMovieDetails from "./utils/Hooks/useMovieDetails";
import { useParams } from "react-router-dom";
import VideoBackGround from './VideoBackGround';

const MovieDetails = () => {
    const {id} = useParams();
    useMovieDetails(id);

    return (
        <div>
            <VideoBackGround movieId = {id}/>

        </div>
    )
}

export default MovieDetails