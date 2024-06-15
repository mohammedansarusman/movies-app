import { signOut } from "firebase/auth";
import { auth } from "./utils/firbase"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import AuthUpdate from "./AuthUpdate";
import usePlayingMovies from "./utils/Hooks/usePlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log("hello");

    const netflixUser = useSelector((globalStore) => globalStore.user.userName)
    console.log("user name:", netflixUser)

    console.log("before usePlayingMovies")
    usePlayingMovies();

    console.log("after usePlayingMovies")


    const handleSignout = () => {
        signOut(auth);

    }
    return (
        <div>
            <div className="w-full h-[100%] bg-black flex justify-center">
                {console.log("rendered Browse component")}
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