import { useDispatch } from "react-redux";
import { addPopularMovies } from "../redux/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS} from "../constants"


const usePopularMovies = () => {
    console.log("usePopularMovie hook called");

    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
        const data = await response.json();
        dispatch(addPopularMovies(data.results))
        console.log("useEffect popularmovies")

    }
    useEffect(
        () => { 
            getPopularMovies();
        }, []
    )
}
export default usePopularMovies;