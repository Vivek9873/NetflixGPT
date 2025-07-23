import { useDispatch, useSelector } from 'react-redux';
import { addCurrentMovie, addNowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';
import {YOUR_API_KEY } from '../utils/constants'

const useNowPlayingMovies = ()=>{
    const nowPlayingMovies = useSelector(store=>store.movie.nowPlayingMovies);
    const dispatch = useDispatch();
    const getNowPlayingMovies = async()=>{
        const apiResponse = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${YOUR_API_KEY}`);
        const json = await apiResponse.json();
        // console.log(json);
        dispatch(addNowPlayingMovies(json.results))
        dispatch(addCurrentMovie(json.results[0]))
    }

    useEffect(()=>{
        !nowPlayingMovies && getNowPlayingMovies()
    },[])
}
export default useNowPlayingMovies;