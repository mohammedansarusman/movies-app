import {useEffect} from "react";
import {auth} from "./utils/firbase"
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { updateName } from './utils/redux/userSlice';
import {useNavigate} from "react-router-dom"

const AuthUpdate = () =>{
    const dispatch =useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
        if(user){
            auth.currentUser && dispatch(updateName(user?.email));
            console.log("onAuthState called")
            navigate('/browse');
        }else{
            navigate("/");
        }
      })
  },[])
    return(
        <div>

        </div>
    )
}
export default AuthUpdate;