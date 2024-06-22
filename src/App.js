import Body from './Body';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from "./Browse";




function App() {
  
  
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
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
