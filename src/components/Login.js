import  { useRef, useState } from 'react'
import Header from './Header'
import { checkValidate } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BACKGROUND_IMAGE } from '../utils/constants';

const Login = () => {
    const [errorMessage,setErrorMessage] = useState(null);
    const [isSignIn,setIsSignIn] = useState(true);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const dispatch = useDispatch()

    const toggleSignInForm = ()=>{
        setIsSignIn(!isSignIn);
    }
    const handleValidation = ()=>{
        // console.log(email.current.value)
        // console.log(password.current.value)
        
        // if(name.current) console.log(name.current.value);
        const message = name.current?checkValidate(email.current.value,password.current.value,name.current.value):checkValidate(email.current.value,password.current.value);
        setErrorMessage(message);

        if(!isSignIn){

            // Sign Up method 
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // console.log(user);
                updateProfile(user, {
                displayName: name.current.value,
                // we can also add photo of the user 
                // photoURL: "https://example.com/jane-q-user/profile.jpg"
                }).then(() => {
                    const {uid,email,displayName} = auth.currentUser;
                    dispatch(addUser({uid:uid,email:email,displayName:displayName}))
                // Profile updated!
                }).catch((error) => {
                    setErrorMessage(error.message)
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage1 = error.message;
                setErrorMessage(errorCode +"-"+errorMessage1)

            });
        }
        else{
            // Sign In with existing email and password if not it will give an error 
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // console.log(user);

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage1 = error.message;
                setErrorMessage(errorCode+"-"+errorMessage1)
            });
        }
        
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img className='h-screen object-cover md:h-auto md:object-fill' src={BACKGROUND_IMAGE} alt='background' />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className=' w-9/12 md:w-4/12 bg-black p-12 absolute my-24 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='text-3xl font-bold  py-4'>{isSignIn?"Sign In":"Sign Up"}</h1>
            {!isSignIn && <input ref={name} type='text' placeholder='Full Name' className='p-2 my-4 w-full bg-gray-900 bg-opacity-50 border border-gray-500'/>}

            <input ref={email} type='text' placeholder='Email' className='p-2 my-4 w-full bg-gray-900 bg-opacity-50 border border-gray-500'/>

            
            <input ref={password} type='password' placeholder='Password' className='p-2 my-4 w-full bg-gray-900 bg-opacity-50 border border-gray-500'/>
            {errorMessage?<p className='text-red-700 font-bold'>{errorMessage}</p>:<></>}
            <button onClick={handleValidation} className='p-2 my-6 bg-red-700 w-full rounded-lg cursor-pointer'>{isSignIn?"Sign In":"Sign Up"}</button>

            <p className='py-4 cursor-pointer ' onClick={toggleSignInForm}>{isSignIn?"New to Netflix? Sign Up Now":
            "Already Registered! Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login