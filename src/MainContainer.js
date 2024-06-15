import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle"
import VideoBackGround from "./VideoBackGround"
const MainContainer = () => {
    const movies = useSelector(store => store.movie?.nowPlayingMovies)
    { console.log("list of movies:", movies) }
    if (movies === null) return;
    const mainMovie = movies[0];
    const { original_title, overview, id } = mainMovie;
    return (
        <div className="bg-red-300 w-full h-[100vh]">
            {console.log("list of movies:", movies)}
            {console.log("main movies:", mainMovie)}

            <VideoTitle title={original_title} overview={overview} />
            <VideoBackGround movieId = {id}/>

        </div>
    )
}
export default MainContainer;