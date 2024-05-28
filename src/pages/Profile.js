import { updateProfile } from "firebase/auth";
import { auth } from "../services/firebase";
import { useDispatch } from "react-redux";
import { updateUser } from "../stores/userSlice";
import { AVATAR_BLUE, AVATAR_RED } from "../utils/constants";

const Profile = () => {
  const dispatch = useDispatch();
  // https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg
  const updatedInfo = {
    displayName: "TEJA",
    photoURL: AVATAR_BLUE
  }
  const handleUpdateProfile = () => {
    if (!auth.currentUser) return;
    updateProfile(auth.currentUser, {
      displayName: updatedInfo.displayName,
      photoURL: updatedInfo.photoURL
    }).then(() => {
      const { displayName, photoURL } = auth.currentUser;
      dispatch(updateUser({
        displayName: displayName,
        photoURL: photoURL
      }))
    }).catch((error) => {
      console.log('Error -->', error)
      // An error occurred
    });

    console.log('Updating...')
  }

  return (
    <div className="search-page">
      <div className={`bg-skin w-full h-[430px] absolute top-0 -z-0 bg-gradient-to-b from-indigo-800 to-[#141414] transition-colors`}></div>
      <div className="search relative">
        <div className="mt-3 px-4 md:px-12 py-3 min-h-[400px] flex justify-center items-center">
          <h1 className='text-5xl text-white font-bold'>Coming Soon...</h1>
        </div>
      </div>
    </div>
    
  )
}

export default Profile;