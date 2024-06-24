import { useEffect } from "react";
import { API_OPTIONS} from "../constants"


const useMovieDetails = (id) =>{

    const getMovieDetails = async() =>{
        const response = await fetch("https://api.themoviedb.org/3/movie/"+id,API_OPTIONS)
        const json = await response.json();
        console.log("movie details",json);

    }
    useEffect(
        ()=>{
            getMovieDetails();
        },[]
    )
}
export default useMovieDetails;