import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LANGUAGE from '../utils/languageConstants';
import { YOUR_API_KEY } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';
import OpenAI from 'openai';

const GptSearchBar = () => {
    const dispatch = useDispatch()
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);
    const apiText = useRef(null);

    const getSearchMoviesTMDB = async (movie) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${YOUR_API_KEY}`)
        const json = await data.json();
        return json.results
    }
    const handleGptSearch = async () => {
        const userApiKey = apiText.current.value?.trim();
        let getMovies = [];
        if (userApiKey && searchText.current.value) {

            try {
                const openai = new OpenAI({
                    apiKey: userApiKey, // This is the default and can be omitted
                    dangerouslyAllowBrowser: false
                });


                const gptQuery = "Act as a movie recommendation system and suggest some movies for the query" + searchText.current.value + ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadae, Sholay, Don, Golmal, Koi Mil Gaya";

                const gptResults = await openai.chat.completions.create({
                    messages: [{ role: "user", content: gptQuery }],
                    model: 'gpt-3.5-turbo',
                });


                // console.log(gptResults.choices?.[0]?.message?.content);
                getMovies = gptResults.choices?.[0]?.message?.content.split(",")

            }
            catch (error) {
                console.error("OpenAI error:", error);
                alert("Error using OpenAI API. Falling back to default movies.");
                getMovies = ["Spiderman", "Iron Man", "Hera Pheri", "Exorcism", "Don"];
            }


        }
        else {
            getMovies = ["Spiderman", "Iron Man", "Hera Pheri", "Exorcism", "Don"]

        }


        const data = getMovies.map(movie => getSearchMoviesTMDB(movie));

        // [Promies,Promise,Promise,Pormise,Promse]
        const movieData = await Promise.all(data);
        console.log(movieData)
        dispatch(addGptMovieResult({ movieNames: getMovies, movieResults: movieData }));
    }

    return (
        <div className='pt-[30%] md:pt-[10%] flex justify-center'>
            <form onSubmit={(e) => e.preventDefault()} className='w-full  md:w-1/2 bg-black grid grid-cols-12'>
                <input ref={searchText} className='border-gray-500 p-4 m-4 col-span-6'
                    type='text' placeholder={LANGUAGE[langKey].Placeholder} />
                <input ref={apiText} className='border-gray-500 p-4 m-4 col-span-3'
                    type='text' placeholder="OPENAI API" />
                <button onClick={handleGptSearch} className='py-2 px-4 m-4 rounded-lg bg-red-700 text-white col-span-3'>{LANGUAGE[langKey].Search}</button>

            </form>
        </div>
    )
}

export default GptSearchBar