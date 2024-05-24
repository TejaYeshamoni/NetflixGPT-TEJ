import React, { useEffect } from 'react'

import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useDispatch,useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
      
    }).catch((error) => {
      navigate("./error")
    });
  }

  useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth,(user) => {
      if (user){
        const {uid, email, displayName, photoURL} = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      }else{
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unSubscribe when component unMounts
    return () => unsubscribe();
  },[]);


  return (
    <div className='flex justify-between  w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-44' alt = "Logo" src = {LOGO} /> 
       
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