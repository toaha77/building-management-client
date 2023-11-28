  
 import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
 
 import SocialLogin from "../SocialLogin";
import UseAuth from "../../Hooks/useAuth";

const Login = () => {
   const { signIn } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
   

 

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };

  

  return (
    <>
      <Helmet>
        <title>RentalPlace - Login</title>
      </Helmet>
      
      <div className="hero min-h-screen">
       
        <div className="hero-content flex-col md:flex-row-reverse">
        
          <div className="text-center md:w-1/2 lg:text-left">
          
             <img src='/20944201.jpg' className="h-[550px]" alt="" />
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              
              <div className="form-control mt-6">
                 
                <input
                   className="btn bg-green-500 hover:bg-green-500"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="px-6">
              <small>
                New Here? <Link to="/signup">Create an account</Link>{" "}
              </small>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
