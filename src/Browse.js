import { signOut } from "firebase/auth";
import {auth} from "./utils/firbase"
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Browse = () =>{
    const navigate = useNavigate();
    const netflixUser = useSelector((globalStore)=>globalStore.user.userName)
    const handleSignout = () =>{
        signOut(auth);
        navigate("/");

    }
    return(
        <div>
            <h1>Browser</h1>
            <button 
                className="w-[100px] h-[40px] bg-red-500"
                onClick={handleSignout}
            >Signout</button>
            <h1>{netflixUser}</h1>

        </div>
    )
}
export default Browse;