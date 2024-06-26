import { API_OPTIONS } from "../constants";
import { useEffect } from "react";
// import { useSelector } from "react-redux";


const useSearchMovies = (movieName) => {
    // const movieName = useSelector((globalStore) => globalStore.movie.searchMovies);
    const searchResult  = async() => {
        const response = await fetch('https://api.themoviedb.org/3/search/movie?query='+movieName+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await response.json();
        console.log("json",json);
    }
    useEffect(
        ()=>{
            searchResult()
        }
    )

}
export default useSearchMovies;