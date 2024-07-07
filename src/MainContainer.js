import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle"
import VideoBackGround from "./VideoBackGround"
const MainContainer = () => {
    console.log("MainContainer component called");
    const movies = useSelector(store => store.movie.updateMovie);

    if (movies === null) return;

    const { original_title, overview, id } = movies;
    return (
        <div className="w-full h-[100vh] -mt-[100px]">
            {console.log("MainContainer component rendered")}
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackGround movieId={id} />
        </div>
    )
}
export default MainContainer;