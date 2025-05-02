import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieResults: null,
        movieName: null
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const { movieName, movieResults } = action.payload
            state.movieName = movieName
            state.movieResults = movieResults
        },
        removeGptMovieResult: (state, action) => {
            state.movieName = null;
            state.movieResults = null;
        }

    }
})

export default gptSlice.reducer;
export const { toggleGptSearchView, addGptMovieResult, removeGptMovieResult } = gptSlice.actions; 