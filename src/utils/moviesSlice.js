import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice(
    {
        name: "movies",
        initialState: {
            nowPlayingMovies: null,
            popularMovies: null,
            topRatedMovies: null,
            upComingMovies: null,
            trailer: null
        },
        reducers: {
            addNowPlayingMovies: (state, action) => {
                state.nowPlayingMovies = action.payload
            },
            addPopularMovies: (state, action) => {
                state.popularMovies = action.payload
            },
            addTopRatedMovies: (state, action) => {
                state.topRatedMovies = action.payload
            },
            addUpcomingMovies: (state, action) => {
                state.upComingMovies = action.payload
            },
            movieTrailer: (state, action) => {
                state.trailer = action.payload;

            }
        }

    }
)
export const { addNowPlayingMovies, movieTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = moviesSlice.actions;
export default moviesSlice.reducer