import { signOut } from "firebase/auth";
import { auth } from "./utils/firbase"
import { useDispatch, useSelector } from "react-redux";
import AuthUpdate from "./AuthUpdate";

import usePlayingMovies from "./utils/Hooks/usePlayingMovies";
import useTopRatedMovies from "./utils/Hooks/useTopRatedMovies";
import useSearchMovies from "./utils/Hooks/useSearchMovies";
import usePopularMovies from "./utils/Hooks/usePopularMovies ";
import useUpcomingMovies from "./utils/Hooks/useUpcomingMovies";

import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { addHoverMovie, addSearchMovies, addUpdateMovie } from "./utils/redux/movieSlice";
import SearchMovie from "./SearchMovie";
import { useState, useRef, useEffect } from "react";
import useMovieDetails from "./utils/Hooks/useMovieDetails";
import { searchIcon } from "./Images/imageLinks";



const Browse = () => {
    console.log("Browse component called");
    const dispatch = useDispatch();
    const movie_name = useRef('');

    const [displayDiv, setDisplayDiv] = useState(false);

    const netflixUser = useSelector((globalStore) => globalStore.user.userName)
    // const movieName = useSelector((globalStore) => globalStore.movie.searchMovies);
    const movieId = useSelector((globalStore) => globalStore.movie.nowPlayingMovies);

    usePlayingMovies();
    useTopRatedMovies();
    usePopularMovies();
    useUpcomingMovies();
    useSearchMovies(movie_name.current.value);


    const handleSignout = () => {
        signOut(auth);

    }

    const handleSearchIcon = () => {
        const mName=movie_name.current.value;
        mName && setDisplayDiv(true);
        !mName && setDisplayDiv(false);

    
    }

    return (
        <div className="flex flex-col">
            {console.log("Browse component rendered")}
            <div className="w-full flex justify-center items-center fixed z-20">
                <AuthUpdate />
                <div className="w-[25%] h-[100px] bg-black flex flex-row justify-center items-center">
                    <h1 className="text-red-500">Movie App</h1>
                </div>
                <div className="w-[420px] h-[50px] bg-black border-2 border-slate-500 flex absolute rounded-full items-center border-1 py-2 px-1 flex">
                    <input
                        ref = {movie_name}
                        placeholder="Enter Movie name to search..."
                        className="w-[90%]  h-full pl-[15px] bg-black focus:outline-none text-gray-500"
                    // onChange={(e) => e.target.value.length > 0 ? setShowSearchMovies(true) : (setShowSearchMovies(false), setDisplayDiv(false))}
                    />
                    <div
                        className="rounded-full flex justify-center items-center cursor-pointer m-0"
                        onClick={handleSearchIcon}
                    >
                        <img
                            className="w-5"
                            src={searchIcon}>
                        </img>
                    </div>
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
            <div className="flex justify-center absolute w-full ">
                {displayDiv && <SearchMovie update = {()=>setDisplayDiv(false)}/>}
            </div>
        </div>
    )
}
export default Browse;