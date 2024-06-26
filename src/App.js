import Body from './Body';
import MovieDetails from './MovieDetails';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from "./Browse";
import SearchMovie from './SearchMovie';




function App() {
  
  
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/browse",
      element:<Browse />
    },
    {
      path:"/browse/movie/:id",
      element:<MovieDetails />
    },
    {
      path:"/search",
      element:<SearchMovie />
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
