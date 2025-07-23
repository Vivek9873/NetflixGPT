import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { YOUR_API_KEY } from "../utils/constants";


const usePopularMovies = ()=>{
    const popularMovies = useSelector(store=>store.movie.popularMovies);
    const dispatch = useDispatch();
    const getPopularMovies = async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${YOUR_API_KEY}`);
        const json = await data.json()
        // console.log("Popular",json);
        dispatch(addPopularMovies(json?.results))
    }

    useEffect(()=>{
        !popularMovies&& getPopularMovies();
    },[])
}

export default usePopularMovies