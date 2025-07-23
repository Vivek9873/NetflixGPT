import { useDispatch, useSelector } from "react-redux";
import { YOUR_API_KEY } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useUpcomingMovies=()=>{
    const upcomingMovies = useSelector(store=>store.movie.upcomingMovies);
    const dispatch = useDispatch();
    const getUpcomingMovies = async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${YOUR_API_KEY}`);
        const json = await data.json();
        // console.log(json);
        dispatch(addUpcomingMovies(json?.results));

    }

    useEffect(()=>{
       !upcomingMovies&& getUpcomingMovies();
    },[])
}

export default useUpcomingMovies;