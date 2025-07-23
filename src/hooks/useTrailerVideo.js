import  { useEffect } from 'react'
import { YOUR_API_KEY } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice';


const useTrailerVideo = (movieId)=>{

    const dispatch = useDispatch();
    const trailerVideo = useSelector(store=>store.movie?.trailerVideo);
    const getMovieVideos = async ()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${YOUR_API_KEY}`)
        const json = await data.json();
        // console.log(json);

        const filterData = json.results.filter(video=>video.type==="Trailer")
        const trailer = filterData.length?filterData[0]:json.results[0];
        // console.log(trailer);
        dispatch(addTrailerVideo(trailer));
    }
    useEffect(()=>{
        getMovieVideos();
    },[movieId])
    return trailerVideo;
}
export default useTrailerVideo;