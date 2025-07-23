import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
    const movieNames = useSelector(store=>store.gpt?.getmovieNames);
    const movieResult = useSelector(store=>store.gpt?.getmovieResult);

    // console.log("Movie ke naam hia isme ",movieNames)
    // console.log("Movie ke result  hia isme ",movieResult)
    if(!movieNames) return;
    if(!movieResult) return;
  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-80'>
        <div>
            {
                movieNames.map((movie,index)=><MovieList key={movie} title={movie} movies={movieResult[index]}/>)
            }
            
        </div>
    </div>
  )
}

export default GptMovieSuggestions