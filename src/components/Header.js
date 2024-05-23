import React from 'react'

import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("./error")
    });
  }


  return (
    <div className='flex justify-between  w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-44' alt = "Logo" src = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" /> 
       
       {user && <div className='flex p-4  m-3'>
        <img className='w-9 h-9' alt = "profile" 
        src = {user?.photoURL}/>
      <button
      onClick={handleSignOut}
      className='font-bold text-white p-2 '>[Sign Out]</button>
       </div>
}
  
       </div>

 
  )
}

export default Header