import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MAX_CHAR = 200;
const MainContainer = () => {
    const mainMovie = useSelector(store=>store.movie?.currentMovie);
    if(!mainMovie) return;
    // const mainMovie = movies[0];
    const {title,overview,id} = mainMovie;
    const description = overview.length>MAX_CHAR? overview.slice(0,MAX_CHAR)+"...":overview

  return (
    <div className='pt-[30%] bg-black md:pt-0'>
        <VideoTitle title={title} overview={description}/>
        <VideoBackground movieId = {id}/>
    </div>
  )
}

export default MainContainer