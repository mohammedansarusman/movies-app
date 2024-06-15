import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"Movie Slice",
    initialState:{
        nowPlayingMovies:null,
        trailerUniqueId:"L4DrolmDxmw",
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerId:(state,action)=>{
            state.trailerUniqueId = action.payload;
        }
    }
})
console.log("movieSlice executed")

export default moviesSlice.reducer;
export const {addNowPlayingMovies, addTrailerId} = moviesSlice.actions;