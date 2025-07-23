import { useDispatch, useSelector } from "react-redux";
import { YOUR_API_KEY } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useTopRatedMovies=()=>{
    const topRatedMovies = useSelector(store=>store.movie.topRatedMovies);
    const dispatch = useDispatch();
    const getTopRatedMovies = async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${YOUR_API_KEY}`);
        const json = await data.json();
        // console.log(json);
        dispatch(addTopRatedMovies(json?.results));

    }

    useEffect(()=>{
       !topRatedMovies&&  getTopRatedMovies();
    },[])
}

export default useTopRatedMovies;