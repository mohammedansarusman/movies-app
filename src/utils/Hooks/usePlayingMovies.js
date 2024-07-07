import { useDispatch } from "react-redux";
import { addNowPlayingMovies,addUpdateMovie } from "../redux/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS} from "../constants"


const usePlayingMovies = () => {
    console.log("usePlayingMovie hook called");
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const data = await response.json();
        dispatch(addNowPlayingMovies(data.results))
        dispatch(addUpdateMovie(data.results[4]))

        console.log("useEffect nowPlaying",data.results);
    }
    useEffect(
        () => { 
            getNowPlayingMovies();
        }, []
    )
}
export default usePlayingMovies;