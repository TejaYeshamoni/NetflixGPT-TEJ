import { useState, useRef } from "react";
import Header from "./Header"
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {

  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password =  useRef(null)
 

  const handleButtonClick = () => {
    const message = checkValidData( email.current.value, password.current.value);
    setErrorMessage(message);

    if(message) return;

    if(!isSignInForm){
      //SIGN UP 
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
       const user = userCredential.user;
       updateProfile(user, {
        displayName: name.current.value, photoURL:USER_AVATAR
      }).then(() => {
        const {uid, email , displayName, photoURL} = auth.currentUser;
        dispatch(addUser({uid: uid,
           email: email, displayName: displayName, 
           photoURL : photoURL}));
       
      }).catch((error) => {
        setErrorMessage(error.message)
      });
       
       
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage ) 
  });
 }
    else{
      // SIGN IN
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
     .then((userCredential) => {
    
      const user = userCredential.user;
      
  }) 
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });
    }
  }

  const toggleSignInForm = () =>{ 
    setSignInForm(!isSignInForm);
    
  }

  return ( 
    <div>
      <Header/>
      <div className="absolute">
        <img alt = "bg-banner"  src = "https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_small.jpg"/>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
 

      { !isSignInForm && <input type = "text" 
        ref = {name}
        placeholder="Full Name" 
        className="p-2 my-4 w-full bg-gray-700" />}

      <input 
      ref = {email}
      type = "text" 
        placeholder="Email Addess" 
        className="p-2 my-4 w-full bg-gray-700" />


        <input
        ref = {password}
        
        type = "password" 
        placeholder="Password" 
        className="p-2 my-4 w-full bg-gray-700" />

        <p className="text-red-500 font-bold text-md py-2">{errorMessage}</p>

        <button className="p-4 my-6 bg-red-700 w-full rounded-lg " onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>


        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
         {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now."}</p>
      </form>
 
      </div>
  );
}  

export default Login