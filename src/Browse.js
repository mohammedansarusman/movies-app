import { signOut } from "firebase/auth";
import {auth} from "./utils/firbase"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import AuthUpdate from "./AuthUpdate";
import {API_OPTIONS} from "./utils/constants"
import {useEffect} from "react";
import { addNowPlayingMovies } from "./utils/redux/movieSlice";

const Browse = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log("hello");

    const netflixUser = useSelector((globalStore)=>globalStore.user.userName)
    console.log("user name:",netflixUser)

    const getNowPlayingMovies = async()=>{
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=10', API_OPTIONS)
        const data = await response.json();
        console.log(data);
        dispatch(addNowPlayingMovies(data.results))

    }
    useEffect(()=>{getNowPlayingMovies()},[])

    const handleSignout = () =>{
        signOut(auth);

    }
    return(
        <div className="w-full h-[100%] bg-black flex justify-center">
            <AuthUpdate />
            <div className="w-[25%] h-[100px] bg-black flex flex-row justify-center items-center">
                <h1 className = "text-red-500">Movie App</h1>
            </div>
            <div className = "w-[75%] h-[100px] bg-black flex justify-end items-center pr-[20px]">
                <h1 className="text-white mr-5">{netflixUser}</h1>
                <button 
                    className="w-[100px] h-[40px] bg-red-500"
                    onClick={handleSignout}
                >Signout</button>
            </div>
        </div>
    )
}
export default Browse;