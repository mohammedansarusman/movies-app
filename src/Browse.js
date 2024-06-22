import { signOut } from "firebase/auth";
import { auth } from "./utils/firbase"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import AuthUpdate from "./AuthUpdate";
import usePlayingMovies from "./utils/Hooks/usePlayingMovies";
import useTopRatedMovies from "./utils/Hooks/useTopRatedMovies";

import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "./utils/Hooks/usePopularMovies ";
import useUpcomingMovies from "./utils/Hooks/useUpcomingMovies";

const Browse = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const netflixUser = useSelector((globalStore) => globalStore.user.userName)

    usePlayingMovies();
    useTopRatedMovies();
    usePopularMovies();
    useUpcomingMovies();


    const handleSignout = () => {
        signOut(auth);

    }
    return (
        <div>
            <div className="w-full  bg-blue-400 flex justify-center z-10 relative">
                <AuthUpdate />
                <div className="w-[25%] h-[100px] bg-black flex flex-row justify-center items-center">
                    <h1 className="text-red-500">Movie App</h1>
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