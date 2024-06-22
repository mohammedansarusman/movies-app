import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS} from "../constants"


const usePlayingMovies = () => {
    console.log("usePlayingMovie hook called");
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const data = await response.json();
        dispatch(addNowPlayingMovies(data.results))
        console.log("useEffect 1")
    }
    useEffect(
        () => { 
            getNowPlayingMovies();
        }, []
    )
}
export default usePlayingMovies;