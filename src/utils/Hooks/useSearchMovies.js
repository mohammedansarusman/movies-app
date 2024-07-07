import { API_OPTIONS } from "../constants";
import { useEffect } from "react";
import { addSearchMovies } from "../redux/movieSlice";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


const useSearchMovies = (movieName) => {
    const dispatch = useDispatch();
    console.log("useSearchMovies Called")
    // const movieName = useSelector((globalStore) => globalStore.movie.searchMovies);
    const searchResult  = async() => {
        const response = await fetch('https://api.themoviedb.org/3/search/movie?query='+movieName+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await response.json();
        dispatch(addSearchMovies(json));

        console.log("JSON in searchMovies",json);

    }
    useEffect(
        ()=>{
            movieName && searchResult()
        },[movieName]
    )

}
export default useSearchMovies;