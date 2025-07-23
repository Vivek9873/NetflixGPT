import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:"gpt",
    initialState:{
        toggleGPT:false,
        getmovieResult:null,
        getmovieNames:null,
    },
    reducers:{
        toggelGptSearchView:(state,action)=>{
            state.toggleGPT = !state.toggleGPT;
        },
        addGptMovieResult:(state,action)=>{
            const {movieNames,movieResults} = action.payload;
            state.getmovieNames = movieNames;
            state.getmovieResult = movieResults;
        }
    }
})

export const {toggelGptSearchView,addGptMovieResult} = GptSlice.actions;
export default GptSlice.reducer;