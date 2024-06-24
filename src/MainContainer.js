import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle"
import VideoBackGround from "./VideoBackGround"
const MainContainer = () => {
    const movies = useSelector(store => store.movie.nowPlayingMovies)
    const id = useSelector(store => store.movie.hoverMovie)
    console.log("inside movies:", movies)
    console.log("id: in store",id);

    if (movies === null) return;
    const mainMovie = movies[0];
    console.log("main movie", mainMovie);

    const { original_title, overview } = mainMovie;
    return (
        <div className="w-full h-[100vh] -mt-[100px]">
            {console.log("main container render")}
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackGround movieId={id} />
        </div>
    )
}
export default MainContainer;