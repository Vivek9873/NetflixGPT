
import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import GptSearch from './GptSearch'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'



const Browse = () => {
  const gpt = useSelector(store=>store.gpt);
  useNowPlayingMovies()
  useUpcomingMovies()
  useTopRatedMovies()
  usePopularMovies()
  
  return (
    <>
      <Header/>
      {
        gpt.toggleGPT?<GptSearch/>:
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>
      }
      
      

    </>
    
  )
}

export default Browse