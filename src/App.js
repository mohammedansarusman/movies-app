import Body from './Body';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from "./Browse";
import {useEffect} from "react";
import {auth} from "./utils/firbase"
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { updateName } from './utils/redux/userSlice';




function App() {
  const dispatch =useDispatch();
  useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
          console.log("user in onauthstate",user.displayName)
          dispatch(updateName(user?.displayName));
      })
  },[])

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/browse",
      element:<Browse />
    }
  ])

  return (
    <div className="App">
      {console.log("app component rendered")}
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
