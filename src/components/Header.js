

import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGE, USER_LOGO } from "../utils/constants";
import { toggelGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  
  const dispatch = useDispatch();
  const user = useSelector(store=>store.user);
  const gpt = useSelector(store=>store.gpt.toggleGPT);
  const navigate = useNavigate()
  // console.log(user)
  const handleSignout = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });

  }

  const handleGptSearch = ()=>{
    dispatch(toggelGptSearchView());
  }

  const handleLangChange=(e)=>{
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
        navigate("/browse")
    }
    else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
    }
    });
    return ()=> unsubscribe();
  },[])
  return (
    <div className='absolute  px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex flex-col md:flex-row  justify-between'>
        <img 
        className="w-44 mx-auto md:mx-0" 
        src={NETFLIX_LOGO}
        alt='Netflix-logo'/>
        {
          user?
          <div className='flex p-2 md:gap-2 justify-between'>
            {gpt&&<select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLangChange}>
              {
                SUPPORTED_LANGUAGE.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
              }
            </select>
            }
            <button onClick={handleGptSearch} className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg">
              {gpt?"HomePage":"GPT Search"}</button>
            <img className='w-12 h-12 hidden md:block' src={USER_LOGO} alt='User-Logo' />
            <button className='font-bold text-white' onClick={handleSignout}>(Sign Out)</button>
          </div>
          :<></>
        }
    </div>
  )
}

export default Header