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
    // const [showSearchMovies, setShowSearchMovies] = useState(false);


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
        if (e.key === "Enter") {
            dispatch(addSearchMovies(e.target.value));
            navigate('/search');
            // setShowSearchMovies(true);
        }
    }
    
    return (
        <div>
            <div className="w-full flex justify-center items-center z-10 relative">
                <AuthUpdate />
                <div className="w-[25%] h-[100px] bg-black flex flex-row justify-center items-center">
                    <h1 className="text-red-500">Movie App</h1>
                </div>
                <div className="w-[400px] h-[40px] bg-black flex absolute rounded-lg items-center">
                    <input 
                        placeholder="Search Movie..." 
                        className="w-full  h-full pl-[25px] rounded-lg bg-black text-white border-2 mr-[25px]"
                        onKeyDown={handleKeyDown}
                    />
                    {/* {showSearchMovies && <SearchMovie />} */}
                    {/* <button className="w-[200px] h-[50px] text-white bg-gray-500 text-center rounded-lg">Search</button> */}



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
        </div>
    )
}
export default Browse;