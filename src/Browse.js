import { signOut } from "firebase/auth";
import { auth } from "./utils/firbase"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import AuthUpdate from "./AuthUpdate";
import usePlayingMovies from "./utils/Hooks/usePlayingMovies";
import useTopRatedMovies from "./utils/Hooks/useTopRatedMovies";
import useSearchMovies from "./utils/Hooks/useSearchMovies";

import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "./utils/Hooks/usePopularMovies ";
import useUpcomingMovies from "./utils/Hooks/useUpcomingMovies";
import { addSearchMovies } from "./utils/redux/movieSlice";
import SearchMovie from "./SearchMovie";
import { useState } from "react";




const Browse = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const netflixUser = useSelector((globalStore) => globalStore.user.userName)
    const movieName = useSelector((globalStore) => globalStore.movie.searchMovies);
    const [showSearchMovies, setShowSearchMovies] = useState(false);
    const [displayDiv,setDisplayDiv] = useState(false);



    usePlayingMovies();
    useTopRatedMovies();
    usePopularMovies();
    useUpcomingMovies();
    useSearchMovies(movieName);


    // const getSearchMovies = () => {
    //     console.log("hello");
    // }
    const handleSignout = () => {
        signOut(auth);

    }
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && e.target.value!== "" && e.target.value!== " "){
            console.log(e.target.value)
            dispatch(addSearchMovies(e.target.value));
            // navigate('/search');
            setDisplayDiv(true);
        }
    }
    
    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-center items-center fixed z-20">
                <AuthUpdate />
                <div className="w-[25%] h-[100px] bg-black flex flex-row justify-center items-center">
                    <h1 className="text-red-500">Movie App</h1>
                </div>
                <div className="w-[420px] h-[50px] bg-black border-2 border-slate-500 flex absolute rounded-full items-center border-1 py-2 px-1 flex">
                    <input 
                        placeholder="Search Movie..." 
                        className="w-full  h-full pl-[15px] bg-black focus:outline-none text-gray-500"
                        onKeyDown={handleKeyDown}
                        onChange={(e)=>e.target.value.length>0 ? setShowSearchMovies(true) : (setShowSearchMovies(false), setDisplayDiv(false))}
                    />
                    {showSearchMovies && <div className="w-8 h-8 p-2 rounded-full flex justify-center items-center bg-gray-500 cursor-pointer">X</div>}
                    {/* {showSearchMovies && <SearchMovie />} */}
                </div>
                <div className="w-[75%] h-[100px] bg-black flex justify-end items-center pr-[20px]">
                    <h1 className="text-white mr-5">{netflixUser}</h1>
                    <button
                        className="w-[100px] h-[40px] bg-red-500"
                        onClick={handleSignout}
                    >Signout</button>
                </div>
            </div>
            <MainContainer />
            <SecondaryContainer />
            <div className="flex justify-center absolute top-120 w-full">
                    {displayDiv && <SearchMovie />}
            </div>
        </div>
    )
}
export default Browse;