import { useState } from "react";
import Header from "./Header"

const Login = () => {

  const [isSignInForm, setSignInForm] = useState(true)

  const toggleSignInForm = () =>{
    setSignInForm(!isSignInForm);
    
  }

  return ( 
    <div>
      <Header/>
      <div className="absolute">
        <img alt = "bg-banner"  src = "https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_small.jpg"/>
      </div>
      <form className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
 

      { !isSignInForm && <input type = "text" 
        placeholder="Full Name" 
        className="p-2 my-4 w-full bg-gray-700" />}

      <input type = "text" 
        placeholder="Email Addess" 
        className="p-2 my-4 w-full bg-gray-700" />


        <input type = "password" 
        placeholder="Password" 
        className="p-2 my-4 w-full bg-gray-700" />

        <button className="p-4 my-6 bg-red-700 w-full rounded-lg ">{isSignInForm ? "Sign In" : "Sign Up"}</button>


        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
         {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now."}</p>
      </form>
 
      </div>
  );
}  

export default Login