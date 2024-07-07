import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../redux/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS} from "../constants"


const useUpcomingMovies = () => {
    console.log("useUpComingMovie hook called")
    const dispatch = useDispatch();
    const getUpcomingMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
        const data = await response.json();
        dispatch(addUpcomingMovies(data.results))
        console.log("useEffect upComingMovies")

    }
    useEffect(
        () => { 
            getUpcomingMovies();
        }, []
    )
}
export default useUpcomingMovies;