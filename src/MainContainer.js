import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle"
import VideoBackGround from "./VideoBackGround"
const MainContainer = () => {
    const movies = useSelector(store => store.movie.nowPlayingMovies)
    if (movies === null) return;
    const mainMovie = movies[0];
    const { original_title, overview, id } = mainMovie;
    return (
        <div className="w-full h-[100vh] -mt-[100px]">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackGround movieId = {id}/>
        </div>
    )
}
export default MainContainer;