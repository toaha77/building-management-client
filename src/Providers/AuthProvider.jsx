import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Firebase.config";
import useAxiosPublic from "../Hooks/UseAxiosPublic";
   
export const AuthContext = createContext(null)
const auth= getAuth(app)
const provider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()
    const googleLogin = () => {
      setLoading(true)
      return signInWithPopup(auth, provider);
    };
  
  
   const createUser = (email, password) =>{
    setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
   }
  
   const handleProfile =(name,photo) =>{
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo
    })
   }
   const logOut =() =>{
    return signOut(auth)
   }
   const signIn = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
   }

   const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    });
}

   useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setLoading(false)
        if (currentUser) {
          const userInfo = {email: currentUser.email}
          axiosPublic.post('/jwt', userInfo)
          .then(res =>{
            if (res.data.token) {
              localStorage.setItem('token', res.data.token)
            }
          })
        }else{
          localStorage.removeItem('token')
        }
  
       })
       return ()=>{
        unSubscribe()
       }
   }, [axiosPublic])
    const AuthInfo = {
      googleLogin,
      createUser,
       signIn,
       logOut,
       updateUserProfile,
       handleProfile,
       user,
       loading
    };
  
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;