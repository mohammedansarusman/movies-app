import {API_OPTIONS} from "../constants"
import { useEffect } from "react";
import { addTrailerId } from "../redux/movieSlice";
import { useDispatch } from "react-redux";



const useVideoBackGroundApi = (movieId) =>{
    const dispatch = useDispatch();
    const getMovieId = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS);
        console.log("response", response);
        const data = await response.json();
        const filterMovies = data.results.filter((res) => res.type === "Trailer")
        const trailer = filterMovies.length ? filterMovies[0] : data.results[0];
        console.log("one trailer", trailer);
        dispatch(addTrailerId(trailer.key));

      }
    
      useEffect(
        () => {
          getMovieId();
        }, []);
}
export default useVideoBackGroundApi;