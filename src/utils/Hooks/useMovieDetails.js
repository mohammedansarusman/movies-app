// import { useEffect } from "react";
// import { API_OPTIONS} from "../constants";
// import { addUpdateMovie } from "../redux/movieSlice";
// import { useDispatch } from "react-redux";
// import { useState } from "react";

// const useMovieDetails = (id) =>{
//     const dispatch = useDispatch();
    
//     console.log("useMovieDetails hook called",id)
//     const getMovieDetails = async() =>{
//         const response = await fetch("https://api.themoviedb.org/3/movie/"+id+"?language=en-US",API_OPTIONS)
//         const json = await response.json();
//         console.log("useEffect movieDetails called",json);
//         console.log("json in movie details:",json);
//         dispatch(addUpdateMovie(json))
//     }
//     useEffect(()=>{getMovieDetails()},[mId])
// }
// export default useMovieDetails;