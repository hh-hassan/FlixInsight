import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    
    name: "movies",

    initialState: {
        nowPlayingMovies: [],
        popularMovies: [],
        topRatedMovies: [],
        upcomingMovies: [],
    },

    reducers: {

        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = [...state.nowPlayingMovies, ...action.payload];
        },

        addPopularMovies: (state, action) => {
            state.popularMovies = [...state.popularMovies, ...action.payload];
        },

        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = [...state.topRatedMovies, ...action.payload];
        },

        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = [...state.upcomingMovies, ...action.payload];
        },
    }
});

export const { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = movieSlice.actions;

export default movieSlice.reducer;