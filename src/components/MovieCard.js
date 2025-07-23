import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
import { useDispatch, useSelector} from 'react-redux'
import { addCurrentMovie } from '../utils/movieSlice';
import { toggelGptSearchView } from '../utils/gptSlice';

const MovieCard = ({movie,path}) => {
  const isGPT = useSelector(store=>store.gpt?.toggleGPT)
  const dispatch = useDispatch();
  const handleMovie = ()=>{
      dispatch(addCurrentMovie(movie))
      isGPT && dispatch(toggelGptSearchView());
      
  }
  if(!path) return null;
  return (
    <div className=' w-36 pr-4 cursor-pointer' onClick={handleMovie}>
        <img  alt="Movies-Logo" src={IMG_CDN_URL+path}/>
    </div>
  )
}

export default MovieCard