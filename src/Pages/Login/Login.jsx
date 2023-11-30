import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { auth } from "../../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";
import { sendPasswordResetEmail } from "firebase/auth";



const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const Navigate = useNavigate();
  const [loginError, setLoginError] = useState('');
  const [success, setSuccess] = useState('');
  const emailRef = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const result = await signInUser(email, password);
      console.log(result);
      setLoginError('');
      setSuccess('Login Successful');
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'Welcome back!',
      });
    } catch (error) {
      console.error(error);
      setLoginError('Invalid email or password. Please try again.');
      setSuccess('');
      Swal.fire({
        icon: 'error',
        title: 'Login Error',
        text: 'Invalid email or password. Please try again.',
      });
    }
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      console.log('Please provide an email', emailRef.current.value);
      return;
    }
    // Handle forgot password logic (send reset email)
    //      if(data.insertedId){
//       Swal.fire({
//         title: 'Success!',
//         text: 'Your Car is nicely selected',
//         icon: 'success',
//         confirmButtonText: 'Thank You!'
//       });
// }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Please Check Your Email');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };


return (
    <div>
      <div className="hero min-h-screen" >
        <div className="hero-content lg:flex-cols-reverse">
        <div className="w-96 h-96 hover:scale-110 transition-all">
      <img src="https://i.ibb.co/gwJzscB/login.jpg" alt="" />
      {/* <iframe src="https://gifer.com/embed/ID5G" width="480" height="672" frameBorder="0" allowFullScreen></iframe><p><a href="https://gifer.com"></a></p> */}
      <div className="items-center justify-center w-full h-full">
            <video autoPlay muted loop className="video w-full h-1/2  shadow-white" >
            <source src="/src/assets/login.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
          </div>
       
    
      </div>

  {/* <div className="text-start lg:text-left">
    <h1 className="text-5xl text-indigo-600 font-mono font-bold">Login!</h1>
  </div> */}
   

     <div className="card max-w-lg w-full bg-gradient-to-r from-violet-600 from-10% via-sky-300 via-30% to-emerald-800 to-90% " >
     <form onSubmit={handleLogin} className="card-body"> 
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg font-bold text-white px-5 font-serif">Email</span>
        </label>
        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          className="input input-bordered"
          required
                />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text text-lg font-bold text-white font-serif">Password</span>
    </label>
    <input
      type="password"
      name="password"
      placeholder="Password"
      className="input input-bordered"
      required
    />
    <label className="label">


      <a onClick={handleForgetPassword} href="#" className="label-text-alt text-yellow-600 font-serif text-sm link link-hover">
      


        Forgot password?
      </a>
    </label>
  </div>
  <div className="form-control mt-6">
    <button className="btn bg-black text-white">Login</button>
    <p className="font-serif text-start ml-10">
    <i>  Do not have an account?
      
      <Link className="font-serif" to="/register">
        <button className="btn btn-ghost text-white font-bold">Register</button>
      </Link>

      first.</i>
    </p>

<p className="   font-mono py-5 font-semibold text-orange-800 text-center items-center" >Or Login With</p> <p>
        <button onClick={handleGoogleSignIn}
          className="btn bg-black rounded-s-3xl rounded-e-3xl px-28 ml-24 py-2  text-orange-300"
        >
          <FcGoogle className='w-8 h-6'></FcGoogle>
        </button>
      </p>
              </div>
            </form>
            {loginError && <p className="text-red-700">{loginError}</p>}
            {success && <p className="text-green-700">{success}</p>}
          </div>
        </div>
        <div>
         {/* <Helmet>
          <title>Abrar's Dine | Login </title>
        </Helmet> */}
         </div>
         </div>
      </div>
  );
};

export default Login;
