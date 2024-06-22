import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle"
import VideoBackGround from "./VideoBackGround"
import { useState, useEffect } from "react";
const MainContainer = () => {
    const movies = useSelector(store => store.movie.nowPlayingMovies)
    const [random,setRandom] = useState(0)
    console.log("inside movies:",movies)

    const randomValue = () =>{
        return Math.floor(Math.random()*20)
    }
    useEffect(()=>{
        setRandom(randomValue())
    },[])

    if (movies === null) return;

    const mainMovie = movies[random];
    console.log("main movie",mainMovie);

    const { original_title, overview, id } = mainMovie;
    return (
        <div className="w-full h-[100vh] -mt-[100px]">
            {console.log("main container render")}
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackGround movieId = {id}/>
        </div>
    )
}
export default MainContainer;