import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "Movie Slice",
    initialState: {
        nowPlayingMovies: null,
        trailerUniqueId: null,
        topRatedMovies: null,
        popularMovies: null,
        upcomingMovies: null,
        hoverMovie: 1022789,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTrailerId: (state, action) => {
            state.trailerUniqueId = action.payload;
        },
        addHoverMovie: (state, action) => {
            state.hoverMovie = action.payload;
        },
    }
})
export default moviesSlice.reducer;
export const { addNowPlayingMovies, addTrailerId, addTopRatedMovies, addPopularMovies, addUpcomingMovies, addHoverMovie } = moviesSlice.actions;