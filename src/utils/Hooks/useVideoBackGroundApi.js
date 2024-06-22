import {API_OPTIONS} from "../constants"
import { useEffect } from "react";
import { addTrailerId } from "../redux/movieSlice";
import { useDispatch } from "react-redux";



const useVideoBackGroundApi = (movieId) =>{
    const dispatch = useDispatch();
    const getMovieId = async () => {
        console.log("movie id:",movieId)
        const response = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS);
        const data = await response.json();
        console.log("data in api:",data);
        
        const trailer = data.results.filter((res) => res?.type === "Trailer");
        console.log("one trailer", trailer);
        dispatch(addTrailerId(trailer[0]?.key));
        console.log("useEffect 5, video background");
      }
    
      useEffect(
        () => {
          getMovieId();
        }, []);
}
export default useVideoBackGroundApi;