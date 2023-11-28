 
 import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosPublic from "../Hooks/UseAxiosPublic";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const handleGoogleSignIn = () => {
        googleLogin()
        .then(res=>{
         const userInfo = {
            email: res.user?.email,
            name: res.user?.displayName
         }
         axiosPublic.post('/users', userInfo)
         .then(result=>{
            console.log(result.data);
            navigate('/')
         })
        })

    }
    return (
      <>
        <div className="divider">
            Or
            
        </div>
        <div className="mx-auto mb-4">
            <button onClick={handleGoogleSignIn} className="btn bg-green-500  hover:bg-green-500  uppercase">
                <FcGoogle className="text-xl"></FcGoogle>
                Continue with Google</button>
        </div>
      </>
    );
};

export default SocialLogin;