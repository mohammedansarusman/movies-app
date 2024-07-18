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
        const mName = movie_name.current.value;
        mName && setDisplayDiv(true);
        !mName && setDisplayDiv(false);


    }

    return (
        <div className="flex flex-col">
            {console.log("Browse component rendered")}
            <div className="bg-red-800 flex flex-col
                md:bg-gray-900 md:w-full md:flex-row md:justify-center md:items-center md:fixed md:z-20
                lg:bg-black lg:w-full lg:flex-row lg:justify-center lg:items-center lg:fixed lg:z-20">
                <AuthUpdate />
                <div className="w-[20%] h-[100px] flex flex-row justify-center items-center bg-blue-500">
                    <h1 className="text-red-500">Movie App</h1>
                </div>
                <div className="lg:w-[380px] lg:h-[50px] lg:border-2 lg:border-slate-500 lg:flex lg:absolute lg:rounded-full lg:items-center lg:border-1 lg:py-2 lg:px-1 lg:bg-pink-500
                                md:w-[250px] md:h-[50px] md:border-2 md:border-slate-500 md:flex md:absolute md:rounded-full md:items-center md:border-1 md:py-2 md:px-1 ">
                    <input
                        ref={movie_name}
                        placeholder="Enter Movie name to search..."
                        className="lg:w-[90%]  lg:h-full lg:pl-[15px] lg:bg-black lg:focus:outline-none lg:text-gray-500
                                   md:w-[90%]  md:h-full md:pl-[15px] md:bg-black md:focus:outline-none md:text-gray-500 text-sm"
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
                <div className="lg:w-[80%] lg:h-[100px] lg:flex lg:flex-row lg:justify-end lg:items-center lg:pr-[20px] lg:bg-green-400
                                md:w-[80%] md:h-[100px] md:flex md:flex-col  md:items-end justify-center md:pr-[20px] md:bg-green-800">
                    <h1 className="text-white lg:mr-5">{netflixUser}</h1>
                    <button
                        className="w-[100px] h-[40px] bg-red-500"
                        onClick={handleSignout}
                    >Signout</button>
                </div>
            </div>
            <MainContainer />
            <SecondaryContainer />
            <div className="flex justify-center absolute w-full ">
                {displayDiv && <SearchMovie update={() => setDisplayDiv(false)} />}
            </div>
        </div>
    )
}
export default Browse;