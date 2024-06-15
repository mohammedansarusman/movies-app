import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"Movie Slice",
    initialState:{
        nowPlayingMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        }
    }
})
console.log("movieSlice executed")

export default moviesSlice.reducer;
export const {addNowPlayingMovies} = moviesSlice.actions;