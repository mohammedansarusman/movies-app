import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../redux/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS} from "../constants"


const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
        const data = await response.json();
        dispatch(addTopRatedMovies(data.results))
    }
    useEffect(
        () => { 
            getTopRatedMovies();
        }, []
    )
}
export default useTopRatedMovies;